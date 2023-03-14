import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rhvv7k9', 'template_m4njzx6', form.current, 'puKtysafnueEcmqeu')
        
        e.target.reset()
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Instagram</h3>
                            <span className="contact__card-data">i_ambrume</span>

                            <a href="http://instagram.com/iam_brume_?igshid=ZDdkNTZiNTM=" className="contact__button" target={'_blank'}>Write me{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bxl-linkedin contact__card-icon"></i>

                            <h3 className="contact__card-title">linkedin</h3>
                            <span className="contact__card-data">Odakpo-Oweibo Desmond</span>

                            <a href="https://linkedin.com/in/odakpo-oweibo-desmond" className="contact__button" target={'_blank'}>Write me{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bxl-twitter contact__card-icon"></i>

                            <h3 className="contact__card-title">Twitter</h3>
                            <span className="contact__card-data">iam_brume</span>

                            <a href="https://twitter.com/i_ambrume?t=UWKm1K0mZydFsPf4hQr-dQ&s=08" className="contact__button" target={'_blank'}>Write me{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail}
                    className="contact__form">
                        <div className="contact__form-div"> 
                            <label className="contact__form-tag">Name</label>
                            <input 
                            type="text"
                            name="name"
                            className="contact__form-input" 
                            placeholder="Insert your name"
                            />
                        </div>
                        <div className="contact__form-div"> 
                            <label className="contact__form-tag">Name</label>
                            <input 
                            type="email"
                            name="email"
                            className="contact__form-input" 
                            placeholder="Insert your email"
                            />
                        </div>
                        <div className="contact__form-div contact__form-area"> 
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" id="" cols="30" rows="10" className="contact__form-input" placeholder="Write your "></textarea>
                        </div>
                        <button className="button buttonn--flex">
                            Say Hello
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;