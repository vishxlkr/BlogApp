# QuickBlog App - API & Data Flow Notes

This document outlines the end-to-end data flow for the core features in the blog application, detailing client-side actions, backend API endpoints, and database interactions based on the provided source code.

---

## 🔑 Admin Authentication

### Admin Login

**Client**

-  Admin enters email and password into a login form.
-  Sends `POST /api/admin/login` request using Axios.

**Backend**

-  **Route:** `adminRoutes.js` → `POST /api/admin/login`
-  **Controller:** `adminController.js (adminLogin)`
-  Compares credentials with `ADMIN_EMAIL` & `ADMIN_PASSWORD` (from environment variables).
-  On success → generates JWT.

**Responses**

-  ✅ `{ success: true, token }`
-  ❌ `{ success: false, message: "Invalid Credential" }`

**Client after success**

-  JWT stored in `localStorage` or cookies.
-  Redirects to dashboard.

---

## 📝 Blog Post Management (CRUD)

### Create a New Blog Post

**Client**

-  Admin fills form: `title, subTitle, description, category, image`.
-  Sends `POST /api/blog/add` with `multipart/form-data` + Auth token.

**Backend**

-  **Middleware:**
   -  `multer` → handles image upload.
   -  `auth` → verifies JWT.
-  **Route:** `blogRoutes.js` → `/api/blog/add`
-  **Controller:** `blogController.js (addBlog)`
   -  Parses `req.body.blog`.
   -  Uploads image buffer to **ImageKit**.
   -  Creates new Blog in MongoDB with optimized image URL.

**Responses**

-  ✅ `{ success: true, message: "blog added succesfully" }`
-  ❌ `{ success: false, message: "Missing required fields" }`

---

### Get All Published Blogs (Public)

**Client**

-  Sends `GET /api/blog/all`.

**Backend**

-  **Route:** `blogRoutes.js` → `/all`
-  **Controller:** `getAllBlogs`
-  Fetches all blogs with `isPublished = true`.

**Response**

-  ✅ `{ success: true, blogs: [...] }`

---

### Get a Single Blog by ID

**Client**

-  Sends `GET /api/blog/:blogId`.

**Backend**

-  **Route:** `blogRoutes.js` → `/:blogId`
-  **Controller:** `getBlogById`

**Responses**

-  ✅ `{ success: true, blog: {...} }`
-  ❌ `{ success: false, message: "Blog not found" }`

---

### Delete a Blog

**Client**

-  Sends `POST /api/blog/delete` with `{ id }`.

**Backend**

-  **Middleware:** `auth`
-  **Route:** `blogRoutes.js` → `/delete`
-  **Controller:** `deleteBlogById`
   -  Deletes Blog + all associated comments.

**Response**

-  ✅ `{ success: true, message: "Blog deleted successfully" }`

---

### Toggle Publish Status

**Client**

-  Sends `POST /api/blog/toggle-publish` with `{ id }`.

**Backend**

-  **Middleware:** `auth`
-  **Route:** `blogRoutes.js` → `/toggle-publish`
-  **Controller:** `togglePublish`
   -  Inverts `isPublished`.

**Response**

-  ✅ `{ success: true, message: "Blog status updated" }`

---

## 💬 Comment Management

### Add a Comment (Public)

**Client**

-  Sends `POST /api/blog/add-comment` with `{ blog, name, content }`.

**Backend**

-  **Route:** `blogRoutes.js` → `/add-comment`
-  **Controller:** `addComment`
   -  Creates Comment with `isApproved = false`.

**Response**

-  ✅ `{ success: true, message: "Comment added for review" }`

---

### Get Approved Comments (Public)

**Client**

-  Sends `POST /api/blog/comments` with `{ blogId }`.

**Backend**

-  **Route:** `blogRoutes.js` → `/comments`
-  **Controller:** `getBlogComments`
   -  Finds comments where `isApproved = true`.

**Response**

-  ✅ `{ success: true, comments: [...] }`

---

### Approve a Comment (Admin)

**Client**

-  Sends `POST /api/admin/approve-comment` with `{ id }`.

**Backend**

-  **Middleware:** `auth`
-  **Route:** `adminRoutes.js` → `/approve-comment`
-  **Controller:** `approveCommentById`
   -  Updates `isApproved = true`.

**Response**

-  ✅ `{ success: true, message: "Comment approved successfully" }`

---

## 📊 Admin Dashboard & AI

### Get Dashboard Analytics

**Client**

-  Sends `GET /api/admin/dashboard`.

**Backend**

-  **Middleware:** `auth`
-  **Route:** `adminRoutes.js` → `/dashboard`
-  **Controller:** `getDashboard`
   -  Counts blogs, comments, drafts.
   -  Fetches 5 recent blogs.

**Response**

-  ✅ `{ success: true, dashboardData: { blogs, comments, drafts, recentBlogs } }`

---

### Generate Blog Content with AI

**Client**

-  Sends `POST /api/blog/generate` with `{ prompt }`.

**Backend**

-  **Middleware:** `auth`
-  **Route:** `blogRoutes.js` → `/generate`
-  **Controller:** `generateContent`
   -  Uses Gemini AI model to generate content.

**Response**

-  ✅ `{ success: true, content: "..." }`

---

## 📂 General Data Structures

### Blog Model

```js
{
  title: String,
  subTitle: String,
  description: String,
  category: String,
  image: String,
  isPublished: Boolean,
  timestamps: true
}
```

# QuickBlog API - Endpoint Summary

This document provides a concise overview of all available API endpoints for the QuickBlog application.  
The API is divided into **Admin Routes** and **Blog Routes**.

---

## 🔑 Admin Routes (`/api/admin`)

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | `/login`           | Admin login         |
| GET    | `/comments`        | Get all comments    |
| GET    | `/blogs`           | Get all blogs       |
| GET    | `/dashboard`       | Dashboard analytics |
| POST   | `/delete-comment`  | Delete a comment    |
| POST   | `/approve-comment` | Approve a comment   |

---

## 📝 Blog Routes (`/api/blog`)

| Method | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| POST   | `/add`            | Create new blog post    |
| GET    | `/all`            | Get all published blogs |
| GET    | `/:blogId`        | Get a single blog by ID |
| POST   | `/delete`         | Delete blog             |
| POST   | `/toggle-publish` | Toggle publish status   |
| POST   | `/add-comment`    | Add new comment         |
| POST   | `/comments`       | Get approved comments   |
| POST   | `/generate`       | Generate content via AI |

---
