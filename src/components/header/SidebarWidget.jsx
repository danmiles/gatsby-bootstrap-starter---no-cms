import React from 'react';
import styled from 'styled-components';

// sidebar__Icons
import { FiMail } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FiClock } from 'react-icons/fi';

// Images import
import logo from '../../images/navbar/logo.svg';
import cursorClose from '../../images/navbar/sidebar-widget/cross-out.png';

function SidebarWidget({ className = '', handleClose, phoneHero, mailHero }) {
  return (
    // Start sidebar widget content
    <SidebarStyles>
      <div className={`sidebar-group info-group info-sidebar ${className}`}>
        <div
          onClick={handleClose}
          onKeyDown={handleClose}
          className="overlay bg-black"
        ></div>

        <div className="sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <button
                onClick={handleClose}
                className="close-side-widget"
                aria-label="Close additional information about me"
              >
                X
              </button>
            </div>
            <div className="sidebar-textwidget">
              <div className="content-inner">
                <div className="title">
                  <img
                    className="logo-img"
                    src={logo}
                    alt="Logo"
                  />
                  <h2 className="site-title">Title H2</h2>
                </div>
                <div className="content-box">
                  <h3>Title H3</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime nobis quae, doloremque adipisci nam libero sapiente
                    officiis aliquid excepturi, illo eum ipsum vitae nesciunt
                    cupiditate optio corrupti minima rem tenetur.
                  </p>
                </div>

                <div className="sidebar__contact-info">
                  <h3>Contact</h3>
                  <ul className="sidebar__list">
                    <li className="sidebar__item">
                      <div className="sidebar__icon">
                        <FiMail />
                      </div>
                      <a className="sidebar__link" href={`mailto:${mailHero}`}>
                        {mailHero}
                      </a>
                    </li>
                    <li className="sidebar__item">
                      <div className="sidebar__icon">
                        <FiPhone />
                      </div>
                      <a className="sidebar__link" href={`tel:${phoneHero}`}>
                        {phoneHero}
                      </a>
                    </li>
                    <li className="sidebar__item">
                      <div className="sidebar__icon">
                        <FiClock />
                      </div>
                      <p>Opening hours: from 9:00 to 18:00</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar widget end */}
      </div>
    </SidebarStyles>
    // End sidebar widget content
  );
}

const SidebarStyles = styled.div`
  .sidebar-group .overlay {
    position: fixed;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 200ms linear;
    transition-delay: 0.1s;
    z-index: 99999999;
  }

  .sidebar-group.isActive .overlay {
    opacity: 0.6;
    visibility: visible;
    transition-delay: 300ms;
    right: 100%;
    background-color: #000000;
    cursor: url(${cursorClose}), pointer;
  }

  .sidebar-widget {
    position: fixed;
    top: 0;
    right: -100%;
    bottom: 0;
    max-width: 460px;
    width: 100%;
    background-color: #ffffff;
    overflow: hidden;
    overflow-y: auto;
    transition: all 700ms ease 100ms;
    visibility: hidden;
    opacity: 1;
    z-index: 999999999;
  }

  .sidebar-group.isActive .sidebar-widget {
    opacity: 1;
    visibility: visible;
    right: 0;
    transition: all 500ms ease 800ms;
  }

  .sidebar-widget-container {
    position: relative;
    top: 150px;
    opacity: 0;
    visibility: hidden;
    backface-visibility: hidden;
    transition: all 400ms ease 100ms;
  }

  .sidebar-group.isActive .sidebar-widget-container {
    top: 0px;
    opacity: 1;
    visibility: visible;
    backface-visibility: hidden;
    transition: all 700ms ease 1500ms;
  }

  .sidebar-textwidget {
    padding: 50px 45px;
  }

  .sidebar-group .widget-heading {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
  }

  .sidebar-group .widget-heading .close-side-widget {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid var(--second-color);
    border-radius: 50%;
    color: var(--second-color);
    font-size: 20px;
    font-weight: 400;
    transition: all 200ms linear;
    transition-delay: 0.1s;
    cursor: pointer;
  }

  .widget-heading .close-side-widget:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  .content-inner .title {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 30px;
  }

  .content-inner .title .logo-img {
    max-width: 60px;
  }

  .content-inner .title .site-title {
    font-family: var(--second-font);
    font-size: 35px;
    font-weight: 900;
    color: var(--second-color);
  }
  .content-inner .title .site-title::first-letter {
    color: var(--accent);
  }

  .sidebar-group .content-inner h3 {
    color: var(--second-color);
    font-size: 25px;
    line-height: 35px;
    font-weight: 700;
    margin-bottom: 22px;
  }

  .content-box {
    position: relative;
    display: block;
    padding-top: 33px;
    padding-bottom: 47px;
  }

  .content-box h3 {
    font-family: var(--second-font);
  }

  .sidebar__contact-info {
    position: relative;
    display: block;
  }

  .sidebar__contact-info h3 {
    font-family: var(--second-font);
    color: var(--second-color);
    font-size: 25px;
    line-height: 30px;
    font-weight: 700;
    margin: 0 0 27px;
  }

  .sidebar__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  @media (max-width: 992px) {
    .sidebar__list {
      gap: 15px;
    }
  }

  .sidebar__item {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .sidebar__icon {
    font-size: 32px;
    height: 32px;
    color: var(--accent);
    line-height: 1;
    font-weight: bold;
  }

  .sidebar__link {
    color: var(--text);
    font-weight: 500;
    transition: all 0.3s ease;
  }
  .sidebar__link:hover {
    color: var(--hover);
  }

  .sidebar__item .text {
    color: var(--text);
  }

  .sidebar__icon svg {
    stroke-width: 1.5;
  }
`;

export default SidebarWidget;
