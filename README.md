# Personal Expense Tracker

This is a personal expense tracker application.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/soundar-19/personal-expense-tracker.git
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
