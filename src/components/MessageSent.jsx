import styles from "./MessageSent.module.css";

function MessageSent() {
  return (
    <div className={styles.sent_div}>
      <div className={styles.message_sent}>
        <img
          className={styles.accept_icon}
          src="icon-success-check.svg"
          alt=""
        />
        <span className={styles.message_text}>Message Sent!</span>
      </div>
      <p className={styles.thanks_text}>
        Thanks for completing the form. We’ll be in touch soon!
      </p>
    </div>
  );
}

export default MessageSent;
