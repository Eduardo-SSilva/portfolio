import { Contact } from "./Contact/Contact";
import { Linkedin } from "./Linkedin/Linkedin";
import { GitHub } from "./GitHub/GitHub";

import "./Icons.css";
import { DarkMode } from "../DrakMode/DarkMode";

export const Icons = () => {
  return (
    <>
      <div className="icons">
        <div className="icons_itens">
          <Contact />
        </div>
        <div className="icons_itens">
          <a
            href="https://www.linkedin.com/in/eduardo-santos-da-silva-7922b459"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
        <div className="icons_itens">
          <a href="https://github.com/Eduardo-SSilva" target="_blank">
            <GitHub />
          </a>
        </div>
      </div>
    </>
  );
};
