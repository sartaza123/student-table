# 🎓 Student Table – React CRUD Application

A fully responsive **Student Management System** built with **React.js** and **Tailwind CSS**.  
This project allows users to **Add, Edit, Delete, Search, and Export student records** while storing data in **localStorage** so it persists after page refresh.

The application is completely **frontend-based**, implementing **CRUD operations using React state and localStorage** without requiring a backend.

---

# 🚀 Features

### 📋 Student Management

- Add new student
- Edit existing student with prefilled form
- Delete student with confirmation modal
- View all students in a responsive table

### 🖼 Profile Photo

- Upload student profile photo
- Image stored as **Base64 in localStorage**
- Displayed in the student table

### 🔍 Search

- Search students directly from the header search bar

### 📊 Excel Export

- Download the students list as an **Excel (.xlsx)** file
- Clean exported file without internal fields

### 💾 Data Persistence

- Student data saved using **localStorage**
- Data remains after refreshing the browser

### 📱 Fully Responsive UI

- Desktop → table layout
- Mobile → card layout for students

### ⚠ Form Validation

- Required field validation
- Email format validation
- Phone number validation
- Age validation

### 🧾 Confirmation Modal

- Custom modal dialog before deleting a student

---

# 🛠 Technologies Used

| Technology           | Purpose                     |
| -------------------- | --------------------------- |
| **React.js**         | UI framework                |
| **React Router DOM** | Page routing                |
| **Tailwind CSS**     | Styling & responsive layout |
| **React Icons**      | Icons                       |
| **XLSX**             | Excel file export           |
| **localStorage API** | Data persistence            |

---

# 📂 Project Folder Structure

```
student-table
│
├── public
│
├── src
│   │
│   ├── components
│   │   ├── Header.jsx
│   │   ├── StudentTable.jsx
│   │   └── ConfirmDialogBox.jsx
│   │
│   ├── context
│   │   └── StudentsContext.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   └── AddStudent.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

### Folder Description

**components/**  
Reusable UI components such as header, table, and modal dialog.

**context/**  
Global state management using React Context API.

**pages/**  
Main pages of the application.

**App.jsx**  
Application layout wrapper containing header and router outlet.

**main.jsx**  
Application entry point with router configuration.

---

# ⚙ Installation & Setup

Clone the repository

```bash
git clone https://github.com/sartaza123/student-table.git
```

Navigate to the project folder

```bash
cd student-table
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Open the application

```
http://localhost:5173
```

---

# 🧑‍💻 Author

**Md Sartaz Ansari**

GitHub:  
https://github.com/sartaza123

---

# License

This project is created for **learning and assignment purposes**.

---

# Project Highlights

- Fully responsive React application
- Clean component-based architecture
- Uses React Context for global state
- Implements frontend-only CRUD
- Data persistence with localStorage
- Excel export functionality
- Modern UI using Tailwind CSS
