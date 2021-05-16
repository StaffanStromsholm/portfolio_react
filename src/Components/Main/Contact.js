import React, { useState } from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [hasContacted, setHasContacted] = useState(false);

    const herokuURL = 'https://staffan-portfolio-backend.herokuapp.com/sendemail';

    const onChangeHandlerName = (e) => {
        setName(e.target.value)
    }
    const onChangeHandlerCompany = (e) => {
        setCompany(e.target.value)
    }
    const onChangeHandlerEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangeHandlerMessage = (e) => {
        setMessage(e.target.value)
    }

    const resetInputs = () => {
        document.querySelector('input#name').value = '';
        document.querySelector('input#company').value = '';
        document.querySelector('input#email').value = '';
        document.querySelector('textarea#message').value = '';
    }

    const validate = () => {
        if(document.querySelector('input#name').value.length === 0 ||
        document.querySelector('input#company').value.length === 0 ||
        document.querySelector('input#email').value.length === 0 ||
        document.querySelector('textarea#message').value.length === 0 ){
            return false;
        } else {
            return true;
        }
    }

    const submitHandler = (e) => {
        if(!validate()){
            return;
        }
        e.preventDefault();

        axios.post(herokuURL,
            {
                name,
                company,
                email,
                message
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            })
            .then(result => {
                console.log(result)
            })
        resetInputs();
        setHasContacted(true);

    }

    if (!hasContacted) {
        return (
            <section id="contact-me">
                <h2 id="contact-title">Contact</h2>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input required onChange={onChangeHandlerName} id="name" name="name"></input>
                    <label htmlFor="email">Email</label>
                    <input required onChange={onChangeHandlerEmail} id="email" name="email"></input>
                    <label htmlFor="company">Company</label>
                    <input required onChange={onChangeHandlerCompany} id="company" name="company"></input>
                    <label htmlFor="message">Message</label>
                    <textarea required onChange={onChangeHandlerMessage} id="message" rows="10" name="message"></textarea>
                    <button onClick={submitHandler} type="submit">Submit</button>
                </form>
            </section>
        );
    } else {
        return (
            <section id="contact-me">
                <h2 id="contact-title">Thanks! I'll get back to you.</h2>
            </section>
        )
    }


};

export default withRouter(Contact);