**Calendar App with FirebaseAuth - Overview**

**Technologies Used:**
- **React**: Frontend library for building user interfaces.
- **React Router**: For navigation within the React app.
- **Firebase**: Backend-as-a-Service (BaaS) platform for authentication and database storage.
- **React Bootstrap**: CSS framework for styling components.
- **React Icons**: Library for using popular icons in React components.
- **React-Phone-Input-2**: Library for handling phone number input.
- **Otp-Input-React**: Library for handling OTP input.
- **Toaster**: Simple toast notification library for providing user feedback.
- **Bootstrap**: CSS framework for additional styling.

**Authentication Flow:**
1. The app starts with a login page where users enter their phone number.
2. Firebase's phone authentication is implemented using the `signInWithPhoneNumber` method.
3. A reCAPTCHA verification is added for security.
4. Upon successful phone number submission, an OTP is sent to the user's phone.
5. Users enter the received OTP to verify their identity.
6. Upon successful verification, users are redirected to the home page.

**Calendar App Functionality:**
- The home page displays upcoming tasks stored in the app's context.
- Tasks are stored in a global context to be accessible across components.
- The create page allows users to input task details, including title, date range, number of participants, and time.
- Upon clicking the "Create" button, the task is added to the context, and users are redirected to the home page.
- The app uses React Router for navigation between pages.
- Basic styling is provided using React Bootstrap and custom CSS.

**Why This Approach:**
1. **Firebase Authentication**: Firebase provides a secure and scalable authentication solution, making it easy to implement phone authentication.
2. **React Context**: Using context allows for state management across components without prop drilling, making it easy to share task data between the create and home pages.
3. **React Router**: Enables navigation within the app, allowing users to move between the login, create, and home pages seamlessly.
4. **Libraries for UI Components**: Libraries like React Icons, Otp-Input-React, and React-Phone-Input-2 simplify the implementation of UI components, saving development time.

**Future Enhancements:**
- Implementing Firebase Firestore for persistent task storage.
- Adding the ability to edit and delete tasks.
- Improving the UI for a more polished user experience.

Building the app in this way ensures a smooth user authentication process and provides a foundation for expanding the app's functionality in the future. The chosen technologies offer a good balance between ease of development, scalability, and a clean user interface.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
