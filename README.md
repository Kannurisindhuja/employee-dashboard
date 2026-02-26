# employee-dashboard

📊 Employee Management Dashboard

A modern, responsive Authentication Dashboard built with React.js, designed for assignments, portfolio showcase, and internship submissions.
Includes login authentication, protected routing, dashboard UI, and clean component structure.

🔐 Login Credentials

 Takes Username and Password
 
 Valid credentials:

| Username | Password |
| -------- | -------- |
|   test   | 123456   |

On success → Redirects to List Page

Invalid login → Shows error message

🌐 Backend Integration

   REST API Used:

   https://backend.jotish.in/backend_dev/gettabledata.php
   
   POST Request Body:

   {
  "username": "test",
  "password": "123456"
}

Data is fetched dynamically and displayed on the List page.

🌟 Features

 | Category           | Features                               |
| ------------------ | -------------------------------------- |
| **Authentication** | ✅ Mock login (test / 123456)           |
|                    | ✅ Persistent login (survives refresh)  |
|                    | ✅ Protected routes                     |
| **Dashboard**      | ✅ Secure dashboard after login         |
|                    | ✅ Logout functionality                 |
|                    | ✅ Confirmation before logout           |
| **UI/UX**          | 🎨 Clean & modern design               |
|                    | 📱 Fully responsive layout             |
|                    | ⚡ Smooth navigation using React Router |

🛠 Tech Stack

| Layer            | Technology           |
| ---------------- | -------------------- |
| Framework        | React.js             |
| Routing          | React Router DOM v6  |
| State Management | React Context API    |
| Data Persistence | localStorage         |
| Styling          | Custom CSS (App.css) |
| Language         | JavaScript (ES6)     |
| Frontend         | React.js              |
| API Calls        | Fetch / Axios         |
| Charts          | Chart.js / Recharts/bargraph   |
| Map             | Leaflet / Google Maps |

▶️ How to Run Locally

📌 Prerequisites

Node.js (v16+)

npm or yarn

🚀 Steps
1️⃣ Clone Repository

git clone https://github.com/Kannurisindhuja/employee-dashboard.git

cd employee-dashboard

2️⃣ Install Dependencies

npm install       # or yarn install

3️⃣ Start Application

npm start         # or yarn start

4️⃣Open in browser

        App runs on:http://localhost:3001
		
		Login credentials:
		
                   Username: test
                   Password: 123456


📸 Screenshots

🔑 Login Page

<img width="1920" height="913" alt="login" src="https://github.com/user-attachments/assets/a5afceea-3f87-4e73-95ae-d67ecc64021e" />

📝 Employee Details Form

<img width="1920" height="882" alt="details" src="https://github.com/user-attachments/assets/8f877d0a-e0db-4f7f-b6ea-1c1e4b0d1c32" />

📋 Employee List Dashboard

<img width="1920" height="909" alt="list" src="https://github.com/user-attachments/assets/0d0f84e4-2bf4-48f3-a198-9c941895056f" />

📊 Salary Distribution Graph

<img width="1920" height="954" alt="salary" src="https://github.com/user-attachments/assets/d5cc27b5-3f15-4153-ba63-de23fa63a916" />


🔄 Add Authentication Flow

1. User opens Login Page  
2. Enters valid credentials  (test / 123456) 
3. Token stored in localStorage  
4. Redirected to Dashboard  
5. Refresh → stays logged in  
6. Logout → clears storage


📊 Data Visualization (Creativity Section)

✅ Bar Graph

Displays salaries of first 10 employees

Implemented using chart library (e.g., Chart.js / Recharts)

## 📊 Salary Distribution Graph

<img width="1920" height="954" alt="salary" src="https://github.com/user-attachments/assets/d5cc27b5-3f15-4153-ba63-de23fa63a916" />

Visual representation of employee salary statistics.




 





