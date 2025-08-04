# Basti Ki Pathshala

**Basti Ki Pathshala** is a responsive, multilingual NGO website built with React, Bootstrap, and react-i18next. It aims to promote quality education for underprivileged children with volunteer engagement and organizational transparency.

---
## 🌍 Deployment

The website is deployed and accessible at:  
**[https://basti-ki-pathshala-abhishek.netlify.app/](https://basti-ki-pathshala-abhishek.netlify.app/)**


---
## 🚀 Features

- **Responsive design**: Works on desktop and mobile.
- **Multiple sections**: Home, Gallery, Events, Team, About Us, FAQ, and Volunteer Form.
- **Multilingual**: Easily switch between Hindi and English.
- **Modern UI**: Clean Bootstrap styles with interactive hover effects.
- **Easy to extend**: Add more events, images, or sections anytime!

---

## 🏗️ Folder Structure
```
basti-ki-pathshala/
├── public/
│   └── images/                  # Team/gallery images and placeholders
├── src/
│   ├── components/
│   │   ├── AboutUs.js
│   │   ├── EventsSection.js
│   │   ├── FAQSection.js
│   │   ├── GallerySection.js
│   │   ├── Home.js
│   │   ├── Navbar.js
│   │   ├── TeamSection.js
│   │   └── VolunteerForm.js
│   ├── locales/
│   │   ├── en.json
│   │   └── hi.json
│   ├── i18n.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── README.md
```

⚡ Quick Start:
Install dependencies
```
bash
npm install
Start the development server
```

```
bash
npm start
```
```
Visit
http://localhost:3000
```
```
🌏 Languages
Easily switch between English and हिंदी using the navbar buttons.

All dynamic text is fully translated via src/locales/en.json and src/locales/hi.json.
```
```
🛠️ Tech Stack:
React
React-Bootstrap
react-i18next
Bootstrap 5
react-icons (for avatars and fallback icons)
```
```
✨ Customization
Images: Replace/add your own team or gallery images in public/images/.
Events/FAQs: Edit section JavaScript files to update content.
Add more languages: Extend locales/ and update i18n.js.
Navbar Linking: Adjust section IDs and navbar links for smooth scroll/navigation.
```
