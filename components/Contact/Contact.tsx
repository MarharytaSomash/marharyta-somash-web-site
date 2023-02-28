import { FC } from "react";
import AnimationTitle from "../shared/animationTitle";
import styles from "../../styles/Contact/Contact.module.scss";
import Form from "./Form";
import Map from "./Map";

const Contact: FC = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.contact_details}>
                <span className={styles.topTags}></span>
                <AnimationTitle title="Contact me" />
                <p> I am open to opportunity. </p>
                <p> If you have question, don't hesitate to use the form.</p>
                <Form />
                <span className={styles.bottomTags}></span>
            </div>

            <Map />
        </div>
    );
};

export default Contact;
