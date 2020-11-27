import React from "react";
import './contac-page-style.scss';
import {useHistory} from 'react-router-dom';
import {db} from '../../firebase';

const ContactPage = () => {

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let data = Object.fromEntries(formData);
        db.collection('contacts').add(data)
            .then(() => {
                history.push('/message')
            })
            .catch(error => {
                alert(error.message)
            });
    }

    return (
        <div className='responsive-container'>
            <section className='contact-container'>
                <form onSubmit={handleSubmit} className="group-control">
                    <h3 className='contact-header'>Свяжитесь с нами</h3>
                    <div className='group'>
                        <label className='group__name' htmlFor='name'>Имя</label>
                        <input className='group__input'
                               type='text'
                               id='name'
                               name='name'
                               required={true}
                        />
                    </div>
                    <div className='group'>
                        <label className='group__name' htmlFor='email'>Ел. почта</label>
                        <input className='group__input'
                               type='email'
                               id='email'
                               name='email'
                               required={true}/>
                    </div>
                    <div className='group'>
                        <label className='group__name' htmlFor='phone'>Телефон <span>(Не обязательное поле)</span></label>
                        <input className='group__input'
                               type='tel'
                               name='phone'
                               id='phone'
                        />
                    </div>
                    <div className='group'>
                        <label className='group__name' htmlFor='message'>Ваше Сообщение</label>
                        <textarea className='group__message'
                                  id='message'
                                  name='message'
                        />
                    </div>
                    <div className='group'>
                        <button className='btn bnt-contact group__submit' type="submit" name='submit'>Отправить</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ContactPage;