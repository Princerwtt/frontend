/*this import statement imports the core React library as the default export and the useState function as a named
 export, allowing us to use React and the useState hook in our code.*/
 import React, { useState } from 'react';


 /*this code defines a functional component SignInModal that uses the useState hook to manage the state of email
 and password.*/
 const SignInModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
 
   /*this code is typically used as an event handler for an email input field. Whenever the user types or changes
   the value in the email input field, the handleEmailChange function is called and it updates the email state
   variable with the new value entered by the user.*/ 
   const handleEmailChange = (e) => {
    setEmail(e.target.value);
};
 
   /*this code is typically used as an event handler for an password input field. Whenever the user types or changes
   the value in the password input field, the handlepasswordChange function is called and it updates the password 
   state variable with the new value entered by the user.*/ 
   const handlePasswordChange = (e) => {
    setPassword(e.target.value);
};
 
 
   /*the handleSubmit function is responsible for intercepting the form submission event and preventing the default
   behavior, giving you the ability to handle the form data in a customized way.*/
   const handleSubmit = (e) => {
 
   /*The first line of the function, e.preventDefault();, prevents the default behavior of form submission.
   It prevents the page from refreshing or navigating to another URL when the form is submitted.*/  
   e.preventDefault();
     
   console.log('Signing in with email:', email, 'and password:', password);
 
   /*These statements are used to reset the values of the email and password
   variables. It's assumed that these variables are controlled by some kind of state management system, 
   like React's useState hook. By setting both variables to an empty string, it clears the input fields,
   ready for the next input.*/ 
   setEmail('');
   setPassword('');
};
 /*this code renders a sign-in modal with input fields for email and password, and a submit button.
 It also includes event handlers to handle changes in the input fields and form submission.*/
 return (
    <div className="modal">
       <h2>Sign In</h2>
       <form onSubmit={handleSubmit}>
       <label htmlFor="email">Email:</label>
       <input
           type="email"
           id="email"
           value={email}
           onChange={handleEmailChange}
         />
         <label htmlFor="password">Password:</label>
         <input
           type="password"
           id="password"
           value={password}
           onChange={handlePasswordChange}
         />
         <button type="submit">Sign In</button>
       </form>
       </div>
   );
 };
 
 export default SignInModal;