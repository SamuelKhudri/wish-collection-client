import React from 'react';
import emailjs from "emailjs-com";
import './Contact.css';
import contactImg from "../../image/myself.png"
function Contact() {
    function sentEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_3y0heqc",
                "template_vw9ttl9",
                e.target,
                "user_XT7tb5LVQvcitrW6CIS0x"
            )
            .then((res) => {
                console.log(res);
                e.target.reset();
            })
            .catch((err) => console.log(err));
        e.target.value = '';
    }

    const form = document.getElementById('popup')
    function popupShow() {
        if (form?.checkValidity()) {
            alert('Your email sent successfully')
        }
    }

    return (
        <div id='contact' className="contact component__space" >
            <div style={{ paddingTop: '30px' }} className='container'>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="contact__box">
                            <div className="contact__meta">
                                <h1 className="hire__text">Grow Your Business</h1>
                                <p className="hire__text white">we are available anytime to get connect with you. You can Buy products and Sell your products with great deals.</p>
                                <p className="hire__text white"><strong> Import </strong> or <strong>Export your products</strong></p>
                            </div>
                            <div className="input__box">
                                <form id='popup' onSubmit={sentEmail}>
                                    <input name="name" type="text" className="contact name" placeholder="Your name *" />
                                    <input name="email" type="email" className="contact email" placeholder="Your Email *" />
                                    <input name="subject" type="text" className="contact subject" placeholder="Write a Subject" />
                                    <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                                    <button onClick={popupShow} className="btn-submit" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={contactImg} alt="" className=" contact__img img-fluid " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
