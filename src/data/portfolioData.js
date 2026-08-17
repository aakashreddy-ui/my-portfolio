import profileImage from '../../images/profile.jpg';
import todoImage from '../../images/todohome.png';
import portfolioImage from '../../images/home.png';
import freelanceImage from '../../images/freelancehome.png';

export const whatsappUrl = 'https://wa.me/916301612731?text=Hi%20Aakash%20Reddy!%20Saw%20your%20portfolio.%20Need%20web%20dev.';




export const githubUrl = 'https://github.com/aakashreddy-ui';

export const linkedinUrl = 'https://www.linkedin.com/in/aakash-reddy-b048a1223/';

export const navItems = ['About', 'Skills', 'Projects', 'Blog', 'Experience', 'Contact'];

export const profile = profileImage;


export const availability = 'Open to full-time & remote full-stack roles';
export const heroHeadline = 'Full-stack developer for practical web apps.';
export const heroSubtext =
  "I build responsive and user-friendly web applications using modern frontend and backend technologies, with hands-on experience in React.js, Node.js, MySQL, PHP, and MongoDB.";
export const currentFocus = 'Building and shipping full-stack projects, writing technical case studies';

export const skills = [
  {
    title: 'Frontend',
    note: 'Interfaces that hold up on phones, laptops, and real users.',
    items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript', 'React', 'Angular 18', 'Bootstrap 5', 'Responsive UI'],
  },
  {
    title: 'Backend',
    note: 'APIs and data flows with a practical full-stack mindset.',
    items: ['Node.js', 'Express.js', 'MongoDB', 'PHP', 'MySQL', 'REST APIs', 'JSON'],
  },
  {
    title: 'Workflow',
    note: 'The everyday tools used to ship and keep improving.',
    items: ['Git', 'GitHub', 'VS Code', 'WordPress', 'Netlify', 'Vercel'],
  },
];

export const projects = [
  {
    title: 'Online Job Portal',
    type: 'Capstone project',
    description:
      'A job board with candidate and admin workflows, job listings, search, applications, and a PHP/MySQL backend.',
    image:
      'https://plus.unsplash.com/premium_photo-1771376761549-817c1e38a8fa?q=80&w=2091&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'PHP', 'MySQL', 'XAMPP'],
    link: 'https://e-job-portal.netlify.app/',
    // GitHub URL 
    codeLink: '',
  },
  {
    title: 'Advanced Todo List',
    type: 'Angular app',
    description:
      'A responsive productivity app focused on task state, clean layouts, and everyday usability across devices.',
    image: todoImage,
    stack: ['Angular', 'TypeScript', 'Node.js', 'JSON', 'Responsive UI'],
    link: '',
    codeLink: '',
  },
  {
    title: 'Portfolio 2026',
    type: 'Personal brand',
    description:
      'The earlier version of this portfolio, redesigned here into a component-based React project with calmer interactions.',
    image: portfolioImage,
    stack: ['React', 'Vite', 'CSS'],
    link: 'https://aakashreddy.in/',
    codeLink: '',
  },
  {
    title: 'Freelancing Platform',
    type: 'Marketplace concept',
    description:
      'A marketplace-style website with project discovery, bidding concepts, client flows, and service presentation.',
    image: freelanceImage,
    stack: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
    link: '',
    codeLink: '',
  },
];

export const timeline = [
  {
    title: 'Full-Stack Developer',
    period: '2026 - Present',
    body: 'Building full-stack projects end to end, strengthening React and Node fundamentals, and shipping work that mirrors production engineering roles.',
  },
  {
    title: 'Junior Web Developer Internship',
    period: '2025',
    body: 'Built websites with HTML, CSS, JavaScript, PHP, WordPress, and Wix while collaborating with design teams.',
  },
  {
    title: 'B.Tech in Computer Science & Engineering',
    period: '2021 - 2025',
    body: 'CSI-Wesley Institute of Technology & Sciences, affiliated to JNTUH.',
  },
];

export const services = ['Portfolio websites', 'Landing pages', 'Responsive fixes', 'WordPress updates'];

export const blogPosts = [
  {
    title: 'Converting an Angular app to React: what actually changes',
    category: 'Frontend',
    date: 'Aug 3, 2026',
    readTime: '6 min read',
    excerpt:
      'Notes from rebuilding a component-based Angular UI in React — state management, routing, and the habits that carried over.',
    intro:
      'Moving between frameworks exposes what you actually understood versus what you memorized. Here is what changed, and what stayed the same, when I rebuilt an Angular UI in React.',
    content: [
      "Angular's two-way binding and services map fairly closely to React's props/state and hooks once you stop looking for a 1:1 translation and start thinking in terms of data flow.",
      'The biggest shift was routing and dependency injection — React leaves more of that up to you, which forces clearer decisions about where state should live.',
      'What carried over cleanly: component thinking, separating presentation from logic, and treating each UI piece as a small, testable unit.',
    ],
    tags: ['Angular', 'React', 'Migration'],
    gallery: [
      //'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
      //'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    title: 'Building a REST API with Node.js and Express from scratch',
    category: 'Backend',
    date: 'Jul 24, 2026',
    readTime: '7 min read',
    excerpt:
      'A walkthrough of setting up routes, middleware, and MongoDB models for a small full-stack project.',
    intro:
      'Every full-stack project starts the same way for me: define the resources, sketch the routes, then build outward. Here is the structure I default to.',
    content: [
      'I start with a clear route map (GET/POST/PUT/DELETE per resource) before writing any controller logic — it keeps the API predictable as it grows.',
      'Middleware handles the repetitive concerns: request validation, error handling, and auth checks, so route handlers stay focused on business logic.',
      'Mongoose schemas double as documentation — a well-typed model makes the rest of the API easier to reason about.',
    ],
    tags: ['Node.js', 'Express', 'MongoDB'],
    gallery: [
     // 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
      // 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    title: '5 lessons from my first web development internship',
    category: 'Career',
    date: 'Jul 18, 2026',
    readTime: '5 min read',
    excerpt:
      'What building real client sites taught me that university projects never did — deadlines, feedback loops, and shipping imperfect work.',
    intro:
      'Academic projects and client work are different disciplines. My internship building sites with PHP, WordPress, and Wix taught me lessons no coursework covered.',
    content: [
      'Client feedback is rarely about code quality — it is about whether the thing in front of them solves their problem. Learning to translate vague feedback into technical changes was the real skill.',
      'Shipping something imperfect on time beats a polished feature that misses the deadline. I learned to scope ruthlessly.',
      'Version control discipline matters more on a team than solo — clear commits and branches saved real time during review.',
    ],
    tags: ['Internship', 'Career', 'Lessons Learned'],
    gallery: [
    // 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
     // 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    title: 'Git workflow habits that saved me from merge conflicts',
    category: 'Tools',
    date: 'Jul 10, 2026',
    readTime: '4 min read',
    excerpt:
      'Small, boring Git habits — short-lived branches, frequent pulls, and atomic commits — that make collaboration painless.',
    intro:
      'Most merge conflicts I have hit came from avoidable habits, not Git being difficult. A few small changes made collaboration far smoother.',
    content: [
      'Keeping branches short-lived and scoped to one feature meant less drift between my branch and main by the time I opened a PR.',
      'Pulling and rebasing frequently, instead of once at the end, turned big scary conflicts into small manageable ones.',
      'Atomic commits with clear messages made it much faster to find and revert the exact change that broke something.',
    ],
    tags: ['Git', 'GitHub', 'Collaboration'],
    gallery: [
    //  'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=900&q=80',
    //  'https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    title: 'How I structure a full-stack project before writing code',
    category: 'Process',
    date: 'Jun 28, 2026',
    readTime: '5 min read',
    excerpt:
      'Data models first, then API contracts, then UI. A simple planning order that saves rework later.',
    intro:
      'The projects that went smoothest were the ones where I resisted opening the editor immediately and planned the shape of the data first.',
    content: [
      'I sketch the data model before anything else — what entities exist, how they relate, and what a typical query looks like.',
      'Next comes the API contract: request/response shapes for each endpoint, written down before the frontend depends on them.',
      'Only after that do I start on UI, because by then the frontend has something stable to build against instead of guessing.',
    ],
    tags: ['Planning', 'Full-Stack', 'Process'],
    gallery: [
    //  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    //  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    title: 'Debugging a broken MongoDB query: a walkthrough',
    category: 'Backend',
    date: 'Jun 14, 2026',
    readTime: '4 min read',
    excerpt:
      'A real debugging session — tracing a query that returned the wrong documents back to a schema mismatch.',
    intro:
      'Some bugs are quick to spot; this one took a slow walk through the schema, the query, and the data itself to track down.',
    content: [
      'The symptom was simple: a filter that should have returned five documents returned zero. The cause was a type mismatch — a field stored as a string being queried as a number.',
      'Logging the raw query and comparing it against a manual database lookup made the mismatch obvious once I looked in the right place.',
      'The fix was small, but the habit it reinforced was bigger: check the actual stored data before assuming the query logic is wrong.',
    ],
    tags: ['MongoDB', 'Debugging', 'Backend'],
    gallery: [
      // 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=900&q=80',
      // 'https://images.unsplash.com/photo-152637995098-d400fd0bf935?auto=format&fit=crop&w=900&q=80',
    ],
  },
];
