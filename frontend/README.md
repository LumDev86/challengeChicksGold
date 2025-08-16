# 📄 Project Documentation

## 🚀 Clone the repository

First, clone the project from GitHub:

```bash
git clone https://github.com/user/repository-name.git

cd frontend

npm install

npm start
```

## 1. Project Structure

```
📦frontend  
 ┣ 📂public  
 ┣ 📂src  
 ┃  ┣ 📂components  
 ┃  ┃ ┣ 📂BannerLogo  
 ┃  ┃ ┃ ┣ BannerLogo.jsx  
 ┃  ┃ ┃ ┗ BannerLogo.module.css  
 ┃  ┃ ┣ 📂FilterBar  
 ┃  ┃ ┃ ┣ FilterBar.jsx  
 ┃  ┃ ┃ ┗ FilterBar.module.css  
 ┃  ┃ ┣ 📂Footer  
 ┃  ┃ ┃ ┣ Footer.jsx  
 ┃  ┃ ┃ ┗ Footer.module.css  
 ┃  ┃ ┣ 📂NavBar
 ┃  ┃ ┃ ┣ menuData.js
 ┃  ┃ ┃ ┣ NavBar.jsx  
 ┃  ┃ ┃ ┗ NavBar.module.css  
 ┃  ┃ ┣ 📂Nertworking  
 ┃  ┃ ┃ ┣ Nertworking.jsx  
 ┃  ┃ ┃ ┗ Nertworking.module.css
 ┃  ┃ ┣ 📂Pagination  
 ┃  ┃ ┃ ┣ Pagination.jsx  
 ┃  ┃ ┃ ┗ Pagination.module.css    
 ┃  ┃ ┣ 📂ProductCard  
 ┃  ┃ ┃ ┣ ProductCard.jsx  
 ┃  ┃ ┃ ┗ ProductCard.module.css
 ┃  ┃ ┣ 📂ProductGrid  
 ┃  ┃ ┃ ┣ ProductGrid.jsx  
 ┃  ┃ ┃ ┗ ProductGrid.module.css   
 ┃  ┣ App.module.css  
 ┃  ┣ App.tsx  
 ┃  ┗ index.css  
 ┗ package.json  
 ```

**Key Features:**
- Each component is in its own folder.
- Styles are encapsulated with **CSS Modules** (`.module.css`).
- Folder and file names use **PascalCase** for components, and **camelCase** for CSS classes.

---

## 2. Component Description

### **BannerLogo**
- **Location:** `/components/BannerLogo`
- **Purpose:** Display a banner with the site's main logo.
- **Props:** None.
- **Dependencies:** Only its CSS.
- **Notes:** Ideal for the top of the website or in a global layout.

### **FilterBar**
- **Location:** `/components/FilterBar`
- **Purpose:** Display a filter bar (categories, price ranges, etc.).
- **Props:**  
  - `filters` (array): List of available filters.
  - `onFilterChange` (function): Callback to handle changes.
- **Dependencies:** None external.

### **Footer**
- **Location:** `/components/Footer`
- **Purpose:** Contain links, copyright, and social media.
- **Props:** None.
- **Dependencies:** None external.

### **NavBar**
- **Location:** `/components/NavBar`
- **Purpose:** Contain the main navigation and client access.
- **Props:**  
  - `links` (array): Menu items.
- **Dependencies:** None external.

### **Nertworking**
- **Location:** `/components/Nertworking`
- **Purpose:** Container for social media icons.  
  - `links`: Access to social media.
- **Dependencies:** None external.

### **Pagination**
- **Location:** `/components/Pagination`
- **Purpose:** Pagination of product cards.  
  - `links`: Access to each page, considering it contains 10 product cards.
- **Dependencies:** None external.

### **ProductCard**
- **Location:** `/components/ProductCard`
- **Purpose:** Display product information (image, name, price).
- **Props:**  
  - `image` (string): Image URL.
  - `name` (string): Product name.
  - `price` (string | number): Price.
- **Dependencies:** None external.

### **ProductGrid**
- **Location:** `/components/ProductGrid`
- **Purpose:** Container for product cards.
- **Dependencies:** None external.

---

## 3. Styles and Conventions

- **CSS Modules**: Prevents class name collisions and keeps styles scoped to components.
- **Naming**:  
  - CSS classes → `lowerCamelCase`.
  - React components → `PascalCase`.
- **Best Practices Applied:**
  - Separation of concerns: each folder contains only files related to the component.
  - Readable and reusable code.
  - Clear props, easily typed with TypeScript if needed.

---

## 4. Possible Improvements
- Add **prop-types** or **TypeScript** for prop typing.
- Implement **unit tests** with Jest/React Testing Library.
- Document components visually with Storybook.
- Incorporate a Design System for consistency.


---
