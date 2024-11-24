import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Main from "./components/Main";
import MessageSent from "./components/MessageSent";
function App() {
  const [messageSented, setMessageSented] = useState(false);

  useEffect(() => {
    if (messageSented) {
      const timer = setTimeout(() => {
        setMessageSented(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [messageSented]);

  return (
    <div className={styles.desktop_background}>
      <Main setMessageSented={setMessageSented} />
      {messageSented && <MessageSent />}
    </div>
  );
}

export default App;
