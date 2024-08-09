# Password-Checker
Password Checker is a web application that allows users to check if their passwords have been compromised in data breaches. This project uses the Pwned Passwords API to securely verify if a password has been leaked.

Features
Real-time Password Security Check: Users can input a password and instantly check if it has been compromised.
Secure Communication: The application uses the k-anonymity model to ensure that passwords are not exposed during the check.
Responsive Design: The web interface is designed to work well on both desktop and mobile devices.
Clean and Modern UI: The user interface is designed with a modern and visually appealing layout.

Getting Started

Prerequisites
Python 3.x
Flask (pip install Flask)
Requests library (pip install requests)

Installation

Clone the Repository:
---bash 
git clone https://github.com/yourusername/password-checker.git
cd password-checker

Install Dependencies:
---bash pip freeze > requirements.txt

Run the Application:
--- bash
python checkmypassword.py

Access the Application:
Open your web browser and go to http://127.0.0.1:5000/.

Project Structure
checkmypassword.py: The main Flask application that handles routing and API calls.
templates/index.html: The main HTML page of the application.
static/css/styles.css: The stylesheet for the application.
static/js/script.js: The JavaScript file that handles the interaction between the frontend and backend.

Usage
Enter your password in the input field on the main page.
Click the "Check Password" button.
The application will check if your password has been compromised and display the results on the page.

Contributing
Contributions are welcome! Please fork this repository and submit a pull request.

Acknowledgements
Have I Been Pwned for the Pwned Passwords API.
Google Fonts for the Nunito font.

This README.md provides a comprehensive overview of your project, including setup instructions, usage details, and an invitation for others to contribute.
