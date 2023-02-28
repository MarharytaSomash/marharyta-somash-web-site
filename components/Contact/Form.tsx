import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../styles/Contact/Form.module.scss";

export default function Form() {
    const form = useRef();
    const [activeState, setActiveState] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();

        emailjs
            .sendForm("service_p3g77kl", "template_u0a2x5i", form.current, "S6Tlwf5D4YlXlcx7x")
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className={styles.form}
            action="/api/form"
            method="post"
        >
            <span className={styles.topTags}></span>
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="Name" required />

            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="Email" required />

            <label htmlFor="subject"></label>
            <input type="text" id="subject" name="subject" placeholder="Subject" required />

            <label htmlFor="message"></label>
            <textarea type="text" id="message" name="message" placeholder="Message" required />
            <span className={styles.bottomTags}></span>

            <button
                type="submit"
                className={`button ${activeState ? styles.active : ""}`}
                onClick={() => setActiveState((prev) => !prev)}
            >
                {" "}
                Send message!
            </button>
        </form>
    );
}
