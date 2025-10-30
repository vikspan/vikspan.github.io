import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, linkedin } = contactDetails;
  return (
    <main className="container mx-auto max-width pt-3 pb-20">
      <h1 className="text-center text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        Contact
      </h1>
      <h3 className="text-center text-2xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-center text-content text-xl block">or</span>
      <h3 className="text-center text-2xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={linkedin} target="_blank" rel="noreferrer noopener">my LinkedIn</a>
      </h3>
    </main>
  );
}

export default Contact;
