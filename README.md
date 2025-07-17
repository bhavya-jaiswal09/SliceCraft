# SliceCraft - Fullstack Enterprise Pizza Delivery & Admin Management Platform

A modern fullstack enterprise pizzeria e-commerce application designed for online pizza ordering, shopping cart management, real-time order tracking, and interactive administrative dashboard operations.

## 🚀 Tech Stack

### Backend
- **Node.js & Express.js** - RESTful API server engineered with TypeScript.
- **TypeORM & PostgreSQL** - Relational database mapping, seeders, and migration workflows.
- **Bcrypt.js & JsonWebToken (JWT)** - Secure password hashing and stateless token authentication.
- **Zod & Dotenv** - Strict environment variables management and request validation schemas.
- **Docker & Docker Compose** - Containerized database and backend service orchestration.

### Frontend
- **Next.js & TypeScript** - Server-side rendering, routing, and responsive web UI.
- **Material UI (MUI)** - Modern enterprise design system and component architecture.
- **Formik & Yup** - Client-side form state handling and validation schemas.
- **Axios & Nookies** - Asynchronous HTTP communication and cookie persistence.

---

## 🔑 Key Features

- **User Authentication**: Secure registration, login, JWT token persistence, and profile management.
- **Pizza Catalog**: Interactive pizza menu with category filters, detailed ingredient views, and size options.
- **Shopping Cart**: Real-time cart creation, item quantity updates, total calculation, and checkout.
- **Order Management**: Order placement, status tracking (pending, processing, delivered), and history view.
- **Admin Dashboard**: Administrative controls for managing user accounts, menu items, and stock inventory.

---

## ⚙️ Setup & Installation

### Option 1: Standard Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/bhavya-jaiswal09/First_Project_AK_and_BRJ.git
   cd First_Project_AK_and_BRJ
   ```

2. **Configure Backend Environment**
   Create a `.env` file inside the `backend/` directory based on `.env.example`:
   ```env
   PORT=3001
   DATABASE_URL=postgres://admin:slicecraftpassword@localhost:5432/slicecraft
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Install Dependencies & Start Services**
   ```bash
   # Backend Setup
   cd backend
   npm install
   npm run dev

   # Frontend Setup
   cd ../frontend
   npm install
   npm run dev
   ```

### Option 2: Docker & Docker Compose Setup

Run the backend and PostgreSQL database seamlessly via Docker:
```bash
cd backend
docker-compose up --build -d
```

---

## 👨‍💻 Development Team

- **Adarsh Kumar** - [@adarshkshitij](https://github.com/adarshkshitij)
- **Bhavyaraj Jaiswal** - [@bhavya-jaiswal09](https://github.com/bhavya-jaiswal09)
- **Prateek12** - [@prateekkr12](https://github.com/prateekkr12)
