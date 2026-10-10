# 💸 TrackExpense

A full-stack personal finance tracker to record income and expenses, see where your money goes, and keep your savings on track.

🔗 **Live Demo:** [https://expense-tracker-mn9l.vercel.app](https://expense-tracker-mn9l.vercel.app)

---

## ✨ Features

- 🔐 **Secure authentication** – sign up and log in with JWT; passwords are hashed with bcrypt
- ➕ **Income & expense management** – add, edit and delete transactions
- 📊 **Dashboard** – total income, total expenses, savings, and a category-wise breakdown with charts
- 🗓️ **Time filters** – view data by day, week, month or year
- 📥 **Excel export** – download your income and expense records as `.xlsx`
- 👤 **Profile management** – update your profile details and change your password
- 🔔 **Toast notifications** and smooth animations for a better experience
- 📱 **Responsive UI** built with Tailwind CSS

---

## 🛠️ Tech Stack

| Layer      | Technologies                                                              |
| ---------- | ------------------------------------------------------------------------- |
| Frontend   | React 19, Vite, React Router, Tailwind CSS, Recharts, Framer Motion, Axios |
| Backend    | Node.js, Express 5, JWT, bcryptjs, validator, SheetJS (xlsx)              |
| Database   | MongoDB with Mongoose                                                      |
| Deployment | Vercel (frontend and backend), MongoDB Atlas                               |

---

## 📁 Project Structure

```
Expense-Tracker/
├── backend/
│   ├── api/            # Vercel serverless entry point
│   ├── config/         # Database connection
│   ├── controllers/    # Business logic
│   ├── middleware/     # JWT auth middleware
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   └── server.js
└── frontend/
    └── src/
        ├── components/ # Reusable UI components
        ├── pages/      # Dashboard, Income, Expense, Profile
        └── utils/      # Helpers (e.g. Excel export)
```

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

- Node.js 18+
- A MongoDB database (local, or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster)

### 1. Clone the repository

```bash
git clone https://github.com/Shivam-gupta29/Expense-Tracker.git
cd Expense-Tracker
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000
```

Start the server:

```bash
npm run dev
```

The API runs at `http://localhost:4000`.

### 3. Set up the frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:4000
```

Start the app:

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

---

## 🔌 API Endpoints

All routes except register and login require an `Authorization: Bearer <token>` header.

| Method | Endpoint                         | Description                  |
| ------ | -------------------------------- | ---------------------------- |
| POST   | `/api/user/register`             | Create a new account         |
| POST   | `/api/user/login`                | Log in and receive a token   |
| GET    | `/api/user/me`                   | Get the current user         |
| PUT    | `/api/user/profile`              | Update profile               |
| PUT    | `/api/user/password`             | Change password              |
| GET    | `/api/dashboard`                 | Dashboard overview           |
| POST   | `/api/income/add`                | Add income                   |
| GET    | `/api/income/get`                | Get all income               |
| PUT    | `/api/income/update/:id`         | Update income                |
| DELETE | `/api/income/delete/:id`         | Delete income                |
| GET    | `/api/income/overview`           | Income overview by range     |
| GET    | `/api/income/downloadexcel`      | Download income as Excel     |
| POST   | `/api/expense/add`               | Add expense                  |
| GET    | `/api/expense/get`               | Get all expenses             |
| PUT    | `/api/expense/update/:id`        | Update expense               |
| DELETE | `/api/expense/delete/:id`        | Delete expense               |
| GET    | `/api/expense/overview`          | Expense overview by range    |
| GET    | `/api/expense/downloadexcel`     | Download expenses as Excel   |

---

## 🧠 Design Decisions

- **Dashboard calculations run on the backend.** The frontend receives ready-made totals and category data instead of crunching every transaction in React. This keeps the UI simple, the results consistent, and performance steady as data grows.
- **Per-user data isolation.** Every query is filtered by the authenticated user's ID from the JWT.
- **Serverless-friendly backend.** Excel files are generated in memory and streamed to the client, so no files are written to disk.

---

## 🔮 Future Improvements

- Monthly budget limits with alerts
- Recurring transactions
- CSV import
- Dark mode

---

## 👨‍💻 Author

**Shivam Gupta**

- GitHub: [@Shivam-gupta29](https://github.com/Shivam-gupta29)

---

⭐ If you found this project useful, consider giving it a star!
