# 📱 Hero IO — App Store Listing Platform

A fully responsive and interactive web application where users can explore apps, view detailed pages, install/uninstall apps using LocalStorage, and analyze ratings using dynamic charts.  
Built as **Assignment 008** following all main + challenge requirements.

🔗 **Live Demo:** https://silly-peony-df2e78.netlify.app/  
📦 **GitHub Repository:** https://github.com/mohammad-aftab-hossain-mozumder/ASSIGNMENT-08.git

---

## 📝 Project Summary

**Hero IO** is a modern, sleek, and production-ready app marketplace interface inspired by Google Play Store.  
Users can browse apps, view descriptions, check ratings, and even “install” apps locally using the browser’s LocalStorage.

The app includes:

- Home Page with Banner + Stats + Top Apps  
- All Apps Page with live search & sorting  
- App Details Page with dynamic charts  
- My Installation Page  
- Custom Error Page  
- Loading animations  
- Fully responsive layouts  
- Seamless routing with reload support on Netlify  

---

## ✨ Key Features

### 🔹 Fully Responsive UI  
Optimized for Mobile, Tablet, and Desktop.

### 🔹 App Data (12+ Objects)  
Each app includes title, image, downloads, reviews, rating breakdown, etc.

### 🔹 Home Page
- Banner with CTA buttons  
- Stats section  
- Top Apps grid  
- “Show All” navigation button

### 🔹 All Apps Page
- Live Search (case-insensitive)  
- Instant filtering  
- Total app count  
- Sorting (High-Low / Low-High downloads)  
- “No App Found” message  

### 🔹 App Details Page
- App preview image  
- Ratings, reviews, downloads  
- Recharts-based rating chart  
- Description section  
- Install button with:
  - Success toast  
  - Disabled state  
  - Saved via LocalStorage  

### 🔹 My Installation Page
- Shows installed apps  
- Uninstall button  
- Removes from UI + LocalStorage  
- Toast notification  

### 🔹 Loading Animations
- During route navigation  
- During search operations  

### 🔹 Error Handling
- Custom 404 page  
- Invalid app → Relevant error message  
- Reloading routes works perfectly

---

## 📦 Dependencies

Below are the exact dependencies used in this project:

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.14",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router": "^7.9.3",
  "react-toastify": "^11.0.5",
  "recharts": "^3.2.1",
  "tailwindcss": "^4.1.14"
}
```

---

## 🛠️ Technologies Used

- React.js  
- React Router DOM  
- Tailwind CSS  
- Recharts  
- React Toastify  
- LocalStorage  
- Netlify Deployment  

---

## 🚀 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/mohammad-aftab-hossain-mozumder/ASSIGNMENT-08.git

# Move into project directory
cd ASSIGNMENT-08

# Install dependencies
npm install

# Start development server
npm run dev
```

---



## 🧾 Assignment Info  
This project was created for **Assignment 008 — Hero IO**, implementing all required & challenge features.

