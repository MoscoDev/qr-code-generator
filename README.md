# QR Code Generator App

This is a Nest.js application that generates a QR code that links to a page with a list of 10 random movies. The QR code is regenerated every 10 seconds and returns a new link to another set of 10 random movies.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js version 12 or higher
- Nest.js framework
- Typescript
- npm or yarn package manager

### Installing

1. Clone the repository to your local machine:
git clone https://github.com/your-username/qr-code-generator-app.git

Copy code

2. Change into the project directory:
cd qr-code-generator-app

Copy code

3. Install the necessary dependencies:
npm install

Copy code
or 
yarn

Copy code

4. Start the development server:
npm run start:dev

Copy code

5. The application will be running at [http://localhost:3000](http://localhost:3000).

### Product Usage

1. GET request [http://localhost:3000//api/v1/qr](http://localhost:3000/api/v1/qr) in your client.
2. Scan the QR cod(response of thwe the GET API request) with your device's camera app.
3. You will be redirected to a page with a list of 10 random movies.
4. The QR code will be regenerated every 10 seconds and return a new link to another set of 10 random movies.
5. You can see the movies list by following the url link provided by the QR code

## Deployment

This application can be deployed to a hosting platform such as Heroku.

## Built With

- [Nest.js](https://nestjs.com/) - The web framework used
- [React.js](https://reactjs.org/) - The frontend framework used
- [Typescript](https://www.typescriptlang.org/) - Language used
- [qrcode](https://www.npmjs.com/package/qrcode) - QR code generator

## Author

* **Your Name** - [your-username](https://github.com/your-username)

## Acknowledgments

- [Movie JSON](https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4) - The JSON file used for the movie data

Please note that this is a template and you should adjust it for your needs and requirements. And also, you should replace the repository link, your name, and other information that should be personalised.
Please note that this is a template and you should adjust it for your needs and requirements. And also, you should replace the repository link, your name, and other information that should be personalised.
