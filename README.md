# employee-dashboard

A modern, responsive Authentication Dashboard built with React.js, designed for assignments, portfolio showcase, and internship submissions.
Includes login authentication, protected routing, dashboard UI, and clean component structure.
<img width="1920" height="882" alt="details" src="https://github.com/user-attachments/assets/8f877d0a-e0db-4f7f-b6ea-1c1e4b0d1c32" />


🌟 Features
Category	Features
Authentication	✅ Mock login (test / 123456)
	✅ Persistent login (survives refresh)
	✅ Protected routes
Dashboard	✅ Secure dashboard after login
	✅ Logout functionality
	✅ Confirmation before logout
UI/UX	🎨 Clean & modern design
	📱 Fully responsive layout
	⚡ Smooth navigation using React Router
  Router
🛠Tech Stack
Layer	Technology
Framework	React.js
Routing	React Router DOM v6
State Management	React Context API
Data Persistence	localStorage
Styling	Custom CSS (App.css)
Language	JavaScript (ES6)
🔄 Authentication Flow

User opens Login Page

Enters valid credentials

Auth token stored in localStorage

Redirects to Dashboard

On refresh → stays logged in

Logout → clears localStorage → redirects to login

🧪 Testing Checklist
✅ Authentication

Login works with valid credentials

Refresh → still logged in

Logout → redirects properly

✅ Routing

Protected routes block unauthorized access

Direct URL access without login → redirected to login page
