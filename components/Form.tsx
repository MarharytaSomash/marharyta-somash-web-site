import styles from '../styles/Form.module.scss'

export default function Form() {
       return (
    <form className={styles.form} action="/api/form" method="post">
      <label htmlFor="name"></label>
      <input type="text" id="name" name="name"  placeholder="Name" required />

      <label htmlFor="email"></label>
      <input type="email" id="email" name="email" placeholder="Email" required />
      
      <label htmlFor="subject"></label>
      <input type="text" id="subject" name="subject" placeholder="Subject" required />
      
      <label htmlFor="message"></label>
      <input type="text" id="message" name="message" placeholder="Message" required />
      
      <button type="submit">Send message!</button>
    </form>
  )
}