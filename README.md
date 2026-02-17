# Shweta Medical Mart 🏥

Welcome to the official repository for **Shweta Medical Mart**, a comprehensive static web application designed for a pharmacy and healthcare provider based in Sangli. This platform connects customers with quality generic medicines, surgical items, and dedicated healthcare services.

## 📖 Project Overview

Shweta Medical Mart is a modern, responsive website built with a **pure static architecture**. It serves as a digital gateway to a multi-faceted healthcare center:
*   **Pharmacy**: Generic and branded medicines
*   **OPD**: Outpatient Department services with doctor schedules
*   **Gift Shop**: A variety of articles and gifts
*   **Cafe**: A relaxing space for visitors

The website provides a seamless user experience for browsing services, viewing product galleries, and booking appointments, with **no backend or build dependencies required**.

## ✨ Key Features

*   **🌐 Complete Multilingual Support**: 
    *   Fully localized in **English**, **Marathi**, and **Hindi**
    *   Instant language switching with `localStorage` persistence
    *   All pages including Gallery are fully translatable
*   **🏃 Fast & Static**: 
    *   No server-side processing or Node.js required
    *   Pages load instantly
    *   Can be hosted on any static hosting platform (GitHub Pages, Netlify, cPanel, etc.)
*   **🏥 Trusted Identity**: Consistent **Medical Green** theme across the site to build trust and brand recognition
*   **🖼️ Dynamic Gallery**: 
    *   Organized into **Cafe, Gift Shop, and Medicine** categories
    *   Premium **focus-blur effect** and lightbox viewer
    *   Fully translatable category titles and messaging
*   **📅 WhatsApp Integration**: 
    *   **Direct Booking**: Appointment forms send structured WhatsApp messages
    *   **Enquiry Forms**: General enquiries routed to WhatsApp for quick response
*   **📱 Responsive & Modern**: 
    *   Built with **Bootstrap 5** and custom CSS
    *   Glassmorphism design that works on all devices
    *   Mobile-first approach
*   **📍 Location & Contact**: 
    *   Integrated Google Maps
    *   One-click floating action buttons for Call, WhatsApp, and Email

## 🛠️ Technology Stack

*   **Frontend**: HTML5, CSS3 (Bootstrap 5 + Custom Styles), JavaScript (ES6+)
*   **Localization**: Custom JS-based translation engine (`translations.js`, `localization.js`)
*   **Animations**: AOS (Animate On Scroll) Library
*   **Icons**: FontAwesome
*   **Dependencies**: All loaded via CDN (no npm/node_modules required)

## 🚀 Installation & Usage

**No installation or build process required!** This is a pure static website.

### Option 1: Direct Browser Preview
1.  Clone or download the repository
2.  Double-click `index.html` to open in your browser
    *   *Note: Some features may have CORS restrictions. Use a local server for best experience.*

### Option 2: Local Server (Recommended)

**Using Python:**
```bash
# Navigate to project folder
cd Shweta_Medical_Mart

# Start server
python -m http.server 8000

# Visit http://localhost:8000
```

**Using VS Code:**
1.  Install "Live Server" extension
2.  Right-click `index.html` → "Open with Live Server"

**Using Node.js (if installed):**
```bash
npx http-server -p 8000
```

### Option 3: Deploy to Hosting
Simply upload all files to any static hosting service:
*   **cPanel**: Upload via File Manager or FTP
*   **GitHub Pages**: Push to repository and enable Pages
*   **Netlify/Vercel**: Drag and drop the folder

## 📂 Project Structure

```
Shweta_Medical_Mart/
├── index.html              # Main Landing Page (Hero, Features, Services)
├── about.html              # About Us Page
├── gallery.html            # Gallery Overview Page
├── category.html           # Dynamic Category Gallery (handles ?cat=cafe|gift|medicine)
├── opd.html                # OPD Services & Doctor Information
├── appointment.html        # Appointment Booking Form
├── contact.html            # Contact Form & Information
│
├── static/                 # Static Assets
│   ├── css/
│   │   └── style.css       # Global Stylesheet (16KB)
│   ├── js/
│   │   ├── main.js         # UI Interactions & Event Handlers
│   │   ├── translations.js # Translation Dictionary (En, Mr, Hi)
│   │   ├── localization.js # Language Switching Logic
│   │   ├── gallery.js      # Gallery & Lightbox Functionality
│   │   └── images.js       # Centralized Image Paths
│   └── images/             # Image Assets (organized by category)
│
└── README.md               # This Documentation
```

## 🌐 Localization System

The project uses a lightweight, custom localization engine:

1.  **Translation Dictionary**: `static/js/translations.js` contains all text in 3 languages
2.  **HTML Marking**: Elements use `data-i18n="key"` attribute
3.  **Dynamic Content**: Placeholders use `data-i18n="[placeholder]key"`
4.  **Persistence**: User's language preference is saved in `localStorage`
5.  **Auto-Apply**: Language is applied on page load automatically

**Example:**
```html
<h1 data-i18n="welcome">Welcome</h1>
<input data-i18n="[placeholder]name" placeholder="Name">
```

## 🧪 Testing

Currently, this project uses **manual testing** through browser interaction. No automated unit tests are implemented.

**Manual Testing Checklist:**
- ✅ Test all pages on different browsers (Chrome, Firefox, Safari, Edge)
- ✅ Verify responsive design on mobile, tablet, and desktop
- ✅ Test language switching on all pages
- ✅ Verify WhatsApp integration for appointments and enquiries
- ✅ Check gallery functionality and lightbox
- ✅ Test all forms and navigation links

## 📞 Contact Information

**Shweta Medical Mart**
*   **Address**: Near Civil Hospital, Sangli–Miraj Road, Sangli, Maharashtra
*   **Phone**: +91 99233 46656
*   **Email**: shwetamedicalmart@gmail.com
*   **WhatsApp**: +91 99233 46656

## 📝 License

This project is proprietary and developed for Shweta Medical Mart.

---

**Developed with ❤️ by Techspot Infotech LLP**  
*Last Updated: February 2026*
