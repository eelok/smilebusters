import React from "react";
import './contac-page-style.scss';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }


    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            [event.target.name] : value
        });
    }

    render() {
        let {name, email, phone, message} = this.state;
        return (
            <div className='responsive-container'>
                <section className='contact-container'>
                    <h3 className='secondary-header'>Contact Us</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className='group'>
                            <label className='group__name' htmlFor='name'>Name</label>
                            <input className='group__input'
                                   type='text'
                                   id='name'
                                   name='name'
                                   value={name}
                                   onChange={this.handleChange}
                                   required={true}
                            />
                        </div>
                        <div className='group'>
                            <label className='group__name' htmlFor='email'>Email</label>
                            <input className='group__input'
                                   type='email'
                                   id='email'
                                   name='email'
                                   value={email}
                                   onChange={this.handleChange}
                                   required={true}/>
                        </div>
                        <div className='group'>
                            <label className='group__name' htmlFor='phone'>Phone <span>(Optional)</span></label>
                            <input className='group__input'
                                   type='tel'
                                   name='phone'
                                   value={phone}
                                   onChange={this.handleChange}
                                   id='phone'
                            />
                        </div>
                        <div className='group'>
                            <label className='group__name' htmlFor='message'>Your Message</label>
                            <textarea className='group__message' id='message' name='message' value={message}/>
                        </div>
                        <div className='group'>
                            <button className='btn group__submit' type="submit" name='submit'>Submit</button>
                        </div>
                    </form>
                </section>
            </div>
        )
    }


}

export default ContactPage;