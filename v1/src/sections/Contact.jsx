import React from 'react';
import styles from '../styles/sections/Contact.module.css';
import Button2 from '../components/Button2';

import { 
PiGithubLogoThin,  
PiLinkedinLogoFill, 
PiSpotifyLogo  
} from "react-icons/pi";

function Contact(){
    return(
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h1 className={styles.title}>Get in touch!</h1>
                <p className={styles.description}>
                    I'd love to hear from you. Even if it is just to say hi! I'm always intrigued
                    to collaborate and innovate on exciting new opportunities, and creative ideas.
                </p>
                <div className={styles.buttonContainer}>
                    <Button2 text="Say Hello!" href="mailto:your-email@example.com" />
                </div>
                <div className={styles.socialsContainer}>
                    <a>
                        <PiLinkedinLogoFill />
                    </a>
                    <a>
                        <PiGithubLogoThin />
                    </a>
                    <a>
                        <PiSpotifyLogo />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;
