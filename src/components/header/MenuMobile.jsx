import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Images import
import logo from '../../images/navbar/logo.svg';

// Icons
import { FiMenu } from 'react-icons/fi';
import { FiXSquare } from 'react-icons/fi';
import { AiTwotoneMail } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';

function MenuMobile({ mailHero, phoneHero }) {
    // ========= Add class active for Menu mobile, function with react routing --- Start =========
    const isActive = ({ isCurrent }) => {
        return isCurrent
            ? { className: 'menu__link isActive' }
            : { className: 'menu__link' };
    };

    const ExactMobileNavLink = (props) => (
        <Link getProps={isActive} {...props} />
    );
    // ========= Add class active for Menu mobile, function with react routing --- End =========

    // Show Mobile menu

    const [showHideMenu, setShowHideMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowHideMenu(!showHideMenu);
    };

    return (
        <MenuMobileStyles>
            <div className="menu-mobile">
                <button
                    onClick={handleToggleMenu}
                    className="menu-mobile__toggle"
                    aria-label="Меню навигации"
                >
                    <FiMenu />
                </button>

                <div
                    className={`menu-mobile__wrapper ${
                        showHideMenu ? 'expanded' : ''
                    }`}
                >
                    <div onClick={handleToggleMenu} onKeyDown={handleToggleMenu} className="overlay"></div>

                    <div className="menu-mobile__content">
                        <div className="content__title">
                            <button
                                onClick={handleToggleMenu}
                                className="close-btn"
                            >
                                <FiXSquare />
                            </button>
                            <img className="logo-img" src={logo} alt="" />
                        </div>

                        <ul className="content-menu">
                            <li className="content-menu__item">
                                <ExactMobileNavLink to="/">
                                    Home
                                </ExactMobileNavLink>
                            </li>
                            <li className="content-menu__item">
                                <ExactMobileNavLink to="/about">
                                    About me
                                </ExactMobileNavLink>
                            </li>
                            <li className="content-menu__item">
                                <ExactMobileNavLink to="/works">
                                    Works
                                </ExactMobileNavLink>
                            </li>
                            <li className="content-menu__item">
                                <ExactMobileNavLink to="/price">
                                    Price
                                </ExactMobileNavLink>
                            </li>
                            <li className="content-menu__item">
                                <ExactMobileNavLink to="/contact">
                                    Contact
                                </ExactMobileNavLink>
                            </li>
                        </ul>

                        <div className="contact-info__menu">
                            <div className="info-item">
                                <div className="icon">
                                    <AiTwotoneMail />
                                </div>

                                <a className="text" href={`mailto:${mailHero}`}>
                                    {mailHero}
                                </a>
                            </div>
                            <div className="info-item">
                                <div className="icon">
                                    <AiFillPhone />
                                </div>

                                <a className="text" href={`tel:${phoneHero}`}>
                                    {phoneHero}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MenuMobileStyles>
    );
}

const MenuMobileStyles = styled.div`
    .menu-mobile__toggle {
        display: none;
        background-color: transparent;
        font-size: 35px;
        height: 35px;
        color: var(--second-color);
    }
    @media (max-width: 992px) {
        .menu-mobile__toggle {
            display: block !important;
        }
    }

    .menu-mobile__wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        transform: translateX(-100%);
        transition: transform 500ms ease 500ms, visibility 500ms ease 500ms;
        visibility: hidden;
    }

    .menu-mobile__wrapper.expanded {
        opacity: 1;
        transform: translateX(0%);
        visibility: visible;
        transition: transform 500ms ease 0ms, visibility 500ms ease 0ms;
    }

    .menu-mobile__wrapper .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000000;
        opacity: 0.5;
    }

    .menu-mobile__content {
        width: 300px;
        background-color: var(--second-color);
        z-index: 10;
        position: relative;
        height: 100%;
        transform: translateX(-100%);
        overflow-y: auto;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 15px;
        padding-right: 15px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 500ms ease 0ms, visibility 500ms ease 0ms,
            transform 500ms ease 0ms;
    }

    .menu-mobile__wrapper.expanded .menu-mobile__content {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
        transition: opacity 500ms ease 500ms, visibility 500ms ease 500ms,
            transform 500ms ease 500ms;
    }

    .content__title {
        display: flex;
        justify-content: center;
        margin: 30px 0;
    }

    .content__title .close-btn {
        position: absolute;
        background-color: transparent;
        top: 20px;
        right: 15px;
        font-size: 25px;
        color: var(--white);
        cursor: pointer;
    }

    .content__title .logo-img {
        max-width: 75px;
    }

    .content-menu {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }

    .content-menu .content-menu__item {
        padding: 10px 0;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .content-menu .content-menu__item .menu__link {
        color: var(--white);
        font-size: 18px;
    }

    .content-menu .content-menu__item:last-child {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .content-menu .content-menu__item .menu__link.isActive {
        color: var(--accent);
    }

    .contact-info__menu {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .contact-info__menu .info-item {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--white);
    }

    .contact-info__menu .info-item .icon {
        line-height: 1;
        font-size: 15px;
        height: 15px;
    }

    .contact-info__menu .info-item .text {
        color: var(--white);
        font-size: 15px;
        line-height: 1;
    }
`;

export default MenuMobile;
