import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} | Build With Love By Rajdeep Sengupta</p>
    </footer>
  );
}

export default Footer;
