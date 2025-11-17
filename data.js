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
    { icon: "📱", name: "JavaScript" },
    { icon: "⚛️", name: "React" },
    { icon: "🐍", name: "Python" },
    { icon: "🎨", name: "UI/UX Design" },
    { icon: "💾", name: "SQL & NoSQL" },
    { icon: "☁️", name: "Cloud Services" },
    { icon: "🤖", name: "Machine Learning" },
    { icon: "🔧", name: "DevOps Tools" },
  ],

  // Certificates Data
  certificates: [
    {
      icon: "🏅",
      title: "Full Stack Development",
      issuer: "Certified",
      year: "2024",
      description: "Advanced certification in modern web development",
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      issuer: "Certified",
      year: "2023",
      description: "Specialization in TensorFlow and Deep Learning",
    },
    {
      icon: "☁️",
      title: "Cloud Architecture",
      issuer: "Certified",
      year: "2023",
      description: "AWS Solutions Architect Associate",
    },
  ],

  // Projects Data
  projects: [
    {
      icon: "🤖",
      title: "AI Chat Assistant",
      description:
        "An intelligent conversational AI powered by NLP, designed for customer support automation and natural dialogue handling.",
      status: "✓ Completed",
      tags: ["Python", "NLP", "TensorFlow"],
      codeUrl: "#",
      demoUrl: "#",
    },
    {
      icon: "📊",
      title: "Data Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive visualizations, built with React and D3.js for business intelligence.",
      status: "✓ Completed",
      tags: ["React", "D3.js", "Node.js"],
      codeUrl: "#",
      demoUrl: "#",
    },
    {
      icon: "🎮",
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
    { icon: "🐙", title: "GitHub", url: "#" },
    { icon: "💼", title: "LinkedIn", url: "#" },
    { icon: "𝕏", title: "Twitter", url: "#" },
    { icon: "✉️", title: "Email", url: "mailto:rakee@example.com" },
  ],
};

// Export for use in app.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}