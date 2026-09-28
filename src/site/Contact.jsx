import React, { useEffect, useRef, useState } from "react";
import { site } from "./content";
import { Arrow, PageIntro } from "./Layout";
export default function Contact() {
  const [status, setStatus] = useState("idle"),
    [error, setError] = useState(""),
    [inquiry, setInquiry] = useState("");
  const busy = useRef(false),
    form = useRef(null),
    confirmation = useRef(null);
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    if (["hiring", "project", "collaboration", "other"].includes(type))
      setInquiry(type);
  }, []);
  useEffect(() => {
    if (status === "success") confirmation.current?.focus();
  }, [status]);
  async function submit(event) {
    event.preventDefault();
    if (busy.current) return;
    const payload = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    );
    if (!payload.name.trim() || !payload.message.trim()) {
      setError("Please include your name and a message.");
      return;
    }
    busy.current = true;
    setStatus("sending");
    setError("");
    const controller = new AbortController(),
      timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload).toString(),
        signal: controller.signal,
      });
      // Netlify accepts URL-encoded form submissions and returns HTML, not JSON.
      if (!response.ok)
        throw new Error(
          response.status === 429
            ? "Please wait a few minutes before trying again, or email me directly."
            : "Your message could not be sent. Your details are still here—please try again, or email me directly.",
        );
      setStatus("success");
      form.current.reset();
      setInquiry("");
    } catch (e) {
      setStatus("error");
      setError(
        e.name === "AbortError"
          ? "The request timed out. Please try again, or email me directly."
          : e.message,
      );
    } finally {
      clearTimeout(timeout);
      busy.current = false;
    }
  }
  return (
    <div className="contact-page">
      <PageIntro
        label="Contact"
        title="Get in touch."
        note={
          <>
            Good things start
            <br />
            with a hello.
          </>
        }
      >
        <p>
          A role, a project, or a good conversation.
          <br />
          I’d be happy to hear from you.
        </p>
      </PageIntro>
      <div className="wrap contact-content">
        <section className="contact-prompts" aria-label="Ways to connect">
          <div>
            <h2>Hiring or collaboration</h2>
            <p>Tell me about the role or team.</p>
          </div>
          <div>
            <h2>Have a project in mind?</h2>
            <p>
              Share what you’re working on. Message me for rates and project
              details.
            </p>
          </div>
        </section>
        <div className="form-scene">
          <section
            className="form-sheet"
            id="inquiry"
            aria-labelledby="form-title"
          >
            <div className="form-heading">
              <h2 id="form-title">Leave me a note.</h2>
              <p>Fields marked * are required.</p>
            </div>
            {status === "success" ? (
              <div
                className="form-success"
                ref={confirmation}
                tabIndex="-1"
                role="status"
              >
                <p className="eyebrow">Thank you</p>
                <h3>Your message has been sent.</h3>
                <p>I appreciate you reaching out.</p>
                <button
                  className="text-link"
                  type="button"
                  onClick={() => setStatus("idle")}
                >
                  Write another message <Arrow />
                </button>
              </div>
            ) : (
              <form
                ref={form}
                onSubmit={submit}
                aria-busy={status === "sending"}
                name="contact"
                method="post"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-grid">
                  <label>
                    Name *
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      maxLength="120"
                    />
                  </label>
                  <label>
                    Email *
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength="254"
                    />
                  </label>
                  <label>
                    What are you reaching out about?{" "}
                    <span className="optional">Optional</span>
                    <select
                      name="inquiry"
                      value={inquiry}
                      onChange={(e) => setInquiry(e.target.value)}
                    >
                      <option value="">Select an option</option>
                      <option value="hiring">Hiring opportunity</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="project">Project inquiry</option>
                      <option value="other">Something else</option>
                    </select>
                  </label>
                  <label>
                    Company or organization{" "}
                    <span className="optional">Optional</span>
                    <input
                      name="company"
                      autoComplete="organization"
                      maxLength="160"
                    />
                  </label>
                  <label className="full-field">
                    Relevant link <span className="optional">Optional</span>
                    <input
                      name="link"
                      type="url"
                      placeholder="https://…"
                      maxLength="1000"
                      aria-describedby="link-hint"
                    />
                    <span id="link-hint" className="field-hint">
                      A job posting, website, or brief.
                    </span>
                  </label>
                  <label className="full-field">
                    Message *
                    <textarea
                      name="message"
                      rows="6"
                      required
                      maxLength="5000"
                      placeholder="What do you have in mind? I’d love to hear more."
                    />
                  </label>
                  <div className="honeypot" aria-hidden="true">
                    <label>
                      Leave this empty
                      <input
                        name="website_url"
                        tabIndex="-1"
                        autoComplete="off"
                      />
                    </label>
                  </div>
                </div>
                {error && (
                  <p className="form-error" role="alert">
                    {error} <a href={`mailto:${site.email}`}>{site.email}</a>
                  </p>
                )}
                <div className="form-bottom">
                  <button
                    className="button"
                    type="submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send message"}{" "}
                    <Arrow />
                  </button>
                  <p>I’ll use your details to respond to your inquiry.</p>
                </div>
              </form>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
