/**
 * Portfolio Data Configuration
 * @description Central data store for portfolio content
 * @author Rakee Villas
 */

const portfolioData = {
  // Personal Information
  personal: {
    name: "Rakee Villas",
    title: "CS Student & Developer",
    school: "FEU-Tech",
    email: "rakee@example.com",
  },

  // Skills Data - Using colored icons from CDN
  skills: [
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      name: "JavaScript" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      name: "Node.js" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      name: "Python" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      name: "React" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", 
      name: "PHP" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
      name: "Java" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", 
      name: "C++" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", 
      name: "Azure" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", 
      name: "Computer Vision AI" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
      name: "MySQL" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      name: "HTML5" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      name: "CSS3" 
    },
  ],

  // Certificates Data
  certificates: [
    {
      image: "certificates/ccna.png",
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "Aug 17, 2024",
      description: "Cisco Certified Network Associate - Introduction to Networks",
    },
    {
      image: "certificates/python.png",
      title: "IT Specialist - Python",
      issuer: "Certiport",
      date: "Jul 14, 2024",
      description: "IT Specialist certification in Python programming",
    },
    {
      image: "certificates/pmi.png",
      title: "PMI Project Management Ready™",
      issuer: "Project Management Institute",
      date: "Mar 25, 2025",
      description: "PMI Project Management Ready certification",
    },
  ],

  // Projects Data
  projects: [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      title: "AI Chat Assistant",
      description:
        "An intelligent conversational AI powered by NLP, designed for customer support automation and natural dialogue handling.",
      status: "✓ Completed",
      tags: ["Python", "NLP", "TensorFlow"],
      codeUrl: "#",
      demoUrl: "#",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "Data Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive visualizations, built with React and D3.js for business intelligence.",
      status: "✓ Completed",
      tags: ["React", "D3.js", "Node.js"],
      codeUrl: "#",
      demoUrl: "#",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      title: "Browser Game Development",
      description:
        "Interactive browser-based game with smooth animations, responsive controls, and engaging gameplay mechanics.",
      status: "🛠 Working on it",
      tags: ["JavaScript", "Canvas", "WebGL"],
      codeUrl: "#",
      demoUrl: "#",
    },
  ],

  // Social Links Data
  socialLinks: [
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", 
      title: "GitHub", 
      url: "#" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg", 
      title: "LinkedIn", 
      url: "#" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg", 
      title: "Twitter", 
      url: "#" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", 
      title: "Email", 
      url: "mailto:rakee@example.com" 
    },
  ],
};

// Export for use in app.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}