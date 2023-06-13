# newsletter-signup

This is a simple web application that allows users to sign up for a newsletter using their first name, last name, and email address. The application is built using Express.js and integrates with the Mailchimp API for managing the newsletter subscriptions.

# Features
User-friendly interface for entering the required information.
Server-side validation to ensure that all fields are filled out correctly.
Integration with the Mailchimp API to add subscribers to the mailing list.
Success and failure pages to indicate the outcome of the signup process.
Responsive design using Bootstrap CSS framework.

# Getting Started
To get started with the newsletter signup application, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using npm install.
3. Set up your Mailchimp API key by creating a .env file in the root directory and adding the following line:
API_KEY=YOUR_MAILCHIMP_API_KEY

4. Customize the HTML templates (signup.html, success.html, failure.html) to match your branding, if desired.
5. Run the application using npm start.
6. Access the application in your web browser at http://localhost:3000.

# Dependencies
The following dependencies are used in this application:

Express.js: Fast and minimalist web framework for Node.js.
Body-parser: Node.js body parsing middleware.
Axios: Promise-based HTTP client for Node.js and the browser.
dotenv: Loads environment variables from a .env file.
