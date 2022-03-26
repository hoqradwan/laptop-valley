import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div className='answers-container'>
            <div className='answer-container'>
            <h1>How does react work?</h1>
            <p>
                React is a JavaScript library. It is used to create user interfaces in an efficient way. React uses declarative code to create components. Every component accepts a props as an input data and returns a react element which determines what will be displayed in the website. Props are used to interact with multiple components to create a complex user interface. React has a virtual DOM. It is a representation or snapshot of the UI. When something is changed in real DOM, react replaces only the changed part with the previous thing in virtual DOM and update the UI. This process is managed by state. This is how react works.
            </p>
            </div>
           <div className='answer-container'>
           <h1>How useState() works?</h1>
            <p>
              useState() is a react hook. It works for changing something in the UI. It allows us to have state variables in functional components. An initial value is passed in useState() function. It returns the current state as a value and setState() function that updates the state. Event handlers are managed in react by the state hook. With a view to change data in the in the UI, the state hook is inevitable. This is how useState() works.
            </p>
           </div>
            
        </div>
    );
};

export default Answer;