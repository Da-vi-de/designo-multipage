import { useState, useEffect } from "react";
import styled from "styled-components";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NAME_REGEX, EMAIL_REGEX, PHONE_REGEX } from "../../utils/regex";
import { StyledContacForm } from "../styles/contact-styles/ContactForm.styled";
import { CommonButtonLink } from "../styles/shared-styles/CommonButtonLink.styled";

const SubmitButton = styled.button`
 ${CommonButtonLink}
    position: relative;
    top: 1.5rem;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin-top: .5rem;
    &:focus-visible {
            outline: 2px solid var(--color-black);
    }
`;

function ContactForm() {

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [phone, setPhone] = useState('');
    const [validPhone, setValidPhone] = useState(false);

    const [textMessage, setTextMessage] = useState('');

    useEffect(() => {
        setValidName(NAME_REGEX.test(name));
    }, [name])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPhone(PHONE_REGEX.test(phone));
    }, [phone])

    function clearFields(e) {
        Array.from(e.target).forEach((e) => (e.value = ''));
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert("Thank you for contacting us!");
        console.log(name, email, phone, textMessage);

        clearFields(e);

        setName('');
        setEmail('');
        setPhone('');
        setTextMessage('');
      };

    return(
        <StyledContacForm>
            <div className="content">
            <h1>contact us</h1>
            <p>
                Ready to take it to the next level?
                Let's talk about your project or idea
                and find out how we can help your business grow.
                If you are looking for unique digital experiences
                that's relatable tou your users, drop us a line.
            </p>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                  <span>Name:</span>
                    <FontAwesomeIcon icon={faCheck} className={validName && name ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
                </label>
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="namenote"
                    placeholder="Name"
                    onFocus={() => setNameFocus(true)}
                    onBlur={() => setNameFocus(false)}
                />

                <p id="namenote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>

                <label htmlFor="email">
                    <span>Email:</span>
                    <FontAwesomeIcon icon={faCheck} className={validEmail && email ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                </label>
                <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="emailnote"
                    placeholder="Email Address"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                />

                <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                    Valid e-mail can contain only:<br />
                    latin letters, numbers, '@' and '.'
                </p>

                <label htmlFor="phoneNumber">
                    <span>Phone:</span>
                    <FontAwesomeIcon icon={faCheck} className={validPhone && phone ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validPhone || !phone ? "hide" : "invalid"} />
                </label>
                <input
                    type="tel"
                    id="phoneNumber"
                    autoComplete="off"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="Phone"
                />

                <label htmlFor="message">
                    <span>Message</span>
                </label>
                <textarea
                    name="message"
                    id="message"
                    minLength={10}
                    maxLength={300}
                    onChange={(e) => setTextMessage(e.target.value.trim() !== '')}
                    rows="5"
                    resize="none"
                    autoComplete="off"
                    required
                    placeholder='Your Message'
                >
                </textarea>

                <div className="submit-btn">
                    <SubmitButton
                        disabled={!validName || !validEmail || !validPhone || !textMessage ? true : false}
                    >
                        submit
                    </SubmitButton>
                </div>
            </form>
        </StyledContacForm>
    )
}
export default ContactForm;