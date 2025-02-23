# Personal Expense Tracker

This is a personal expense tracker application with a React frontend and Node.js/Express backend.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/soundar-19/personal-expense-tracker.git
    cd personal-expense-tracker
    ```

2. Set up environment variables:
    - Create a `.env` file in the root directory
    - Add the following variables:
    ```
    MONGODB_URI=mongodb://localhost:27017/expense-tracker
    PORT=5000
    CLIENT_URL=http://localhost:3000
    ```

3. Install backend dependencies:
    ```bash
    npm install
    ```

4. Install frontend dependencies:
    ```bash
    cd client
    npm install
    cd ..
    ```

5. Start the backend server:
    ```bash
    npm run server
    ```

6. Start the frontend development server (in a new terminal):
    ```bash
    cd client
    npm start
    ```

7. Access the application:
    - Frontend: http://localhost:3000
    - Backend API: http://localhost:5000
    cd personal-expense-tracker
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```properties
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/expense-tracker
    JWT_SECRET=your_jwt_secret_here
    ```

4. Start the application:
    ```bash
    npm start
    ```

## Usage

- Access the application at `http://localhost:5000`.

## Contributing

Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.
