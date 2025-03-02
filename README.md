# InvestoGenix
Smart Financial Education and Advisory Platform Empowering India’s Youth with AI-Driven Financial Literacy &amp; Smart Investment Planning.


## Overview

This project is a full-stack application that utilizes Django for the backend and a JavaScript framework (e.g., React, Vue, etc.) for the frontend. The backend is responsible for handling data and business logic, while the frontend provides a user interface for interaction.

## Problem statements
Rural youth often face significant challenges related to financial literacy and awareness. Many individuals in these areas lack access to reliable financial information and resources, leading to poor financial decisions. This lack of knowledge can result in
Lack of Engagement,Fragmented Information,Vulnerability to Scams,Poor Investment Choices,Debt Accumulation etc.

## Project Structure

- Backend: Built with Django, a high-level Python web framework and connected with mongodb.
- Frontend: Built with a JavaScript framework (e.g., React, Vue, etc.).

## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm
- MongoDB

### Backend Setup

1. Create a Virtual Environment:
   
   python -m venv env
Activate the Virtual Environment:

On Windows:

Run
Copy code
.\env\Scripts\activate
On macOS/Linux:

Run
Copy code
source env/bin/activate
Install Required Packages:


Run
Copy code
pip install -r requirements.txt
Run Migrations:



python manage.py makemigrations
python manage.py migrate
Start the Django Development Server:



python manage.py runserver
Set Up MongoDB:

Open MongoDB and create a new database named "Django".
Frontend Setup
Navigate to the Frontend Directory:


cd path/to/frontend
Install Frontend Dependencies:


npm install
Start the Frontend Development Server:


npm run dev -- --port 3000
Usage
Access the backend API at http://127.0.0.1:8000/.
Access the frontend application at http://localhost:3000/.
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## Features

- User -Friendly Home Page: Provides a clear overview of our mission and the features available on the platform.

- Secure Authentication System: Ensures a secure and personalized experience for users, allowing them to create accounts and access tailored content.

- Current News Section: Keeps users updated with real-time financial trends and news, helping them make informed decisions.

- Budget Saving Tools: Offers tools to help users effectively manage their expenses and savings, promoting better financial habits.

- Success Stories: Showcases inspiring stories of young investors who have successfully navigated their financial journeys, motivating others to take action.

- Structured Courses: Provides a range of courses designed to teach essential financial skills in a structured and engaging manner.

- GenixBot - AI-Powered Chatbot: An interactive chatbot that offers instant financial advice and answers user queries, making financial education more accessible.

- About Us Section: Shares the journey and vision of Investogenix, connecting with users on a personal level and building trust.

- Future Enhancements: Plans to integrate AI-driven financial planning tools and regional language support to broaden accessibility and reach a wider audience.