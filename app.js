/**
 * Portfolio Application
 * @description Main application logic and event handlers
 * @author Rakee Villas
 */

class PortfolioApp {
  constructor() {
    this.sections = document.querySelectorAll("section");
    this.navLinks = document.querySelectorAll(".nav-link");
    this.dots = [];
    this.backToTopBtn = document.getElementById("backToTop");
    this.init();
  }

  /**
   * Initialize the application
   */
  init() {
    this.renderDynamicContent();
    this.setupNavigationObserver();
    this.setupEventListeners();
    this.setupBackToTop();
    this.setupFormHandler();
  }

  /**
   * Render dynamic content from data.js
   */
  renderDynamicContent() {
    this.renderSkills();
    this.renderCertificates();
    this.renderProjects();
    this.renderSocialLinks();
    this.renderSectionDots();
  }

  /**
   * Render skills grid
   */
  renderSkills() {
    const skillsGrid = document.getElementById("skillsGrid");
    if (!skillsGrid) return;

    skillsGrid.innerHTML = portfolioData.skills
      .map(
        (skill, index) => `
        <div class="skill-badge" style="animation-delay: ${index * 0.05}s">
          <div class="skill-icon">${skill.icon}</div>
          <div class="skill-name">${skill.name}</div>
        </div>
      `
      )
      .join("");
  }

  /**
   * Render certificates
   */
  renderCertificates() {
    const certificatesContainer = document.getElementById("certificatesContainer");
    if (!certificatesContainer) return;

    certificatesContainer.innerHTML = portfolioData.certificates
      .map(
        (cert, index) => `
        <div class="col-md-4 mb-4">
          <div class="certificate-card" style="animation-delay: ${index * 0.1}s">
            ${cert.image 
              ? `<img src="${cert.image}" alt="${cert.title}" class="cert-image">`
              : `<div class="cert-icon">${cert.icon || "🏅"}</div>`
            }
            <h5>${cert.title}</h5>
            <p>${cert.issuer} | ${cert.date || cert.year}</p>
            <p style="font-size: 0.8rem; margin-top: 0.5rem;">${cert.description}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  /**
   * Render projects grid
   */
  renderProjects() {
    const projectsGrid = document.getElementById("projectsGrid");
    if (!projectsGrid) return;

    projectsGrid.innerHTML = portfolioData.projects
      .map(
        (project, index) => `
        <div class="project-card" style="animation-delay: ${index * 0.1}s">
          <div class="project-header">${project.icon}</div>
          <div class="project-body">
            <h5>${project.title}</h5>
            <p>${project.description}</p>
            <span class="project-status">${project.status}</span>
            <div class="project-buttons">
              <button class="project-btn" onclick="window.open('${project.codeUrl}', '_blank')">
                View Code
              </button>
              <button class="project-btn" onclick="window.open('${project.demoUrl}', '_blank')">
                Live Demo
              </button>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  /**
   * Render social links
   */
  renderSocialLinks() {
    const socialLinksContainer = document.getElementById("socialLinks");
    if (!socialLinksContainer) return;

    socialLinksContainer.innerHTML = portfolioData.socialLinks
      .map(
        (social) => `
        <a href="${social.url}" class="social-icon" title="${social.title}" ${
          social.url.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""
        }>
          ${social.icon}
        </a>
      `
      )
      .join("");
  }

  /**
   * Render section navigation dots
   */
  renderSectionDots() {
    const sectionDotsContainer = document.querySelector(".section-dots");
    if (!sectionDotsContainer) return;

    const sectionsData = sectionDotsContainer.getAttribute("data-sections");
    if (!sectionsData) return;

    const sectionNames = sectionsData.split(",");
    sectionDotsContainer.innerHTML = sectionNames
      .map(
        (section, index) => `
        <div class="dot ${index === 0 ? "active" : ""}" data-section="${section.trim()}"></div>
      `
      )
      .join("");

    this.dots = document.querySelectorAll(".dot");
  }

  /**
   * Setup Intersection Observer for navigation
   */
  setupNavigationObserver() {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          this.updateActiveNavigation(id);
        }
      });
    }, observerOptions);

    this.sections.forEach((section) => observer.observe(section));
  }

  /**
   * Update active navigation state
   * @param {string} sectionId - Active section ID
   */
  updateActiveNavigation(sectionId) {
    // Update nav links
    this.navLinks.forEach((link) => link.classList.remove("active"));
    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
    if (activeLink) activeLink.classList.add("active");

    // Update dots
    this.dots.forEach((dot) => dot.classList.remove("active"));
    const activeDot = document.querySelector(`.dot[data-section="${sectionId}"]`);
    if (activeDot) activeDot.classList.add("active");
  }

  /**
   * Setup all event listeners
   */
  setupEventListeners() {
    // Nav links smooth scroll
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");
        this.smoothScrollTo(target);
        this.closeNavbarOnMobile();
      });
    });

    // Dots navigation
    this.dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const section = dot.getAttribute("data-section");
        this.smoothScrollTo(`#${section}`);
      });
    });

    // CTA buttons with data-target attribute
    document.querySelectorAll("[data-target]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const target = btn.getAttribute("data-target");
        this.smoothScrollTo(target);
      });
    });

    // Form input focus effects
    document.querySelectorAll(".form-control").forEach((input) => {
      input.addEventListener("focus", function () {
        this.style.boxShadow = "0 0 20px rgba(192, 192, 192, 0.3)";
      });
      input.addEventListener("blur", function () {
        this.style.boxShadow = "none";
      });
    });
  }

  /**
   * Smooth scroll to target element
   * @param {string} target - Target selector
   */
  smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  /**
   * Close navbar on mobile after link click
   */
  closeNavbarOnMobile() {
    const navbarToggle = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarToggle?.click();
    }
  }

  /**
   * Setup back to top button functionality
   */
  setupBackToTop() {
    if (!this.backToTopBtn) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        this.backToTopBtn.classList.add("show");
      } else {
        this.backToTopBtn.classList.remove("show");
      }
    });

    this.backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /**
   * Setup contact form handler
   */
  setupFormHandler() {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmission(contactForm);
    });
  }

  /**
   * Handle form submission
   * @param {HTMLFormElement} form - Contact form element
   */
  handleFormSubmission(form) {
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Validate form data
    if (this.validateFormData(data)) {
      this.submitForm(data, form);
    }
  }

  /**
   * Validate form data
   * @param {Object} data - Form data object
   * @returns {boolean} - Validation result
   */
  validateFormData(data) {
    if (!data.name || data.name.trim().length < 2) {
      this.showNotification("Please enter a valid name", "error");
      return false;
    }

    if (!this.isValidEmail(data.email)) {
      this.showNotification("Please enter a valid email address", "error");
      return false;
    }

    if (!data.message || data.message.trim().length < 10) {
      this.showNotification("Please enter a message (at least 10 characters)", "error");
      return false;
    }

    return true;
  }

  /**
   * Validate email format
   * @param {string} email - Email address
   * @returns {boolean} - Validation result
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Submit form (mock submission)
   * @param {Object} data - Form data
   * @param {HTMLFormElement} form - Form element
   */
  submitForm(data, form) {
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      this.showNotification(
        `Thanks ${data.name}! Your message has been sent. I'll get back to you at ${data.email} soon!`,
        "success"
      );
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  }

  /**
   * Show notification to user
   * @param {string} message - Notification message
   * @param {string} type - Notification type (success/error)
   */
  showNotification(message, type = "success") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      padding: 1rem 1.5rem;
      background: ${type === "success" ? "rgba(60, 136, 126, 0.9)" : "rgba(220, 53, 69, 0.9)"};
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      animation: slideInRight 0.3s ease;
      max-width: 350px;
      font-size: 0.9rem;
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }
}

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new PortfolioApp();
});

// Add CSS animations for notifications
const style = document.createElement("style");
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);