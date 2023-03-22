import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// Images
import logo from '../images/navbar/logo.svg';

// React icons
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { GoMailRead } from 'react-icons/go';
import { FiPhoneIncoming } from 'react-icons/fi';

function Footer({ siteTitle, mailHero, phoneHero }) {
  return (
    <FooterMain>
      <div className="footer-top">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-4 border">
              <div className="footer-top__item">
                <div className="footer-top__icon">
                  <MdOutlineMapsHomeWork />
                </div>

                <div className="footer-top__content">
                  <h4>Nice, France</h4>
                  <p>Lorem, ipsum.</p>
                </div>
              </div>
            </div>
            {/* End item-1 */}
            <div className="col-md-4 border">
              <div className="footer-top__item">
                <div className="footer-top__icon">
                  <GoMailRead />
                </div>

                <div className="footer-top__content">
                  <h4>Contact me</h4>
                  <a href={`mailto:${mailHero}`}>{mailHero}</a>
                </div>
              </div>
            </div>
            {/* End item-2 */}
            <div className="col-md-4 border">
              <div className="footer-top__item">
                <div className="footer-top__icon">
                  <FiPhoneIncoming />
                </div>

                <div className="footer-top__content">
                  <h4>Call me:</h4>
                  <a className="text" href={`tel:${phoneHero}`}>
                    {phoneHero}
                  </a>
                </div>
              </div>
            </div>
            {/* End item-3 */}
          </div>
        </div>
      </div>
      {/* Footer-top end */}
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="site-name">
                <img
                  className="site-name__logo"
                  src={logo}
                  alt="электрик в Киеве"
                />
                <h2 className="site-name__title">{siteTitle}</h2>
              </div>
            </div>
            {/* Site name end */}
            <div className="col-md-3">
              <div className="useful-links">
                <h5 className="useful-links__title">Main pages</h5>

                <ul className="useful-links__list">
                  <li className="useful-links__item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="useful-links__item">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="useful-links__item">
                    <Link to="/works">Works</Link>
                  </li>
                  <li className="useful-links__item">
                    <Link to="/price">Price</Link>
                  </li>
                  <li className="useful-links__item">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* pages links end */}
            <div className="col-md-3">
              <div className="useful-links">
                <h4 className="useful-links__title">Portfolio</h4>

                <ul className="useful-links__list">
                  <li className="useful-links__item">
                    <Link to="#">Portfolio-1</Link>
                  </li>
                  <li className="useful-links__item">
                    <Link to="#">Portfolio-2</Link>
                  </li>
                  <li className="useful-links__item">
                    <Link to="#">Portfolio-3</Link>
                  </li>
                  <li className="useful-links__item">
                    <Link to="#">Portfolio-4</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* types of works end */}
            <div className="col-md-3">
              <div className="image-container">
                <StaticImage
                  src="../images/hero/hero.png"
                  alt="hero image"
                  className="footer-middle__image"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end footer-middle */}
      <div className="creator">
        <h6 className="creator__title">
          Teamplate created by{' '}
          <a
            href="https://portfolio-denis.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="creator__link"
          >
            Denis Rusanov
          </a>
        </h6>
      </div>
    </FooterMain>
  );
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

const FooterMain = styled.footer`
  min-height: 400px;
  background-color: #09142b;
  color: var(--white);

  .footer-top {
    background-color: #071125;
    border-bottom: 1px solid #222c41;
  }

  .border {
    border-right: 1px solid #222c41;
  }
  .border:last-child {
    border-right: none;
  }
  @media (max-width: 768px) {
    .border {
      border-right: none;
    }
  }

  .footer-top__item {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px 0;
  }
  @media (max-width: 768px) {
    .footer-top__item {
      padding: 10px 0;
    }
  }
  @media (max-width: 576px) {
    .footer-top__item {
      justify-content: start;
    }
  }

  .footer-top__icon {
    color: var(--accent);
    font-size: 37px;
    line-height: 0;
  }
  @media (max-width: 992px) {
    .footer-top__icon {
      font-size: 30px;
    }
  }

  .footer-top__content h4 {
    font-size: 18px;
    font-weight: 500;
  }
  .footer-top__content p {
    font-size: 16px;
  }

  .footer-top__content a {
    font-size: 16px;
    color: var(--white);
    transition: all 0.3s ease;
  }
  .footer-top__content a:hover {
    color: var(--accent);
  }
  @media (max-width: 992px) {
    .footer-top__content h4 {
      font-size: 16px;
    }
    .footer-top__content p {
      font-size: 14px;
    }
  }

  /* Footer-middle start */
  .footer-middle {
    padding: 60px 0;
  }

  .useful-links {
    margin-bottom: 20px;
  }

  .useful-links__title {
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 20px;
  }
  @media (max-width: 992px) {
    .useful-links__title {
      margin-bottom: 15px;
      font-size: 18px;
    }
  }

  .useful-links__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media (max-width: 992px) {
    .useful-links__list {
      gap: 5px;
    }
  }

  .useful-links__item a {
    color: var(--white);
    font-size: 17px;
  }
  .useful-links__item a:hover {
    color: var(--accent);
  }
  @media (max-width: 992px) {
    .useful-links__item a {
      font-size: 16px;
    }
  }

  .footer-middle__image {
    animation-name: float-bob-y;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes float-bob-y {
    0% {
      transform: translateY(-20px);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(-20px);
    }
  }

  @media (max-width: 1200px) {
    .image-container {
      margin-top: 50px;
      display: flex;
      justify-content: center;
    }
  }

  .creator {
    text-align: center;
    padding: 15px 10px 50px;
  }

  .creator__title {
    font-size: 20px;
    font-weight: 500;
    font-family: var(--second-font);
  }

  .creator__link {
    color: var(--link);
    font-size: 22px;
    font-weight: bold;
    font-family: var(--main-font);
    transition: all 0.3s ease;
  }
  .creator__link:hover {
    color: #0042bd;
  }
`;

export default Footer;
