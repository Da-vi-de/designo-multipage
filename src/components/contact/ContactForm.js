import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { StyledContacForm } from "../styles/contact-styles/ContactForm.styled";
import { CommonButtonLink } from "../styles/shared-styles/CommonButtonLink.styled";

const SubmitButton = styled.button`
    ${CommonButtonLink}
`;

const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const PHONE_REGEX = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

function ContactForm() {
    const userRef = useRef();

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [phone, setPhone] = useState('');
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [textMessage, setTextMessage] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(NAME_REGEX.test(name));
    }, [name])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPhone(PHONE_REGEX.test(phone));
    }, [phone])

    const handleSubmit = e => {
        e.preventDefault();
        alert("Thank you for contacting us!");
        console.log(name, email, phone, textMessage);

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
                    <span className="visually-hidden">name:</span>
                </label>
                <input
                    type="text"
                    id="name"
                    ref={userRef}
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
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>

                <label htmlFor="email">
                    <span className="visually-hidden">email:</span>
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
                    Valid e-mail can contain only:<br />
                    latin letters, numbers, '@' and '.'
                </p>

                <label htmlFor="phoneNumber">
                    <span className="visually-hidden">phone</span>
                </label>
                <input
                    type="tel"
                    id="phoneNumber"
                    autoComplete="off"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    aria-describedby="phonenote"
                    placeholder="Phone"
                    onFocus={() => setPhoneFocus(true)}
                    onBlur={() => setPhoneFocus(false)}
                />

                <p id="phonenote" className={phoneFocus && phone && !validPhone ? "instructions" : "offscreen"}>
                    Valid phone number must preceded by:<br />
                    country prefix!
                </p>

                <label htmlFor="message">
                    <span className="visually-hidden">message</span>
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
                    aria-describedby="textnote"
                    placeholder='Your Message'
                >
                </textarea>

                <div>
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
