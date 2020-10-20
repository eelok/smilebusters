import React from "react";
import './contac-page-style.scss';
import {db} from '../../firebase';

const ContactPage = () => {

//почему тут нужно  const
   const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let data = Object.fromEntries(formData);
        db.collection('contacts').add(data)
            .then(() => {
                alert('you Message has bin submitted ')
            })
            .catch(error => {
                alert(error.message)
            });
    }

    return (
        <div className='responsive-container'>
            <section className='contact-container'>
                <h3 className='secondary-header'>Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <div className='group'>
                        <label className='group__name' htmlFor='name'>Name</label>
                        <input className='group__input'
                               type='text'
                               id='name'
                               name='name'
                               required={true}
                        />
                    </div>
                    <div className='group'>
                        <label className='group__name' htmlFor='email'>Email</label>
                        <input className='group__input'
                               type='email'
                               id='email'
                               name='email'
                               required={true}/>
                    </div>
                    <div className='group'>
                        <label className='group__name' htmlFor='phone'>Phone <span>(Optional)</span></label>
                        <input className='group__input'
                               type='tel'
                               name='phone'
                               id='phone'
                        />
                    </div>
                    <div className='group'>
                        <label className='group__name' htmlFor='message'>Your Message</label>
                        <textarea className='group__message'
                                  id='message'
                                  name='message'
                        />
                    </div>
                    <div className='group'>
                        <button className='btn group__submit' type="submit" name='submit'>Submit</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ContactPage;