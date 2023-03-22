import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useEffect, useState } from 'react';

// Sidebar widget
import SidebarWidget from './SidebarWidget';

// Menu mobile
import MenuMobile from './MenuMobile';

function Navbar({ mailHero, phoneHero }) {
  // ========= Add class active for Navbar, function with react routing --- Start =========
  const isActive = ({ isCurrent }) => {
    return isCurrent
      ? { className: 'nav-link isActive' }
      : { className: 'nav-link' };
  };

  const ExactNavLink = (props) => <Link getProps={isActive} {...props} />;
  // ========= Add class active for Navbar, function with react routing --- End =========

  // ========= Show and close sidebar --- Start =========
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // ========= Show and close sidebar --- End =========

  // ========= Fix to top Navbar on scroll--- Start =========
  const [scrollPosition, setScrollPosition] = useState(0);
  const [goingDown, setGoingDown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);

      if (scrollPosition < 250 && goingDown) {
        setGoingDown(false);
      }
      if (scrollPosition > 250 && !goingDown) {
        setGoingDown(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingDown, scrollPosition]);
  // ========= Fix to top Navbar on scroll --- End =========

  return (
    <>
      <NavbarMainStyles>
        <div className={`navbar-main ${goingDown ? `fixed` : ``}`}>
          <div className="container-nav">
            <div className="navbar-content">
              <div className="navbar-main__left">
                <ul className="menu-desktop">
                  <li className="menu-desktop__item">
                    <ExactNavLink to="/">Home</ExactNavLink>
                  </li>
                  <li className="menu-desktop__item">
                    <ExactNavLink to="/about">About me</ExactNavLink>
                  </li>
                  <li className="menu-desktop__item">
                    <ExactNavLink to="/works">Works</ExactNavLink>
                  </li>
                  <li className="menu-desktop__item">
                    <ExactNavLink to="/price">Price</ExactNavLink>
                  </li>
                  <li className="menu-desktop__item">
                    <ExactNavLink to="/contact">Contact</ExactNavLink>
                  </li>
                </ul>

                <MenuMobile
                  mailHero={mailHero}
                  phoneHero={phoneHero}
                ></MenuMobile>
              </div>

              <div className="navbar-main__right">
                <button
                  className="button-info"
                  onClick={handleToggleSidebar}
                  aria-label="Additional information about me"
                >
                  <span className="icon-dots-menu-1"></span>
                  <span className="icon-dots-menu-2"></span>
                  <span className="icon-dots-menu-3"></span>
                </button>
                <Link className="button-order" to="/contact">
                  Make an order
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* navbar-main end */}
      </NavbarMainStyles>

      <SidebarWidget
        mailHero={mailHero}
        phoneHero={phoneHero}
        handleClose={handleToggleSidebar}
        className={showSidebar && 'isActive'}
      ></SidebarWidget>
    </>
  );
}

const NavbarMainStyles = styled.nav`
  .navbar-main {
    background: linear-gradient(180deg, #f6f4f4 50%, #dfdede 50%);
    height: 50px;
  }

  .navbar-main.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    margin-top: 0 !important;
    height: 60px;
    transition: all 0.5s ease;
  }

  .container-nav {
    max-width: 1400px;
    margin: 0 auto;
    height: 100%;
  }

  .navbar-content {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 2px;
    border-radius: 5px 0 0 5px;
    z-index: 2;
  }

  @media (max-width: 992px) {
    .navbar-main__left {
      margin-left: 20px;
    }
    .menu-desktop {
      display: none !important;
    }
  }

  .menu-desktop {
    display: flex;
    align-items: center;
    z-index: 10;
  }

  .menu-desktop .menu-desktop__item {
    border-left: 1px solid #d1d1d1;
    border-right: 1px solid #fcfcfc;
    padding: 0 20px;
  }
  .menu-desktop .menu-desktop__item:first-child {
    border-left: none;
  }
  .menu-desktop .menu-desktop__item:last-child {
    border-right: none;
  }
  .menu-desktop .nav-link {
    font-weight: bold;
    font-family: var(--second-font);
    color: var(--second-color);
    transition: all 0.3s ease;
  }
  .menu-desktop .nav-link:hover {
    color: var(--hover);
  }
  .menu-desktop .nav-link.isActive {
    color: var(--accent);
  }

  .navbar-main__right {
    display: flex;
    height: 100%;
  }

  @media (max-width: 576px) {
    .navbar-main__right {
      display: none !important;
    }
  }

  .navbar-main__right .button-info {
    position: relative;
    display: block;
    background-color: transparent;
  }

  .navbar-main__right .button-info .icon-dots-menu-1 {
    display: block;
    height: 4px;
    width: 35px;
    background-color: var(--second-color);
    border-radius: 2px;
  }
  .navbar-main__right .button-info .icon-dots-menu-2 {
    display: block;
    height: 4px;
    width: 25px;
    background-color: var(--second-color);
    border-radius: 2px;
    margin-top: 6px;
    margin-bottom: 6px;
    transition: all 500ms ease;
  }
  .navbar-main__right .button-info:hover .icon-dots-menu-2 {
    width: 35px;
  }

  .navbar-main__right .button-info .icon-dots-menu-3 {
    display: block;
    height: 4px;
    width: 15px;
    background-color: var(--second-color);
    border-radius: 2px;
    transition: all 500ms ease;
  }
  .navbar-main__right .button-info:hover .icon-dots-menu-3 {
    width: 35px;
  }

  .navbar-main__right {
    position: relative;
    display: flex;
    align-items: center;
  }

  .navbar-main__right .button-order {
    background-color: transparent;
    display: block;
  }

  .navbar-main__right .button-order {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    background-image: linear-gradient(
      0deg,
      rgb(217, 4, 41) 0%,
      rgb(217, 24, 23) 57%,
      rgb(217, 44, 4) 100%
    );
    font-size: 15px;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding-left: 60px;
    padding-right: 30px;
    padding-top: 23px;
    padding-bottom: 23px;
    clip-path: polygon(18% 0, 100% 0%, 115% 100%, 0% 100%);
    transition: all 500ms ease;
  }
  .navbar-main__right .button-order:hover {
    background-color: var(--main);
    background-image: inherit;
  }
`;

export default Navbar;
