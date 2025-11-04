import React from "react";
function Footer() {
  return (
<footer className="fixed bottom-0 left-0 w-full flex justify-center">
    <p className="text-xs text-center text-dark-content dark:text-light-content px-2 bg-white dark:bg-dark-card rounded-t-md">
      Adapted by Viktorija Špan from a template by{" "}
      <a
        className="font-medium"
        href="https://github.com/pavanmg007/react-developer-portfolio-template"
        target="_blank"
        rel="noreferrer noopener"
      >
        Pavan MG
      </a>
    </p>
</footer>
  );
}
export default Footer;
