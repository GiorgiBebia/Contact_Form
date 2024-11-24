/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./Main.module.css";

function Main({ setMessageSented }) {
  const [firstName, setFirstName] = useState("");
  const [correctFirstName, setCorrectFirstName] = useState(false);
  const [lastName, setLastName] = useState("");
  const [correctLastName, setCorrectLastName] = useState(false);
  const [email, setEmail] = useState("");
  const [correctEmail, setCorrectEmail] = useState(false);
  const [queryType, setQueryType] = useState("");
  const [correctQueryType, setCorrectQueryType] = useState(false);
  const [message, setMessage] = useState("");
  const [correctMessage, setCorrectMessage] = useState(false);
  const [termsClick, setTermsClick] = useState(false);
  const [checkTermsClick, setCheckTermsClick] = useState(true);

  function handleSubmit() {
    const isFirstNameValid = firstName.length > 0;
    const isLastNameValid = lastName.length > 0;
    const isEmailValid =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isQueryTypeValid = queryType.length > 0;
    const isMessageValid = message.length > 0;
    const areTermsAccepted = termsClick;

    setCorrectFirstName(!isFirstNameValid);
    setCorrectLastName(!isLastNameValid);
    setCorrectEmail(!isEmailValid);
    setCorrectQueryType(!isQueryTypeValid);
    setCorrectMessage(!isMessageValid);
    setCheckTermsClick(areTermsAccepted);

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isQueryTypeValid &&
      isMessageValid &&
      areTermsAccepted
    ) {
      setMessageSented(true);

      setFirstName("");
      setLastName("");
      setEmail("");
      setQueryType("");
      setMessage("");
      setTermsClick(false);
    }
  }

  return (
    <div
      className={
        correctFirstName |
        correctLastName |
        correctEmail |
        correctQueryType |
        correctMessage |
        !checkTermsClick
          ? style.div_size_error
          : style.div_size
      }
    >
      <h2 className={style.contact_us_text}>Contact Us</h2>

      <div className={style.first_last_div}>
        <div
          className={correctFirstName ? style.first_div_error : style.first_div}
        >
          <span>
            <label className={style.first_name_text} htmlFor="firstName">
              First Name
            </label>{" "}
            <span className={style.star}>*</span>
          </span>
          <input
            className={
              correctFirstName
                ? style.first_name_input_red
                : style.first_name_input
            }
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <span
            className={correctFirstName ? style.not_correct : style.correct}
          >
            This field is required
          </span>
        </div>
        <div
          className={correctLastName ? style.last_div_error : style.last_div}
        >
          <span>
            <label className={style.last_name_text} htmlFor="lastName">
              Last Name
            </label>{" "}
            <span className={style.star}>*</span>
          </span>
          <input
            className={
              correctLastName
                ? style.last_name_input_red
                : style.last_name_input
            }
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <span className={correctLastName ? style.not_correct : style.correct}>
            This field is required
          </span>
        </div>
      </div>

      <div className={correctEmail ? style.email_div_error : style.email_div}>
        <span>
          <label className={style.email_text} htmlFor="email">
            Email Address
          </label>{" "}
          <span className={style.star}>*</span>
        </span>
        <input
          className={correctEmail ? style.email_input_red : style.email_input}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <span className={correctEmail ? style.not_correct : style.correct}>
          Please enter a valid email address
        </span>
      </div>

      <div
        className={
          correctQueryType ? style.query_type_div_error : style.query_type_div
        }
      >
        <span>
          <label className={style.email_text} htmlFor="queryType">
            Query Type
          </label>{" "}
          <span className={style.star}>*</span>
        </span>
        <div className={style.radio_div}>
          <div
            className={`${style.general_enquiry} ${
              queryType === "General Enquiry" ? style.selected_radio : ""
            }`}
            onClick={() => setQueryType("General Enquiry")}
          >
            <input
              type="radio"
              name="queryType"
              value="General Enquiry"
              checked={queryType === "General Enquiry"}
              onChange={(e) => setQueryType(e.target.value)}
            />
            <label
              className={style.general_enquiry_text}
              htmlFor="generalEnquiry"
            >
              General Enquiry
            </label>
          </div>
          <div
            className={`${style.support_request} ${
              queryType === "Support Request" ? style.selected_radio : ""
            }`}
            onClick={() => setQueryType("Support Request")}
          >
            <input
              type="radio"
              name="queryType"
              value="Support Request"
              checked={queryType === "Support Request"}
              onChange={(e) => setQueryType(e.target.value)}
            />
            <label
              className={style.support_request_text}
              htmlFor="supportRequest"
            >
              Support Request
            </label>
          </div>
        </div>
        <span className={correctQueryType ? style.not_correct : style.correct}>
          Please select a query type
        </span>
      </div>

      <div
        className={correctMessage ? style.message_div_error : style.message_div}
      >
        <span>
          <label className={style.message_text} htmlFor="message">
            Message
          </label>{" "}
          <span className={style.star}>*</span>
        </span>
        <textarea
          className={style.message_textarea}
          type="textarea"
          rows="4"
          cols="50"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <span className={correctMessage ? style.not_correct : style.correct}>
          This field is required
        </span>
      </div>

      <div
        className={
          correctMessage && checkTermsClick ? style.terms_error : style.terms
        }
      >
        <div className={style.check_terms}>
          <input
            className={style.checkbox}
            type="checkbox"
            checked={termsClick}
            onChange={(e) => setTermsClick(e.target.checked)}
          />
          <span>
            <label className={style.terms_text} htmlFor="terms">
              I consent to being contacted by the team
            </label>{" "}
            <span className={style.star}>*</span>
          </span>
        </div>
        <span className={!checkTermsClick ? style.not_correct : style.correct}>
          To submit this form, please consent to being contacted
        </span>
      </div>

      <button className={style.button} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Main;
