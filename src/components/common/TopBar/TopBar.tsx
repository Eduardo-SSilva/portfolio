import { Icons } from "../Icons/Icons";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import { DarkMode } from "../DarkMode/DarkMode";
import { MenuMobile } from "../MenuMobile/MenuMobile";

import "./TopBar.css";

export const TopBar = () => {
  return (
    <>
      <header>
        {/* 100% */}
        <div className="container">
          {/*  80% Centro*/}
          <div className="inside">
            {/* 100% space between */}
            <div className="inside_page_menu">
              <div className="inside_page_logo">
                <Logo />
              </div>

              <div className="inside_page_menu_items">
                <Menu />
              </div>

              <div className="inside_page_link">
                <Icons />
              </div>

              <div className="inside_page_darkMode">
                <DarkMode />
              </div>

              <div className="inside_page_menuMobile">
                <MenuMobile />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
