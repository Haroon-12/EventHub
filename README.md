# EventHub - Featured Events Page

A responsive, interactive webpage showcasing featured local events built for the Dynamics 360 Web Development Internship case study.

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/eventhub-featured-events)

## 📋 Project Overview

This project creates a single-page, responsive website that displays a list of upcoming events in a clean, mobile-friendly layout. The page includes navigation, a hero section, featured events display, contact section, and search functionality.

## ✨ Features

### Core Requirements ✅
- **Navigation Bar**: Top navigation with EventHub logo and links (Home, Events, Contact)
- **Hero Section**: Eye-catching section with "Discover Events Near You" heading
- **Featured Events**: Display of 5 sample events with complete information
- **Event Cards**: Each card includes:
  - Event name
  - Date and time
  - Location
  - Short description
  - Register button (with placeholder functionality)
- **Responsive Design**: Clean, mobile and tablet-friendly layout
- **Contact Section**: Complete contact information and contact form

### Bonus Features ✅
- **Search Functionality**: Real-time search that filters events by name, location, or description
- **Dynamic Event Loading**: Events loaded using dummy JSON data with JavaScript
- **Smooth Navigation**: Scroll-to-section navigation with active link highlighting
- **Mobile Menu**: Hamburger menu for mobile devices
- **Contact Form**: Functional contact form with validation
- **Social Media Integration**: Real Font Awesome icons for social platforms

### Enhanced Features
- **Hover Effects**: Smooth animations and transitions
- **Modern Gradient Design**: Professional color scheme
- **Form Validation**: Client-side form validation with user feedback

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with advanced features
  - CSS Grid for responsive layout
  - Flexbox for component alignment
  - CSS transitions and animations
  - Custom properties and gradients
- **Vanilla JavaScript**: Interactive functionality
  - DOM manipulation
  - Event handling
  - Search filtering
  - Form validation
  - Mobile menu toggle
- **Font Awesome**: Professional social media icons
- **Google Fonts**: Inter font family for modern typography

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Mobile Features
- Hamburger navigation menu
- Touch-friendly buttons and interactions
- Optimized layouts for small screens
- Responsive contact form

## 🎨 Design Features

- **Modern Gradient Hero**: Eye-catching purple-to-indigo gradient
- **Card-based Layout**: Clean event cards with hover effects
- **Professional Typography**: Inter font for excellent readability
- **Consistent Color Scheme**: Purple (#6366f1) primary with complementary colors
- **Accessible Design**: Semantic HTML and proper contrast ratios
- **Smooth Animations**: Hover effects and transitions throughout

## 🔧 How to Run

### Method 1: Using VS Code Live Server

1. **Install Live Server Extension**:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

2. **Clone and Open Project**:
   \`\`\`bash
   git clone https://github.com/Haroon-12/EventHub.git
   cd Event Hub
   \`\`\`

3. **Open in VS Code**:
   - Open VS Code
   - File → Open Folder → Select project folder

4. **Run with Live Server**:
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Browser will automatically open with live reload

### Method 2: Direct Browser Opening

1. **Download/Clone the project**
2. **Navigate to project folder**
3. **Double-click `index.html`** to open in your default browser
4. **Refresh manually** when making changes


## 📁 Project Structure

\`\`\`
eventhub-featured-events/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
\`\`\`

## 🎯 Key Implementation Details

### Event Data Structure
Events are stored as JavaScript objects with properties:
\`\`\`javascript
{
  id: 1,
  name: "Event Name",
  date: "2025-06-15",
  time: "09:00 AM",
  location: "Event Location",
  description: "Event description...",
  icon: "🎵"
}
\`\`\`

### Search Functionality
- **Real-time search**: Updates as user types
- **Multi-field search**: Searches name, location, and description
- **Case-insensitive**: Works regardless of capitalization
- **No results handling**: Shows message when no matches found

### Navigation Features
- **Smooth scrolling**: CSS and JavaScript smooth scroll
- **Active link highlighting**: Updates based on scroll position
- **Mobile hamburger menu**: Responsive navigation for mobile
- **Section targeting**: Links scroll to specific page sections

### Contact Information
- **Email**: support@eventhub.com
- **Phone**: +92 345-4465782
- **Address**: Gulberg Green, Islamabad, Pakistan
- **Business Hours**: Mon-Fri 9AM-6PM, Sat-Sun 10AM-4PM

## 🚀 Deployment Options

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select source branch (main/master)
4. Access via: `https://your-username.github.io/repository-name`

### Netlify
1. Drag and drop project folder to [Netlify](https://netlify.com)
2. Or connect GitHub repository for automatic deployment
3. Get instant live URL

### Adding New Events
To add events, modify the `eventsData` array in `script.js`:
\`\`\`javascript
const newEvent = {
  id: 6,
  name: "Your Event Name",
  date: "2025-07-20",
  time: "03:00 PM",
  location: "Event Location",
  description: "Event description here...",
  icon: "🎉"
};
\`\`\`

### Modifying Contact Information
Update contact details in both the contact section and footer in `index.html`.

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)


## ♿ Accessibility Features

- Semantic HTML elements (`nav`, `main`, `section`, `footer`)
- Proper ARIA roles and attributes
- Keyboard navigation support
- High contrast color scheme
- Responsive text sizing
- Focus indicators for interactive elements


## 👨‍💻 Developer Information

**Created by**: Muhammad Haroon Waheed
**Purpose**: Dynamics 360 Web Development Internship Case Study  
**Submission Date**: June 5th, 2025  
**Technologies**: HTML5, CSS3, Vanilla JavaScript  

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Status**: ✅ Complete - Ready for submission  
**Last Updated**: June 4th, 2025
