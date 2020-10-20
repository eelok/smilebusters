import React from "react";
import './thank-you-page-style.scss';
import {ReactComponent as ThankYou} from "../../assets/thank-you.svg";

const MessagePage = () => {
    return (
        <section className='responsive-container'>
            <section className='thank-you'>
                <ThankYou className='thank-you__icon'/>
                <h2 className="thank-you__header">for getting in touch!</h2>
                <p className='thank-you__text'>
                    We appreciate you contacting us.<br/>
                    We will get back in touch with you soon! <br/>
                    Have a great day!
                </p>
            </section>
        </section>)
}
export default MessagePage;