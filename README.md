# 🎓 Student Table – MERN Stack Student Management System

A fully responsive **Student Management System** built with **React.js, Node.js, Express.js, and MongoDB**.

This project allows users to **Add, Edit, Delete, Search, and Export student records** while storing the data in **MongoDB** through a REST API.

The frontend is built using **React + Tailwind CSS**, and the backend is built with **Node.js, Express, and Mongoose**.

---

# 🚀 Features

## 📋 Student Management

- Add new student
- Edit existing student
- Delete student with confirmation modal
- View all students in a responsive table

## 🖼 Profile Photo

- Upload student profile photo
- Image stored as **Base64 string**
- Displayed inside the table

## 🔍 Search

- Search students using the header search bar

## 📊 Excel Export

- Export student data to **Excel (.xlsx)** file

## 💾 Database Storage

- Student data stored in **MongoDB**
- Persistent backend storage

## 📱 Fully Responsive UI

- Desktop → Table layout
- Mobile → Card layout

## ⚠ Form Validation

- Required field validation
- Email format validation
- Phone number validation
- Age validation

## 🧾 Confirmation Modal

- Custom confirmation dialog before deleting a student

---

# 🛠 Technologies Used

| Technology       | Purpose            |
| ---------------- | ------------------ |
| React.js         | Frontend UI        |
| React Router DOM | Routing            |
| Tailwind CSS     | Styling            |
| React Icons      | Icons              |
| Axios            | API requests       |
| XLSX             | Excel export       |
| Node.js          | Backend runtime    |
| Express.js       | Backend framework  |
| MongoDB          | Database           |
| Mongoose         | MongoDB ODM        |
| Nodemon          | Development server |

---

# 📂 Project Folder Structure

```
student-table
│
├── client
│   └── src
│       │
│       ├── components
│       │   ├── Header.jsx
│       │   ├── StudentTable.jsx
│       │   └── ConfirmDialogBox.jsx
│       │
│       ├── context
│       │   └── StudentsContext.jsx
│       │
│       ├── pages
│       │   ├── Home.jsx
│       │   └── AddStudent.jsx
│       │
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── server
│   │
│   ├── config
│   │   └── db.js
│   │
│   ├── controller
│   │   └── studentController.js
│   │
│   ├── models
│   │   └── Student.js
│   │
│   ├── routes
│   │   └── studentRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/sartaza123/student-table.git
cd student-table
```

---

# ⚛ Frontend Setup

Navigate to the frontend folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🖥 Backend Setup

Navigate to backend folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create `.env` file inside **server folder**

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/student-manager
```

Run backend server:

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

# 🌐 API Endpoints

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/students     | Get all students |
| POST   | /api/students     | Add new student  |
| PUT    | /api/students/:id | Update student   |
| DELETE | /api/students/:id | Delete student   |

---

# 🔌 Frontend ↔ Backend Flow

```
React Form
     ↓
Axios API Call
     ↓
Express Server
     ↓
Mongoose Model
     ↓
MongoDB Database
```

---

# ▶ Running Full Project

Open **two terminals**

### Terminal 1 – Backend

```
cd server
npm run dev
```

### Terminal 2 – Frontend

```
cd client
npm run dev
```

---

# 🧑‍💻 Author

**Md Sartaz Ansari**

GitHub
https://github.com/sartaza123

---

# 📌 Project Highlights

- Full **MERN stack application**
- REST API with Express.js
- MongoDB database integration
- Responsive UI with Tailwind CSS
- Excel export feature
- Clean React component architecture
- Context API state management

---

# 📄 License

This project is created for **learning and educational purposes**.
