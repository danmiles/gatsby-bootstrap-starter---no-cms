import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Navbar from './header/Navbar';

// Images import
import logo from '../images/navbar/logo.svg';
import mail from '../images/navbar/mail.svg';
import phone from '../images/navbar/phone.svg';

function Header({ siteTitle, mailHero, phoneHero }) {

    return (
        <HeaderMain>
            <div className="main-header">
                <div className="container">
                    <div className="main-header__top-inner">
                        <div className="main-header__top-left">
                            <Link to="/" href="#">
                                <img
                                    className="main-header__logo"
                                    src={logo}
                                    alt="электрик в Киеве"
                                />
                            </Link>
                            <Link to="/" href="#">
                                <h1 className="main-header__site-title">
                                    {siteTitle}
                                </h1>
                            </Link>
                        </div>

                        <div className="main-header__top-right">
                            <ul className="main-header__address-list">
                                <li className="adress-list__item mail">
                                    <img
                                        src={mail}
                                        alt="mail"
                                        className="icon"
                                    />
                                    <div className="content">
                                        <p>Write me:</p>
                                        <a
                                            className="content__mail"
                                            href={`mailto:${mailHero}`}
                                        >
                                            {mailHero}
                                        </a>
                                    </div>
                                </li>
                                <li className="adress-list__item phone">
                                    <img
                                        src={phone}
                                        alt="phone"
                                        className="icon"
                                    />
                                    <div className="content">
                                        <p>Call today:</p>
                                        <a
                                            className="content__phone"
                                            href={`tel:${phoneHero}`}
                                        >
                                            {phoneHero}
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar mailHero={mailHero} phoneHero={phoneHero}></Navbar>
        </HeaderMain>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

// Styled components --- Header start
const HeaderMain = styled.header`

    .main-header {
        position: relative;
        padding: 50px 0;
        background-color: var(--second-color);
        transition: all 500ms ease;

    }

    .main-header__top-inner {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        z-index: 1;
    }
    @media (max-width: 992px) {
        .main-header__top-inner {
            justify-content: center;
        }
    }

    .main-header__top-left {
        display: flex;
        gap: 15px;
        align-items: center;
    }

    .main-header__logo {
        max-width: 70px;
    }
    @media (max-width: 1400px) {
        .main-header__logo {
            max-width: 50px;
        }
    }

    .main-header__site-title {
        font-family: var(--second-font);
        color: #ffffff;
        font-weight: 900;
        font-size: 35px;
    }
    .main-header__site-title::first-letter {
        color: var(--accent);
    }
    @media (max-width: 1400px) {
        .main-header__site-title {
            font-size: 30px;
        }
    }

    @media (max-width: 992px) {
        .main-header__top-right {
            display: none;
        }
    }

    .main-header__address-list {
        display: flex;
        gap: 80px;
    }
    @media (max-width: 1400px) {
        .main-header__address-list {
            gap: 40px;
        }
    }

    .adress-list__item {
        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .adress-list__item .icon {
        max-width: 50px;
    }
    @media (max-width: 1400px) {
        .adress-list__item .icon {
            max-width: 35px;
        }
    }

    .adress-list__item .content p {
        font-family: var(--second-font);
    }

    .content__mail {
        color: var(--white);
        font-size: 20px;
        font-weight: bold;
        transition: all 0.3s ease;        
    }
    .content__mail:hover {
        color: var(--hover);
    }
    @media (max-width: 1400px) {
        .content__mail {
            font-size: 16px;
        }
    }

    .main-header__address-list .phone {
        position: relative;
    }
    .main-header__address-list .phone::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: -40px;
        width: 1px;
        background-color: #50637f;
    }
    @media (max-width: 1400px) {
        .main-header__address-list .phone::before {
            left: -20px;
        }
    }

    .content__phone {
        font-size: 25px;
        color: var(--white);
        font-weight: bold;
        transition: all 0.3s ease;
    }
    .content__phone:hover {
        color: var(--hover);
    }
    @media (max-width: 1400px) {
        .content__phone {
            font-size: 20px;
        }
    }
`;

export default Header;
