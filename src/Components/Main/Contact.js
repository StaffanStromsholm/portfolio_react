import React from 'react'

const Contact = () => {
    return (
        <section className="contact-me">
            <form action="">
                <h2>Contact</h2>
                <div class="form-group">
                    <label for="name-first">First name</label>
                    <input type="text" id="name-first" />
                </div>

                <div class="form-group"><label for="name-first">Last name</label>
                    <input type="text" name="name-first" id="name-first" /></div>
                <div class="form-group"><label for="name-first">Your email</label>
                    <input type="text" name="name-last" id="name-last" /></div>
                <div class="form-group"><label for="message">Your message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    <button type="submit">Send</button>
                </div>
            </form>
            <div id="back-to-top" onclick="backToTop()">
                <i class="material-icons">expand_less</i>
            </div>
        </section>
    );
};

export default Contact;
