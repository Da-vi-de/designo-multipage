import React from "react";
import styled from "styled-components";

import { StyledContacForm } from "../styles/contact-styles/ContactForm.styled";
import { CommonButtonLink } from "../styles/shared-styles/CommonButtonLink.styled";

const SubmitButton = styled.button`
    ${CommonButtonLink}
`;

function ContactForm() {
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

            <form>
                <label htmlFor="name">
                    <span className="visually-hidden">name:</span>
                </label>
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    required
                    aria-describedby="nameid"
                    placeholder="Name"
                />

                <label htmlFor="email">
                    <span className="visually-hidden">email:</span>
                </label>
                <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    required
                    aria-describedby="emailid"
                    placeholder="Email Address"
                />

                <label htmlFor="phoneNumber">
                    <span className="visually-hidden">phone</span>
                </label>
                <input
                    type="number"
                    id="phoneNumber"
                    autoComplete="off"
                    required
                    aria-describedby="phoneid"
                    placeholder="Phone"
                />

                <textarea
                    name="message"
                    id="message"
                    rows="5"
                    resize="none"
                    autoComplete="off"
                    required
                    aria-describedby="textid"
                    placeholder='Your Message'
                >
                </textarea>

                <div>
                    <SubmitButton>submit</SubmitButton>
                </div>
            </form>
        </StyledContacForm>
    )
}
export default ContactForm;

