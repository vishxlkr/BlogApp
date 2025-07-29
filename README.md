# 📝 BlogSphere – MERN Stack Blog Platform

A full-stack blog application where the admin can create, manage, and publish content, while users can browse and comment on posts. Built with the MERN stack, featuring AI-powered content generation and cloud image optimization.

## 🚀 Features

### 🔒 Admin Functionality

* **Secure Login** – Only admin can log in and access the dashboard.
* **Create & Edit Blogs** – Use Quill rich-text editor for formatting.
* **AI Content Generator** – Auto-generate blog content from titles using Gemini API.
* **Image Upload** – Upload via Multer and compress + convert to WebP using ImageKit.
* **Publish/Unpublish Blogs** – Control visibility of each blog post.
* **Comment Moderation** – View, approve, or delete user comments.
* **Blog Management Dashboard** – See all blogs, manage posts and comments easily.

### 🌐 User Experience

* **Read Blogs** – Fully responsive blog reading experience.
* **Search & Category Filter** – Quickly find posts by keyword or category.
* **Leave Comments** – Engage with content through commenting (admin approval required).

## 🛠 Tech Stack

* **Frontend**: React, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Authentication**: Token-based login using LocalStorage
* **File Upload**: Multer + ImageKit (WebP compression)
* **AI Integration**: Gemini API for blog content generation

## 📂 Folder Structure

```
project/
├── client/         # React Frontend
│   ├── pages/      # Pages (Home, Blog, Admin layout)
│   ├── components/ # Reusable Components
│   └── ...
├── server/         # Express Backend
│   ├── models/     # Mongoose Schemas
│   ├── controllers/
│   ├── routes/
│   └── ...
└── .env            # Environment variables
```

## ⚙️ How to Run

### 1. Clone the repo

```bash
git clone https://github.com/your-username/blogsphere.git
cd blogsphere
```

### 2. Set up Environment Variables

Create `.env` files in both `client/` and `server/` folders. Example:

**client/.env**

```
VITE_BASE_URL=http://localhost:5000
```

**server/.env**

```
PORT=5000
MONGO_URI=your_mongo_uri
GEMINI_API_KEY=your_gemini_key
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
JWT_SECRET=your_secret
```

### 3. Install Dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 4. Run the Project

```bash
# In one terminal
cd server && npm run dev

# In another terminal
cd client && npm run dev
```

## 📸 Screenshots 

<img width="1919" height="1079" alt="Screenshot 2025-07-29 141042" src="https://github.com/user-attachments/assets/1aaaead4-b3d7-4540-bffa-83f906ec17b4" />
<img width="1919" height="1079" alt="Screenshot 2025-07-29 141050" src="https://github.com/user-attachments/assets/1418034d-d414-4dd1-80c9-cbc2eb968658" />

<img width="1919" height="1079" alt="Screenshot 2025-07-29 141207" src="https://github.com/user-attachments/assets/2e5bc46e-835f-470f-a275-4031bfe88fe1" />
<img width="1919" height="1079" alt="Screenshot 2025-07-29 141110" src="https://github.com/user-attachments/assets/3894afeb-338e-4c57-9bec-ecafe876cb06" />
<img width="1919" height="1079" alt="Screenshot 2025-07-29 141120" src="https://github.com/user-attachments/assets/aed35487-035f-40cb-9a4d-5b39687ea0cc" />
<img width="1919" height="1079" alt="Screenshot 2025-07-29 141128" src="https://github.com/user-attachments/assets/865ac07d-fc44-4377-9f53-ca2db540b131" />
<img width="1919" height="1079" alt="Screenshot 2025-07-29 141134" src="https://github.com/user-attachments/assets/9f6cc41e-cb9d-4503-a105-69dfbf2f9f69" />




## ✍️ Author

Built by **Vishal**, a passionate developer exploring full-stack and AI integration.
