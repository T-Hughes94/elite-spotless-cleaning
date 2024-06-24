# Elite Spotless Cleaning - Quote Form Application

## Introduction

Welcome to the Elite Spotless Cleaning Quote Form Application. This project is designed to provide a user-friendly interface for customers to request cleaning service quotes. The application is built using React and deployed on Vercel.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Configuration](#configuration)
- [Email Handling with EmailJS](#email-handling-with-emailjs)
- [Deployment](#deployment)
- [Monitoring](#monitoring)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design, optimized for all screen sizes.
- User-friendly form for collecting customer information and service requirements.
- Validation for input fields including email and address.
- Professional and attractive layout for the About Us section.
- Apex domain setup for better DNS resolution and performance.

## Technologies Used

- **React** - Frontend framework.
- **Tailwind CSS** - Styling and layout.
- **Vercel** - Deployment and hosting.
- **Axios** - HTTP client for API calls.
- **Formik** - Form handling and validation.
- **Yup** - Validation schema for forms.
- **EmailJS** - Email handling.

## Setup and Installation

### Prerequisites

- Node.js (v12 or later)
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/elite-spotless-cleaning.git
    ```

2. Navigate to the project directory:
    ```sh
    cd elite-spotless-cleaning
    ```

3. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

4. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

## Configuration

### Email Validation

Email validation is handled using the `Yup` schema within Formik. This ensures that the user provides a valid email address.

### Address Validation

Address validation can be implemented using a third-party API like Google Maps API or a similar service to ensure the address provided by the user is valid.

### DNS and Domain Setup

To set up your apex domain through Vercel:

1. Add your apex domain in the Vercel dashboard under your project settings.
2. Update your domain's nameservers to point to Vercel's nameservers provided in the dashboard.
3. Configure DNS records as needed, or let Vercel handle automatic DNS configuration.

## Email Handling with EmailJS

The application uses EmailJS for handling email submissions. Follow these steps to set up EmailJS:

1. Sign up for an account on [EmailJS](https://www.emailjs.com/).
2. Create an email service and a template for your emails.
3. Obtain your `user ID`, `service ID`, and `template ID` from the EmailJS dashboard.
4. Add these IDs to your environment variables or directly into your application code.

Example usage in your React component:

```javascript
import emailjs from 'emailjs-com';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

return (
  <form onSubmit={sendEmail}>
    {/* Your form fields here */}
    <button type="submit">Send</button>
  </form>
);

## Deployment

Deploy the application on Vercel:

1. Connect your GitHub repository to Vercel.
2. Vercel will automatically deploy the main branch.
3. Ensure your domain is configured correctly in the Vercel dashboard.

### Setting Apex Domain

1. In the Vercel dashboard, add your apex domain (`example.com`).
2. Follow the instructions to update your DNS settings with your domain registrar.
3. Optionally, set up a redirect from the apex domain to the `www` subdomain for better control and performance.

## Monitoring

To monitor the application, consider implementing:

- **Uptime Monitoring**: Services like UptimeRobot or Pingdom.
- **Performance Monitoring**: Tools like Google Lighthouse or New Relic.
- **Error Tracking**: Sentry or LogRocket for tracking frontend errors.
- **Analytics**: Google Analytics or Plausible for tracking user interactions and traffic.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.




