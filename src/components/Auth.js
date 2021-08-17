import { useDispatch } from "react-redux";
import { authAction } from "../reducer/auth-reducer";
import { useState } from "react";

import styles from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleInputChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData.email, formData.password);
    // ... submit to API or something
    dispatch(authAction.login());
  };
  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleInputChange}
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleInputChange}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
