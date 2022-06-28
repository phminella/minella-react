import './Contact.scss';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import '../plugins/i18n';
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
const Contact = () => {
  let bgColor = useSelector((state: any) => state.theme.bgColor);
  let darkMode = useSelector((state: any) => state.theme.darkMode);
  // Translation Plugin
  const { t } = useTranslation();
  //
  // Form Handler
  //
  const [errors, setErrors] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactComments, setContactComments] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useRef<null | HTMLFormElement>(null);
  //
  // Submit
  //
  // Focus Input Handler
  const inputErrorHandler = (input: string) => {
    // @ts-ignore
    document.getElementById(input).placeholder =
      t(`${input}Error`);
    // @ts-ignore
    document.getElementById(input).focus();
  }
  //
  const submitFormHandler = (event: any) => {
    event.preventDefault();
    if (!contactName) {
      inputErrorHandler("contactName");
    } else if (!contactCompany) {
      inputErrorHandler("contactCompany");
    } else if (!contactEmail) {
      inputErrorHandler("contactEmail");
    } else if (!contactComments) {
      inputErrorHandler("contactComments");
    } else {
      setFormSubmitted(true);
      let emailjsForm: any = form.current;
      //
      // EmailJS
      //
      emailjs.sendForm(
        "service_2y6kd6p",
        "template_5u6oitw",
        emailjsForm,
        "user_5NXJynGZ33bybD0lZTtE7"
      )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  }
  // Valid Email
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      const isValid = setTimeout(() => {
        validEmail(contactEmail)
      }, 500)
      return () => clearTimeout(isValid)
    }
    else {
      isMounted.current = true;
    }
  }, [contactEmail]);
  // Valid Email Function
  const validEmail = (email: string) => {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      setErrors("");
    }
    else {
      setErrors("Valid email required.");
      // @ts-ignore
      document.getElementById("contactEmail").focus();
    }
  }
  return (
    <section
      id="contact"
      className={`sections contact ${darkMode ? "dark" : ""}`}
      style={{
        background: 'rgb(' + bgColor + ')',
      }}
    >
      <div className="built-with">
        built with <b>CSS Grid</b>
      </div>
      <div className="contact__container">
        <div className="contact__item" id="contact-form">
          <div className="form">
            <div className={`form-sent ${formSubmitted ? "" : "hidden"}`} style={{
              background: 'rgb(' + bgColor + ')',
            }}>
              <div>
                <h2>{t("formThanks1")}</h2>
                <p>{t("formThanks1")}</p>
              </div>
            </div>
            <form ref={form} onSubmit={submitFormHandler}>
              <div>
                <h2>{t("contactForm")}</h2>
              </div>
              <div>
                <input
                  type="text"
                  className="text"
                  id="contactName"
                  name="contactName"
                  value={contactName}
                  onChange={e => setContactName(e.target.value)}
                  autoComplete="off"
                  placeholder={t("formName")}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="contactCompany"
                  name="contactCompany"
                  value={contactCompany}
                  onChange={e => setContactCompany(e.target.value)}
                  autoComplete="off"
                  placeholder={t("formCompany")}
                />
              </div>
              <div>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  autoComplete="off"
                  v-model="contact.email"
                  placeholder={t("formEmail")}
                />
                <p className={errors ? "" : "hidden"}><img src="/img/error.png" alt="" /> {errors}</p>
              </div>
              <div>
                <input
                  type="text"
                  id="contactComments"
                  name="contactComments"
                  value={contactComments}
                  onChange={e => setContactComments(e.target.value)}
                  autoComplete="off"
                  v-model="contact.comments"
                  placeholder={t("formComments")}
                />
              </div>
              <p>{t("requiredFields")}</p>
              <div>
                <button type='submit'>{t("formSend")}</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact__item" id="contact-details">
          <div className="contact-details-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 226 226"
              fill={"#000000"}
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                mix-blend-mode={"normal"}
              >
                <path d="M0,226v-226h226v226z" fill="none"></path>
                <g fill="#ffffff">
                  <path
                    d="M155.375,9.41667h-84.75c-12.995,0 -23.54167,10.54667 -23.54167,23.54167v160.08333c0,12.995 10.54667,23.54167 23.54167,23.54167h84.75c12.995,0 23.54167,-10.54667 23.54167,-23.54167v-160.08333c0,-12.995 -10.54667,-23.54167 -23.54167,-23.54167zM113,198.92708c-5.85717,0 -10.59375,-4.73658 -10.59375,-10.59375c0,-5.85717 4.73658,-10.59375 10.59375,-10.59375c5.85717,0 10.59375,4.73658 10.59375,10.59375c0,5.85717 -4.73658,10.59375 -10.59375,10.59375zM160.08333,169.5h-94.16667v-131.83333h94.16667z"
                  ></path>
                </g>
              </g>
            </svg>
            (070)-2797-1994
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 172 172"
              fill={"#000000"}
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                mix-blend-mode={"normal"}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#ffffff">
                  <path
                    d="M28.66667,28.66667c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v86c0,7.91917 6.41417,14.33333 14.33333,14.33333h114.66667c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-86c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM28.66667,43h114.66667v7.18066l-57.33333,35.81934l-57.33333,-35.81934zM28.66667,64.514l57.33333,35.81934l57.33333,-35.81934v64.486h-114.66667z"
                  ></path>
                </g>
              </g>
            </svg>
            phminella@gmail.com
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;