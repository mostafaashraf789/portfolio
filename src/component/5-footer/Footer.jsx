import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Project">project</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      
      </ul>
      <p>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
}
