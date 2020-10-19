import React from "react";
import './contac-page-style.scss';

const ContactPage = () => {
    return (
        <div className='responsive-container'>
            <section className='contact-container'>
                <h3 className='secondary-header'>Contact Us</h3>
                <div className='group'>
                    <label className='group__name' htmlFor='name'>Name</label>
                    <input className='group__input' type='text' id='name' required={true}/>
                </div>
                <div className='group'>
                    <label className='group__name' htmlFor='email'>Email</label>
                    <input className='group__input' type='email' id='email' required={true}/>
                </div>
                <div className='group'>
                    <label className='group__name' htmlFor='phone'>Phone <span>(Optional)</span></label>
                    <input className='group__input' type='tel' id='phone'/>
                </div>
                <div className='group'>
                    <label className='group__name' htmlFor='message'>Your Message</label>
                    <textarea className='group__message' id='message'/>
                </div>
                <div className='group'>
                    <button className='btn group__submit' type="submit">Submit</button>
                </div>
            </section>
        </div>
    )
}

export default ContactPage;