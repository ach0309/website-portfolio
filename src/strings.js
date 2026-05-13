// ─── SITE-WIDE ───────────────────────────────────────────────────────────────
export const SITE = {
  name: 'Aeon Chavez',
  initials: 'AC',
  location: 'CT/NY',
  email: 'aeonchavez03@gmail.com',
  linkedin: 'linkedin.com/in/aeonchavez',
  linkedinUrl: 'https://linkedin.com/in/aeonchavez',
  github: 'github.com/ach0309',
  githubUrl: 'https://github.com/ach0309',
  website: 'aeonchavez.info',
  websiteUrl: 'http://aeonchavez.info',
  copyright: '© 2026 · CT/NY',
};

// ─── NAV ─────────────────────────────────────────────────────────────────────
export const NAV = {
  sections: ['about', 'projects', 'blog', 'resume', 'contact'],
};

// ─── HERO ────────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: 'Software Developer · Data Scientist',
  photo: '/images/ac.jpg',
  firstName: 'Aeon',
  lastName: 'Chavez',
  subtitle:
    'Building data-driven products at the intersection of AI, software engineering, and human impact. IBM alum · Data Science Fellow · Hackathon builder.',
  cta1: 'View My Work',
  cta1Href: '#projects',
  cta2: 'Contact Me',
  cta2Href: '#contact',
  tags: [
    'Python',
    'Machine Learning',
    'AI Integration',
    'ReactJS',
    'SQL',
    'Data Visualization',
    'Bilingual',
  ],
};

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const ABOUT = {
  sectionLabel: 'About Me',
  heading: 'Background & Interests',
  subheading: 'A little bit about who I am, what drives me, and what I bring to the table.',
  bio: [
    `I'm a software developer and data scientist based in **Milford, CT**, with 2 years at IBM shipping enterprise features across storage and cloud UI teams. After a period of caregiving, I redirected my focus toward **data science and AI** — areas I find genuinely exciting and impactful.`,
    `Today I'm a **Data Science Fellow at The Knowledge House**, building ML solutions, working through real datasets, and applying the engineering discipline I honed at IBM to data problems. I care about building things that are useful, well-documented, and stakeholder-ready.`,
    `Outside of code, I'm drawn to the overlap of **AI and small business impact**. My hackathon project Lexi/Crust was built for a real bakery and validated live by 50 attendees — that kind of tangible impact is what motivates me.`,
  ],
  highlights: [
    { icon: '🏗️', title: '2 Years at IBM', desc: 'Shipped enterprise features on Storage Fusion & Spectrum Protect — UI, APIs, CI/CD.' },
    { icon: '📊', title: 'Data Science Fellow', desc: '6-month accelerated fellowship at The Knowledge House — ML, feature engineering, stakeholder insights.' },
    { icon: '🤖', title: 'AI Hackathon Builder', desc: 'Built a live chatbot + CRM agent for a real bakery — validated by ~50 attendees, exhausted the API budget on launch.' },
    { icon: '🌐', title: 'Bilingual', desc: 'Fluent in English and Tagalog — great for diverse teams and stakeholder communication.' },
    { icon: '🎓', title: 'UConn CS & Engineering', desc: 'B.S. Computer Science & Engineering, Minor in Mathematics, 2021.' },
  ],
  skills: [
    'Python', 'SQL', 'Machine Learning', 'ReactJS', 'AI Integration',
    'Data Visualization', 'REST APIs', 'Agile / CI/CD', 'Figma', 'IBM Carbon Design',
  ],
};

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const PROJECTS_CONTENT = {
  sectionLabel: 'Work',
  heading: 'My Latest Projects',
  subheading:
    'A mix of data science, ML, and AI — each built with real data and stakeholder-ready outputs. Click any card for details.',
  githubLabel: '↗ GitHub',
  detailsLabel: '+ View Details',
  closeLabel: '✕ Close',
  viewOnGithub: '↗ View on GitHub',
  sections: {
    highlights: 'Key Highlights',
    structure: 'Repository Structure',
    visualization: 'Visualization',
  },
  projects: [
    {
      id: 'fraud',
      type: 'ML · Classification · Apr 2026',
      title: 'Financial Fraud Detection',
      desc: 'Ensemble classifier on 6M+ bank transactions — 96% precision, 0.99 AUC, tuned recall to 77%.',
      tags: ['Python', 'Scikit-learn', 'EDA', 'Feature Engineering'],
      github: 'https://github.com/ach0309/Fraud_Detection_Project',
      metrics: [
        { val: '96%', label: 'Precision' },
        { val: '0.99', label: 'AUC Score' },
        { val: '77%', label: 'Recall' },
        { val: '6M+', label: 'Transactions' },
      ],
      bullets: [
        'Achieved 96% precision and 0.99 AUC on the test set using ensemble methods',
        'Tuned decision threshold to boost recall to 77%, balancing precision/recall trade-off',
        'Engineered 3 features from EDA that ranked highest in feature importance',
        'Documented data quality issues and their impact on model reliability',
      ],
      tree: [
        { indent: 0, type: 'dir',  name: 'Fraud_Detection_Project/' },
        { indent: 1, type: 'file', name: 'fraud_detection.ipynb — main analysis notebook' },
        { indent: 1, type: 'dir',  name: 'data/' },
        { indent: 2, type: 'file', name: 'transactions.csv — 6M+ records' },
        { indent: 1, type: 'dir',  name: 'visuals/ — ROC, confusion matrix, feature importance' },
        { indent: 1, type: 'file', name: 'README.md' },
      ],
      vis: 'roc',
    },
    {
      id: 'forest',
      type: 'Regression · EDA · Mar 2026',
      title: 'Forest Fire Area Prediction',
      desc: '3 linear regression models on Montesinho Park data — identified predictor limitations and recommended improved ML approaches.',
      tags: ['Python', 'Linear Regression', 'EDA', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/ach0309/linear_regression_project',
      metrics: [
        { val: '3',        label: 'Models Built' },
        { val: 'Portugal', label: 'Dataset' },
        { val: 'EDA-first',label: 'Approach' },
      ],
      bullets: [
        'Built and compared 3 regression variants: baseline, log-transformed target, and feature-selected model',
        'Identified weak correlations between weather variables and burn area through EDA',
        'Flagged multicollinearity risks and skewed burn area distribution',
        'Recommended alternative approaches (Random Forest, XGBoost) with data-backed reasoning',
      ],
      tree: [
        { indent: 0, type: 'dir',  name: 'linear_regression_project/' },
        { indent: 1, type: 'file', name: 'forest_fire_analysis.ipynb' },
        { indent: 1, type: 'dir',  name: 'data/' },
        { indent: 2, type: 'file', name: 'forestfires.csv — Montesinho dataset' },
        { indent: 1, type: 'dir',  name: 'plots/ — scatter plots, residuals, heatmaps' },
        { indent: 1, type: 'file', name: 'README.md' },
      ],
      vis: 'scatter',
    },
    {
      id: 'dough',
      type: 'AI · Chatbot · CRM · May 2026',
      title: 'Everything Dough — AI Chatbot + CRM',
      desc: 'Lexi (booking chatbot) + Crust (analytics agent) built live for a real bakery — validated by ~50 attendees at the Synchrony/Knowledge House hackathon.',
      tags: ['AI Integration', 'Prompt Engineering', 'Google Calendar API', 'CRM'],
      github: 'https://github.com/ethan27625/Everything-Dough-Mockup-Hackathon',
      metrics: [
        { val: '~50', label: 'Live Users' },
        { val: '2',   label: 'AI Agents' },
        { val: 'Live',label: 'Validated' },
      ],
      bullets: [
        'Led team strategy, prompt engineering, and live presentation',
        'Lexi captures structured lead data in real-time via Google Calendar integration',
        'Crust surfaces revenue insights, churn flags, and customer segmentation',
        'Validated live by nearly 50 attendees — exhausted API token budget on the spot',
      ],
      tree: [
        { indent: 0, type: 'dir',  name: 'Everything-Dough-Mockup-Hackathon/' },
        { indent: 1, type: 'dir',  name: 'lexi/ — booking chatbot agent' },
        { indent: 1, type: 'dir',  name: 'crust/ — analytics CRM agent' },
        { indent: 1, type: 'dir',  name: 'integrations/ — Google Calendar API' },
        { indent: 1, type: 'file', name: 'README.md' },
      ],
      vis: 'agent',
    },
  ],
};

// ─── BLOG ────────────────────────────────────────────────────────────────────
export const BLOG = {
  sectionLabel: 'Blog',
  heading: 'Blog',
  subheading: 'Thoughts on data science, AI, and the journey — written for the community.',
  emptyIcon: '✍️',
  emptyTitle: 'Blog posts coming soon',
  emptyDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  viewOnLinkedIn: '↗ View on LinkedIn',
  // Add your LinkedIn posts here:
  posts: [
    // {
    //   date: 'May 2026',
    //   title: 'Your post title here',
    //   excerpt: 'Paste your LinkedIn post content here...',
    //   link: 'https://linkedin.com/in/aeonchavez/...',
    // },
  ],
};

// ─── RESUME ──────────────────────────────────────────────────────────────────
export const RESUME = {
  sectionLabel: 'Resume',
  heading: 'Experience & Skills',
  subheading: 'Software developer turned data scientist — here\'s the full picture.',
  summary:
    'Software developer with 2 years at IBM shipping enterprise product features; following a period of caregiving and career transition, now specializing in data science and AI through applied project work and a competitive fellowship.',
  contactItems: [
    { icon: '📍', text: SITE.location },
    { icon: '✉️', text: SITE.email,    href: `mailto:${SITE.email}` },
    { icon: '💼', text: SITE.linkedin, href: SITE.linkedinUrl },
    { icon: '🐙', text: SITE.github,   href: SITE.githubUrl },
    { icon: '🌐', text: SITE.website,  href: SITE.websiteUrl },
  ],
  skillBars: [
    { name: 'Python',            level: 92 },
    { name: 'Machine Learning',  level: 82 },
    { name: 'SQL',               level: 80 },
    { name: 'Data Visualization',level: 80 },
    { name: 'ReactJS',           level: 75 },
    { name: 'AI Integration',    level: 76 },
    { name: 'Java / JavaScript', level: 72 },
  ],
  education: {
    school: 'University of Connecticut',
    degree: 'B.S. Computer Science & Engineering',
    minor: 'Minor in Mathematics · 2021',
  },
  languages: '🇺🇸 English · 🇵🇭 Tagalog',
  experience: [
    {
      title: 'Data Science Fellow',
      org: 'The Knowledge House',
      date: 'Jan 2026 – Present',
      bullets: [
        'Building analytical and ML solutions in Python and SQL — classification models, feature engineering, hyperparameter tuning, and threshold optimization.',
        'Translating complex findings into actionable insights through correlation heatmaps, ROC-AUC curves, feature importance charts, and distribution plots.',
      ],
    },
    {
      title: 'Optical Technician',
      org: 'Doctors Eye Center',
      date: 'May 2025 – Mar 2026',
      bullets: [
        'Created structured documentation to standardize patient care, pretesting, and optical sales workflows.',
        'Identified operational gaps to improve turnaround time; accurately processed lab orders and insurance claims.',
      ],
    },
    {
      title: 'Software Developer — Storage Fusion (Guardian)',
      org: 'IBM',
      date: 'Jun 2021 – May 2023',
      bullets: [
        'Wrote fetch/transform logic integrating Kafka and Prometheus via REST APIs in Python, urllib3, and JSON.',
        'Managed Docker images through JFrog Artifactory on RedHat OpenShift Container Platform.',
      ],
    },
    {
      title: 'Software Developer — Storage Fusion (UI)',
      org: 'IBM',
      date: 'Jun 2021 – May 2023',
      bullets: [
        'Delivered ReactJS features partnering with PM, UI/UX designers, and backend teams.',
        'Diagnosed and resolved code issues; communicated updates across technical and business stakeholders.',
      ],
    },
    {
      title: 'Software Developer — Spectrum Protect (Cloud UI)',
      org: 'IBM',
      date: 'Jun 2021 – May 2023',
      bullets: [
        'Developed UI features using the Dojo JS framework and contributed to design decisions.',
        'Maintained CI/CD pipelines, presented technical reports, and performed security scans for compliance.',
      ],
    },
  ],
  techPills: [
    'Python','SQL','Java','JavaScript','ReactJS','HTML/CSS','Git',
    'REST APIs','XML','Figma','IBM Carbon Design','Docker','OpenShift','Kafka','Prometheus',
  ],
  practicePills: [
    'Agile','CI/CD','SDLC','UI/UX','Statistics','Machine Learning',
    'Feature Engineering','Data Visualization','Forecasting','Prompt Engineering',
  ],
};

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export const CONTACT = {
  sectionLabel: 'Get In Touch',
  heading: 'Contact Me',
  subheading:
    "I'm open to data science roles, software engineering opportunities, and interesting collaborations — especially at the intersection of AI and real-world impact.",
  body1:
    'Whether you have a role in mind, a project idea, or just want to connect — feel free to reach out. I respond promptly and love meeting people who are excited about data and AI.',
  body2:
    'You can also find my work on GitHub and follow my journey on LinkedIn, where I share posts on data science, lessons learned, and what I\'m building.',
  cta1: '✉ Send an Email',
  cta2: 'LinkedIn ↗',
  items: [
    { icon: '✉️', label: 'Email',    value: SITE.email,    href: `mailto:${SITE.email}` },
    { icon: '💼', label: 'LinkedIn', value: SITE.linkedin, href: SITE.linkedinUrl },
    { icon: '🐙', label: 'GitHub',   value: SITE.github,   href: SITE.githubUrl },
    { icon: '📍', label: 'Location', value: SITE.location, href: null },
  ],
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
export const FOOTER = {
  name: SITE.name,
  copyright: SITE.copyright,
  githubText: `${SITE.github} ↗`,
  githubUrl: SITE.githubUrl,
};
