import React from "react";
import "./navbarB.css";

const Navbar2 = () => {
  return (
    <div>
      <div className="bottom-bar">
        <ul>
          <li>
            <a
              href="https://github.com/sirkayne89"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/serkan_pasam/?igsh=ZDcxaGYzdHF4d2Nu"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-instagram" />
            </a>
          </li>
          {/*
                    <li>
            <a href=""  target="_blank" rel="noreferrer">
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
          */}
        </ul>
        <ul>
          <li>
            <a href="tel:01743759757">
              <ion-icon name="call-outline" />
            </a>
          </li>
          <li>
            <a href="mailto:serkan@oeztuerk.dev">
              <ion-icon name="mail-outline" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
