# College Events App

This is a MERN stack web application for managing college events. It allows users to create, list, edit, delete, and view event details. The application includes user authentication to ensure that only authorized users can manage events.

## Features

- User authentication (login and registration)
- Create new events
- List all events
- Edit existing events
- Delete events
- View event details

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   git clone <repository-url>

2. Navigate to the backend directory and install dependencies:

   cd college-events-app/backend
   npm install

3. Set up the MongoDB database and update the connection string in `src/config/db.js`.

4. Start the backend server:

   npm start

5. Navigate to the frontend directory and install dependencies:

   cd ../frontend
   npm install

6. Start the frontend application:

   npm start

### Usage

- Access the application in your browser at `http://localhost:3000`.
- Use the login page to authenticate users.
- Manage events through the event management page.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.