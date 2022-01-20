import React from 'react';

import Header from './Header';

const Contact = () => {
    const alert = () => {
        window.alert(`You shall not pass!`)
    }
    return(
        <>
            <Header />
            <div className="contact-wrapper">
                <h1>contact me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi, fugit molestiae quas sunt dolorum incidunt obcaecati quidem iste velit consequatur maiores, eius illum quaerat earum quisquam doloribus labore a?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aspernatur praesentium facere, illum voluptas hic ratione harum assumenda odio tenetur amet eos consectetur quidem exercitationem aliquid molestiae corrupti sequi quisquam!</p>
                <form action="">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id='fname' name='firstName' placeholder='Your name...'/>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id='email' name='emailAddress' placeholder='Your email address...'/>
                    <label htmlFor="messageBox">Your message</label>
                    <textarea name="messageArea" id="messageBox" cols="30" rows="10"></textarea>
                </form>
                <button onClick={alert}>submit</button>
            </div>
        </>
    );
}

export default Contact;