// Sample event data (simulating API response)
const eventsData = [
  {
    id: 1,
    name: "Tech Innovation Summit 2025",
    date: "2025-06-15",
    time: "09:00 AM",
    location: "Convention Center, Downtown",
    description:
      "Join industry leaders and innovators for a day of cutting-edge technology discussions, networking, and hands-on workshops.",
    icon: "💻",
  },
  {
    id: 2,
    name: "Summer Music Festival",
    date: "2025-06-22",
    time: "06:00 PM",
    location: "Central Park Amphitheater",
    description:
      "Experience an unforgettable evening with local and international artists performing across multiple genres.",
    icon: "🎵",
  },
  {
    id: 3,
    name: "Food & Drink Tasting",
    date: "2025-06-28",
    time: "07:00 PM",
    location: "Riverside Restaurant District",
    description: "Discover exquisite flavors from renowned chefs and sommeliers in an elegant waterfront setting.",
    icon: "🍷",
  },
  {
    id: 4,
    name: "Startup Pitch Competition",
    date: "2025-07-05",
    time: "02:00 PM",
    location: "Innovation Hub, Tech Quarter",
    description:
      "Watch emerging entrepreneurs present their groundbreaking ideas to a panel of investors and industry experts.",
    icon: "🚀",
  },
  {
    id: 5,
    name: "Art Gallery Opening",
    date: "2025-07-12",
    time: "05:00 PM",
    location: "Modern Art Museum",
    description:
      "Celebrate the opening of our newest contemporary art exhibition featuring works from emerging local artists.",
    icon: "🎨",
  },
]

// DOM elements
const eventsGrid = document.getElementById("eventsGrid")
const searchInput = document.getElementById("searchInput")
const noResults = document.getElementById("noResults")
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const contactForm = document.getElementById("contactForm")

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadEvents(eventsData)
  setupEventListeners()
  updateActiveNavLink()
})

// Load and display events
function loadEvents(events) {
  eventsGrid.innerHTML = ""

  if (events.length === 0) {
    noResults.style.display = "block"
    return
  }

  noResults.style.display = "none"

  events.forEach((event) => {
    const eventCard = createEventCard(event)
    eventsGrid.appendChild(eventCard)
  })
}

// Create individual event card
function createEventCard(event) {
  const card = document.createElement("div")
  card.className = "event-card"

  const formattedDate = formatDate(event.date)

  card.innerHTML = `
        <div class="event-image">
            ${event.icon}
        </div>
        <div class="event-content">
            <h3 class="event-name">${event.name}</h3>
            <div class="event-datetime">
                📅 ${formattedDate} at ${event.time}
            </div>
            <div class="event-location">
                📍 ${event.location}
            </div>
            <p class="event-description">${event.description}</p>
            <button class="register-btn" onclick="handleRegister('${event.name}')">
                Register Now
            </button>
        </div>
    `

  return card
}

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString)
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return date.toLocaleDateString("en-US", options)
}

// Handle registration button click
function handleRegister(eventName) {
  alert(`Thank you for your interest in "${eventName}"! Registration functionality will be implemented soon.`)
}

// Setup event listeners
function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener("input", handleSearch)

  // Mobile navigation toggle
  hamburger.addEventListener("click", toggleMobileMenu)

  // Close mobile menu when clicking on nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      closeMobileMenu()
      updateActiveNavLink()
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      closeMobileMenu()
    }
  })

  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactForm)
  }

  // Update active nav link on scroll
  window.addEventListener("scroll", updateActiveNavLink)
}

// Handle search functionality
function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase().trim()

  if (searchTerm === "") {
    loadEvents(eventsData)
    return
  }

  const filteredEvents = eventsData.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm) ||
      event.location.toLowerCase().includes(searchTerm) ||
      event.description.toLowerCase().includes(searchTerm),
  )

  loadEvents(filteredEvents)
}

// Toggle mobile menu
function toggleMobileMenu() {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
}

// Close mobile menu
function closeMobileMenu() {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}

// Handle contact form submission
function handleContactForm(e) {
  e.preventDefault()

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  }

  // Simulate form submission
  alert(`Thank you, ${formData.name}! Your message has been received. We'll get back to you soon.`)

  // Reset form
  contactForm.reset()
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = ["home", "events", "contact"]
  const navLinks = document.querySelectorAll(".nav-link")

  let currentSection = "home"

  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = sectionId
      }
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active")
    }
  })
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 70 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Add some animation on scroll (navbar background)
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.backdropFilter = "blur(10px)"
  } else {
    navbar.style.background = "#fff"
    navbar.style.backdropFilter = "none"
  }
})
