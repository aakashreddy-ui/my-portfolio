import shopSphereImage from '../../images/shopsphere-preview.png';
import travelTripImage from '../../images/traveltrip-preview.png';
import jayabheriImage from '../../images/jayabheri-preview.png';
import digitalHeroesImage from '../../images/digitalheroes-home.png';
import todoWebsiteImage from '../../images/todo-website.png';
import portfolioImage from '../../images/home.png';

export const email = 'aakashreddy025@gmail.com';
export const emailUrl = `mailto:${email}`;
export const whatsappUrl =
  'https://wa.me/916301612731?text=Hi%20Aakash%20Reddy!%20I%20saw%20your%20portfolio.';
export const githubUrl = 'https://github.com/aakashreddy-ui';
export const linkedinUrl = 'https://www.linkedin.com/in/aakash-reddy-b048a1223/';

export const navItems = ['Work', 'Writing', 'About', 'Skills', 'Experience', 'Contact'];

export const availability = 'Open to full-stack developer roles';
export const heroHeadline = 'I build clear, responsive web experiences.';
export const heroSubtext =
  'I am Aakash, a full-stack developer from Hyderabad. I work mainly with React and Node.js, turning ideas and requirements into web experiences people can actually use.';
export const currentFocus = 'React interfaces, Node.js APIs, and useful product work';

export const proofPoints = [
  ['06', 'live builds'],
  ['React', 'frontend foundation'],
  ['Open', 'to full-time roles'],
];

export const skills = [
  {
    title: 'Frontend development',
    note: 'I build responsive React interfaces with clear layouts, useful states, and simple user flows.',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Backend foundations',
    note: 'I use Node.js, Express, and databases to connect the interface to practical APIs and stored data.',
    items: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'PHP', 'REST APIs'],
  },
  {
    title: 'Tools for shipping',
    note: 'I use Git, cloud services, payment tools, deployment platforms, and responsive QA to take a project from local work to a usable release.',
    items: ['Git & GitHub', 'Netlify', 'Vercel', 'Stripe', 'Supabase', 'Render', 'WordPress', 'Responsive QA'],
  },
];

export const projects = [
  {
    title: 'ShopSphere',
    eyebrow: 'E-commerce experience',
    description:
      'A storefront with category browsing, saved items, and cart interactions built around a straightforward shopping flow.',
    image: shopSphereImage,
    stack: ['React', 'Product UI', 'Cart flow'],
    contribution: 'Designed and built the storefront experience from browsing to cart.',
    link: 'https://shopsphere-by-aakash.netlify.app/',
    featured: true,
  },
  {
    title: 'Jayabheri — The Pinnacle',
    eyebrow: 'Luxury real-estate website',
    description:
      'A high-intent residential landing page that presents residences, amenities, location, and enquiry paths with a premium editorial feel.',
    image: jayabheriImage,
    stack: ['Responsive UI', 'Landing page', 'Conversion design'],
    contribution: 'Built the responsive presentation and enquiry journey for a premium property.',
    link: 'https://jayabheri-the-pinnacle.netlify.app/',
  },
  {
    title: 'Digital Heroes',
    eyebrow: 'Social impact landing page',
    description:
      'A mission-focused landing experience designed to communicate a charity-driven initiative and encourage participation.',
    image: digitalHeroesImage,
    stack: ['React', 'Landing page', 'Campaign UI'],
    contribution: 'Designed and built the conversion-focused homepage for a purpose-driven project.',
    link: 'https://digital-heroes1.netlify.app/',
  },
  {
    title: 'Travel Trip',
    eyebrow: 'Booking workflow',
    description:
      'A guided trip-planning flow that moves travellers through personal details, dates, guests, assistance, and confirmation.',
    image: travelTripImage,
    stack: ['React', 'Multi-step flow', 'Responsive UI'],
    contribution: 'Built the multi-step booking flow from traveller details to confirmation.',
    link: 'https://traveltrip-app.netlify.app/',
    codeLink: 'https://github.com/aakashreddy-ui/Travel-Trip-Project',
  },
];

export const explorations = [
  {
    title: 'Todo List App',
    eyebrow: 'Productivity app',
    description: 'A responsive task-management interface built around everyday task states and a clean, usable layout.',
    image: todoWebsiteImage,
    stack: ['React', 'TypeScript', 'Responsive UI'],
    contribution: 'Built task states and a responsive everyday workflow.',
    link: 'https://aakash-todolist-app.netlify.app/',
    status: 'Earlier build',
  },
  {
    title: 'Previous Portfolio Iteration',
    eyebrow: 'Archived personal website',
    description: 'An earlier React portfolio iteration showing the progression from a personal site to a component-based product.',
    image: portfolioImage,
    stack: ['React', 'Vite', 'CSS'],
    contribution: 'Designed and built an earlier component-based portfolio iteration.',
    link: 'https://aakashreddy.in/',
    codeLink: 'https://github.com/aakashreddy-ui/my-portfolio',
  },
];

export const blogPosts = [
  {
    category: 'Frontend',
    title: 'Designing React components that stay easy to use',
    excerpt: 'A practical look at component responsibilities, data flow, and the choices that keep React interfaces understandable.',
    content: ['A React component is easier to maintain when it owns one clear responsibility and receives only the data it needs.', 'I start by mapping the user flow, then keep state close to the interaction that owns it. Shared state is introduced only when multiple parts of the experience genuinely depend on it.', 'This keeps the interface easier to test, adjust, and extend as the product grows.'],
    tags: ['React', 'Component design', 'UI architecture'],
  },
  {
    category: 'Backend',
    title: 'Building a REST API with Node.js and Express from scratch',
    excerpt: 'A concise look at route maps, middleware, validation, and the choices that keep a small API understandable.',
    content: ['A small API is easiest to maintain when its route map is predictable: resources get clear names, controllers stay focused, and middleware handles cross-cutting concerns.', 'I validate request data at the boundary before it reaches business logic. This keeps error responses consistent and makes the happy path much easier to read.', 'Starting with a simple folder structure and a few tested endpoints leaves room to grow without hiding the application behind unnecessary abstractions.'],
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    category: 'Backend',
    title: 'Debugging a broken MongoDB query: a walkthrough',
    excerpt: 'A debugging story about checking stored data, schema assumptions, and query types before guessing.',
    content: ['When a query returns no results, I first inspect an actual stored document. Assumptions about field names, nesting, and value types are often the real problem.', 'Next I reduce the query to one condition and test it directly. Adding filters back one at a time shows exactly which assumption breaks the match.', 'This process is slower than guessing for the first minute, but much faster than changing several layers of code without evidence.'],
    tags: ['MongoDB', 'Debugging', 'Backend'],
  },
];

export const timeline = [
  {
    title: 'Independent full-stack projects',
    period: '2026 — present',
    body: 'I am currently building complete web projects, from the first screen to the data and API work behind it. My main tools are React, Node.js, REST APIs, and responsive CSS.',
  },
  {
    title: 'Junior Web Developer Intern',
    period: '2025',
    body: 'During my 2025 internship, I worked across six web technologies: HTML, CSS, JavaScript, PHP, WordPress, and Wix. I also worked with designers and adjusted pages based on client requirements.',
  },
  {
    title: 'B.Tech, Computer Science & Engineering',
    period: '2021 — 2025',
    body: 'CSI-Wesley Institute of Technology & Sciences, affiliated to JNTUH.',
  },
];

export const services = ['React interfaces', 'Full-stack project builds', 'Responsive frontend work', 'WordPress updates'];
