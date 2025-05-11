🔗 **Live Demo**:  
👉 [Job Portal on Render](https://jobportal-mern-frontend-sdm5.onrender.com)

🔐 **Demo Credentials**  
- **Email**: `peter@gmail.com`  
- **Password**: `peter`

---



# 💼 Job Portal Application

A full-stack job portal where users can register as **Job Seekers** or **Employers**, post and apply for jobs, manage applications, and oversee company profiles. Built using the MERN stack.

---

## 🚀 Features

### 🔐 User Authentication & Profiles

* **JWT Authentication** (Login/Register)
* **Role-based Access** (Job Seeker / Employer)
* Profile Management:

  * Personal Info (name, email, phone)
  * Skills and Bio
  * Upload profile photo & resume (Cloudinary)
  * Company association (for employers)

### 🏢 Company Management

* Company registration with logo
* Company profile management:

  * Name, Description, Website, Location
  * Update logo and details
  * Public company profile view

### 📄 Job Management

* Post jobs with:

  * Title, Description, Requirements
  * Salary, Location, Job Type
  * Experience level & Position
* Edit/Delete jobs
* Job listing with filters
* View applicants for posted jobs

### 📅 Application System

* Apply for jobs
* Track application status (Pending / Approved / Rejected)
* View previously applied jobs
* Employers can view applicants
* Prevent duplicate applications

### 🚰 Admin Features

* View all posted jobs
* Manage job listings
* View all applicants for any job

---

## 🧰 Tech Stack

| Layer       | Technology                   |
| ----------- | ---------------------------- |
| Frontend    | React.js, Redux.js           |
| Backend     | Node.js, Express.js          |
| Database    | MongoDB, Mongoose ODM        |
| Auth        | JWT, bcryptjs                |
| File Upload | Cloudinary (images, resumes) |

___

## 📌 API Endpoints

### 🔑 Authentication Routes

| Method | Endpoint    | Description       | Auth Required |
| ------ | ----------- | ----------------- | ------------- |
| POST   | `/register` | Register new user | ❌             |
| POST   | `/login`    | Login user        | ❌             |
| POST   | `/logout`   | Logout user       | ✅             |

### 👤 User Profile Routes

| Method | Endpoint      | Description         | Auth Required |
| ------ | ------------- | ------------------- | ------------- |
| GET    | `/getprofile` | Get user profile    | ✅             |
| PUT    | `/update`     | Update user profile | ✅             |

### 🏢 Company Routes

| Method | Endpoint          | Description            | Auth Required |
| ------ | ----------------- | ---------------------- | ------------- |
| POST   | `/regcompany`     | Register a company     | ✅             |
| GET    | `/getcompany`     | Get user's company     | ✅             |
| GET    | `/getcompany/:id` | Get company by ID      | ✅             |
| PUT    | `/update/:id`     | Update company details | ✅             |

### 💼 Job Routes

| Method | Endpoint               | Description             | Auth Required |
| ------ | ---------------------- | ----------------------- | ------------- |
| POST   | `/postjob`             | Post a new job          | ✅             |
| GET    | `/findalljob`          | Get all jobs            | ❌             |
| GET    | `/findjobbyid/:id`     | Get job by ID           | ❌             |
| PUT    | `/editjob/:id`         | Edit job details        | ✅             |
| GET    | `/findadminjobs`       | Get jobs by admin       | ✅             |
| GET    | `/find-applicants/:id` | View applicants for job | ✅             |
| DELETE | `/deletejob/:id`       | Delete a job            | ✅             |

### 📅 Application Routes

| Method | Endpoint           | Description                | Auth Required |
| ------ | ------------------ | -------------------------- | ------------- |
| POST   | `/apply/:id`       | Apply for a job            | ✅             |
| GET    | `/prevapply/:id`   | Check previous application | ✅             |
| GET    | `/my-applications` | View applied jobs          | ✅             |
| PATCH  | `/update/:id`      | Update application status  | ✅             |

