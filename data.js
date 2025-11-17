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

  // Skills Data
  skills: [
    { 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg", 
      name: "JavaScript" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/node-dot-js.svg", 
      name: "Node.js" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg", 
      name: "Python" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/php.svg", 
      name: "PHP" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/java.svg", 
      name: "Java" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftazure.svg", 
      name: "Azure" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/azuredevops.svg", 
      name: "Azure DevOps" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg", 
      name: "Computer Vision AI" 
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
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg",
      title: "AI Chat Assistant",
      description:
        "An intelligent conversational AI powered by NLP, designed for customer support automation and natural dialogue handling.",
      status: "✓ Completed",
      tags: ["Python", "NLP", "TensorFlow"],
      codeUrl: "#",
      demoUrl: "#",
    },
    {
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
      title: "Data Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive visualizations, built with React and D3.js for business intelligence.",
      status: "✓ Completed",
      tags: ["React", "D3.js", "Node.js"],
      codeUrl: "#",
      demoUrl: "#",
    },
    {
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
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
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg", 
      title: "GitHub", 
      url: "#" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg", 
      title: "LinkedIn", 
      url: "#" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg", 
      title: "Twitter", 
      url: "#" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg", 
      title: "Email", 
      url: "mailto:rakee@example.com" 
    },
  ],
};

// Export for use in app.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}