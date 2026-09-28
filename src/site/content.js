export const site = {
  name: "Aeon Chavez",
  email: "aeonchavez03@gmail.com",
  location: "Connecticut",
  linkedin: "https://www.linkedin.com/in/aeonchavez/",
  github: "https://github.com/ach0309",
  resume: "/files/Aeon_Chavez_Resume.pdf",
  url: "https://aeonchavez.info",
};

export const backgroundHighlights = [
  {
    id: "enterprise",
    title: "Enterprise software at IBM",
    kind: "Professional work",
    org: "IBM",
    date: "Jun 2021–May 2023",
    summary:
      "Two years contributing to enterprise interfaces, Python integrations, and CI/CD across storage and cloud teams.",
    detail:
      "On Storage Fusion, integrated Kafka messaging and Prometheus metrics through Python REST APIs and managed Docker images in JFrog Artifactory on OpenShift. Partnered with product, UX, and backend teams on React interfaces. On Spectrum Protect, worked on cloud UI features, technical reporting, CI/CD, and security scans.",
  },
  {
    id: "fullstack",
    title: "Full-stack development",
    kind: "Contract work",
    org: "Training and eTracking Solutions",
    date: "Jun–Jul 2026",
    summary:
      "Built Next.js and TypeScript features for a healthcare learning platform serving 60K+ users, working with AWS and AI-assisted development.",
    detail:
      "Contributed to a 2,900-course state-compliance catalog and a B2B/D2C migration. Worked through collaborative PR reviews, using AI-assisted development to support implementation and code quality.",
  },
  {
    id: "data",
    title: "Data science & applied ML",
    kind: "Fellowship",
    org: "The Knowledge House",
    date: "Jan–Jul 2026",
    summary:
      "Completed a data science fellowship applying Python, SQL, statistics, and machine learning to practical data problems.",
    detail:
      "Developed models, engineered features, and produced stakeholder-ready reports and visualizations. Documented data-quality decisions and analytical trade-offs throughout the fellowship.",
  },
  {
    id: "hackathon",
    title: "AI hackathon project",
    kind: "Hackathon",
    org: "AI for Impact · Everything Dough",
    date: "May 2026",
    summary:
      "Led team strategy, prompt engineering, and the live presentation of an AI booking assistant and CRM prototype for Everything Dough in Stamford.",
    detail:
      "Developed for a small business in Stamford, Connecticut, the prototype paired Lexi for booking inquiries with Crust for lead and pipeline information. Demonstrated live to nearly 50 attendees at AI for Impact.",
  },
];

export const projects = [
  {
    id: "dough",
    category: "Applied AI · Team project",
    title: "Everything Dough",
    color: "rose",
    description:
      "An AI booking assistant and CRM prototype developed for Everything Dough, a small business in Stamford, Connecticut.",
    contribution:
      "Led team strategy, prompt engineering, and the live presentation. Lexi handles booking inquiries; Crust brings lead and pipeline information into a dashboard.",
    outcome:
      "A hackathon prototype demonstrated live to nearly 50 attendees at AI for Impact.",
    tags: ["React", "AI integration", "Google Calendar", "Prompt engineering"],
    image: "/images/projects/everything-dough.png",
    alt: "Homepage of the Everything Dough hackathon demo",
    caption: "The actual hackathon demo",
    github: "https://github.com/ach0309/hackathon-everythingdough",
    live: "https://everything-dough-mockup-hackathon.vercel.app",
    liveLabel: "View prototype",
  },
  {
    id: "audio",
    category: "Machine learning · Capstone",
    title: "CNN Music Genre Classification",
    color: "sage",
    description:
      "An end-to-end audio pipeline with a local app that returns a track’s top three predicted genres.",
    contribution:
      "Led the team and worked across ticket planning, PR reviews, CI/CD, database design, preprocessing, and model development. Built with Python, PostgreSQL, PyTorch, FastAPI, and JavaScript.",
    outcome:
      "Trained a three-block CNN on GTZAN audio, reaching 30% test accuracy across 10 genres. The repository documents generalization limits and next steps; the demo runs locally.",
    tags: ["Python", "PostgreSQL", "PyTorch", "FastAPI"],
    image: "/images/projects/audio-confusion.png",
    alt: "Confusion matrix showing model predictions across ten music genres",
    caption: "Evaluation results across ten genres",
    github: "https://github.com/ach0309/audio-genre-classifier",
    figure: "/images/projects/audio-spectrograms.png",
    figureLabel: "View audio spectrograms",
  },
  {
    id: "fraud",
    category: "Data analysis · Classification",
    title: "Financial Fraud Detection",
    color: "blue",
    description:
      "Exploring fraud signals in a dataset of more than six million bank transactions.",
    contribution:
      "Performed exploratory analysis, engineered balance-related features, and built and evaluated a classifier. Investigated how threshold tuning changes the precision–recall trade-off.",
    outcome:
      "Reported ROC AUC of 0.9972. Lowering the decision threshold from 0.50 to 0.30 raised recall to 77%, while precision moved from 96% to 94%.",
    tags: ["Python", "Scikit-learn", "EDA", "Model evaluation"],
    image: "/images/projects/fraud-roc.png",
    alt: "ROC-AUC evaluation curve exported from the Financial Fraud Detection project",
    caption: "Actual ROC curve from the project",
    github: "https://github.com/ach0309/fraud-detector-ml",
    figure: "/images/projects/fraud-features.png",
    figureLabel: "View feature importance",
  },
];

export const clientProjects = [
  {
    id: "strength",
    category: "Web development · Commission",
    title: "Certified Strength",
    color: "sand",
    description:
      "A commissioned website for an online strength and powerlifting coaching business.",
    contribution:
      "Created a public-facing website that introduces the coach, explains the services, and gives prospective clients a way to get in touch.",
    outcome: "Explore the live website to see the delivered experience.",
    tags: ["Small business", "Web development"],
    image: "/images/projects/certified-strength.png",
    alt: "Certified Strength website showing its coaching introduction",
    caption: "The live commissioned website",
    live: "https://thecertifiedstrength.com",
    liveLabel: "Visit website",
  },
];

export const otherProjects = [
  {
    title: "Music Recommendation Engine",
    description:
      "Exploring song recommendations through lyrical features, dimensionality reduction, and clustering.",
    href: "https://github.com/ach0309/music-recommendation-ml",
  },
  {
    title: "Forest Fire Area Prediction",
    description:
      "Comparing regression approaches and documenting the limits of weather-based predictors.",
    href: "https://github.com/ach0309/forest-fires-linear-regression",
  },
];

export const services = [
  {
    title: "Website creation & upkeep",
    number: "01",
    description:
      "New websites, updates to an existing site, and ongoing upkeep. We’ll discuss your audience, design, content, and the support your website needs.",
    link: "/services/#strength",
    linkLabel: "See Certified Strength",
    status: "Available",
  },
  {
    title: "Social media creation & upkeep",
    number: "02",
    description:
      "Help creating and keeping your business’s social media presence up to date. We’ll agree on the platforms, content, and ongoing responsibilities that fit your needs.",
    status: "Available",
  },
  {
    title: "Dashboards & reporting",
    number: "03",
    description:
      "Have information you want to bring into a clearer view? Let’s discuss your data, the questions that matter, and the reporting you need.",
    status: "Available",
  },
  {
    title: "Data analysis",
    number: "04",
    description:
      "From a business question to useful findings. We can explore the data you have and whether a focused analysis is the right next step.",
    status: "Available",
  },
  {
    title: "AI assistants & automation",
    number: "05",
    description:
      "AI assistants and tools to help with repetitive work. More details when this service becomes available.",
    status: "Upcoming",
    upcoming: true,
  },
];
