import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-3 pb-20 ">
      <section>
        <h1 className="text-center text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content text-center pt-8 mx-auto lg:max-w-3xl">
          {personalDetails.about}
        </p>
        <p className="text-content text-center pt-2 pb-8 mx-auto lg:max-w-3xl">
          <a
            href="/assets/viktorija-span-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-offset-10 hover:no-underline transition"
            style={{textUnderlineOffset: '4px'}}
          >
            Download CV
          </a>
        </p>
      </section>
      <section className="hidden">
        <h1 className="text-center text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration, Link }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-center text-2xl pt-3 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration, Link }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
              link={Link}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
