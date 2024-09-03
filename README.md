# Anti-Doping

This is a React application that includes various features such as authentication, a dashboard, quizzes, and more. It uses React Router for routing and Google OAuth for authentication.

## Features

- **React Router:** Manages routing within the application.
- **Google OAuth:** Provides authentication via Google.
- **Responsive Design:** Utilizes Tailwind CSS for styling (along with regular CSS).
- **Lazy Loading:** Implemented with `React.Suspense` to handle component loading.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file:**

    You need to set up your environment variables. Create a `.env` file in the root directory and add the following line:

    ```env
    REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

    Your application will be available at `http://localhost:3000`.

## Project Structure

- **`src/`**: Contains the main application source code.
  - **`components/`**: Reusable React components.
    - **`EntryPoint/`**: Components related to the entry point of the application.
    - **`auth/`**: Components for authentication (Login, SignUp).
    - **`Dashboard/`**: Dashboard-related components.
    - **`NewsSection/`**: News section components.
    - **`QuizSection/`**: Quiz section components.
    - **`Medical.js`**: Medical-related components.
    - **`Menu/`**: Menu components.
    - **`Language/`**: Language selection components.
    - **`Rule.js`**: Rule-related components.
  - **`App.js`**: The main app component with routing and authentication context.
  - **`index.css`**: Global styles.
  - **`index.js`**: Entry point for the React application, includes routing setup.
  - **`i18n.js`**: Internationalization configuration.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the project's style and passes all tests.


## Contact

For any questions or issues, please contact [Your Name](mailto:kaushallokahnde3@gmail.com).
