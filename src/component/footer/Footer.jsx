import React from "react";
import "./footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Oweibo</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    
                </ul>

                <div className="footer__social">
                    <a href="http://instagram.com/iam_brume_?igshid=ZDdkNTZiNTM=" className="footer__social-icon" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://linkedin.com/in/odakpo-oweibo-desmond" className="footer__social-icon" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                </a>
                <a href="https://twitter.com/i_ambrume?t=UWKm1K0mZydFsPf4hQr-dQ&s=08" className="footer__social-icon" target="_blank">
                    <i class="bx bxl-twitter"></i>
                </a>
                <a href="https://github.com/Brume001" className="footer__social-icon" target="_blank">
                    <i class="bx bxl-github"></i>
                </a>
                </div>

                <span className="footer__copy">
                    &#169; Oweibo Desmond. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer;