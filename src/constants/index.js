export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [];

export const myProjects = [
  {
    title: 'DVote Horizon - Decentralized Voting System',
    desc: 'A secure and transparent decentralized voting system ensuring vote integrity using blockchain technology.',
    subdesc: 'Built with HTML, CSS, JavaScript, Web3.js, and Ethereum Smart Contracts to promote secure, anonymous, and verifiable online voting.',
    href: 'https://github.com/xavious2604/dvote-horizon',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'HTML', path: '/assets/html.svg' },
      { id: 2, name: 'CSS', path: '/assets/css.svg' },
      { id: 3, name: 'JavaScript', path: '/assets/javascript.svg' },
      { id: 4, name: 'Web3.js', path: '/assets/web3js.png' },
      { id: 5, name: 'Ethereum', path: '/assets/ethereum.png' },
    ],
  },
  {
    title: '3D Medical Billing with AR',
    desc: 'A billing system with invoice generation, customer email notifications, and multi-recipient selection for invoice distribution, enhanced with AR visualization.',
    subdesc: 'Developed using Python, SQLite, HTML, CSS, and JavaScript to automate medical billing processes and improve efficiency.',
    href: 'https://github.com/xavious2604/3d-medical-billing',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.svg' },
      { id: 2, name: 'SQLite', path: '/assets/sqlite.png' },
      { id: 3, name: 'HTML', path: '/assets/html.svg' },
      { id: 4, name: 'CSS', path: '/assets/css.svg' },
      { id: 5, name: 'JavaScript', path: '/assets/javascript.svg' },
    ],
  },
  {
    title: 'Wine Quality Predictor',
    desc: 'A system to predict wine quality based on various parameters using machine learning techniques.',
    subdesc: 'Built with Python and machine learning libraries to classify wine quality through data analysis and predictive modeling.',
    href: 'https://github.com/xavious2604/wine-quality-predictor',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background: 'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.svg' },
      { id: 2, name: 'Machine Learning', path: '/assets/ml.png' },
    ],
  },
  {
    title: 'Banking Transaction System',
    desc: 'A sample banking transaction system simulating common banking functions with object-oriented programming.',
    subdesc: 'Developed using Java and JavaFX, implementing inheritance for different account types and database integration.',
    href: 'https://github.com/xavious2604/banking-system',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'Java', path: '/assets/java.svg' },
      { id: 2, name: 'JavaFX', path: '/assets/javafx.png' },
    ],
  },
  {
    title: 'Multiple E-commerce Sites',
    desc: 'Developed various e-commerce platforms to enhance online shopping experiences.',
    subdesc: 'Built with WordPress and WooCommerce, focusing on user-friendly design and seamless functionality.',
    href: 'https://github.com/xavious2604/ecommerce-sites',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'WordPress', path: '/assets/wordpress.svg' },
      { id: 2, name: 'WooCommerce', path: '/assets/woocommerce.png' },
    ],
  },
];

export const skills = {
  languages: ['Python', 'Java', 'JavaScript', 'C', 'C++'],
  webDev: ['HTML', 'CSS', 'React', 'Tailwind', 'WordPress', 'WooCommerce'],
  db: ['MySQL', 'SQLite', 'Zoho Inventory'],
  seoMarketing: ['Google Analytics', 'Keyword Research'],
  cloud: ['AWS (EC2, S3, Lambda, IAM)', 'Bluehost', 'GoDaddy'],
  tools: ['Git', 'VS Code', 'Google Colab'],
};

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};