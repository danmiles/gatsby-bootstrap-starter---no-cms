import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

// HeroSection Images - if you need background image
// 1) Uncomment here
// import heroBg from '../../images/home/hero-bg.webp';

// 2) Add to const HeroSectionStyles = styled.section
/* .hero-bg {
    background-image: url(${heroBg});
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 84.4%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    mix-blend-mode: soft-light;
    opacity: 0.1;
    z-index: -2;
  } */

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="hero-bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero-left">
              <span className="hero-left__subtitle">
                Gatsby is fast and convenient
              </span>
              <h2 className="hero-left__title">
                Starter for Gatsby.js with Bootstrap enabled
              </h2>
              <div className="hero-left__content">
                <p className="hero-left__text">
                  Starter for Gatsby.js with Bootstrap enabled (only
                  bootstrap-grid.css for better optimization) + Styled
                  Components. The fonts are connected locally, which gives about
                  10 performance points for PageSpeed Insights.
                </p>
                <p className="hero-left__text">
                  Also this Gatsby starter is optimized for SEO. In this
                  starter, React Helmet and Seo components are immediately
                  connected, which I collected from various sources and redid a
                  little.
                </p>
                <h3 className="hero-left__promo">
                  I hope you like it, I have included the fonts locally and left
                  only Bootsrap grid. By removing its awful Root color.
                </h3>

                <p className="hero-left__text">
                  This layout was developed on the basis of my project{' '}
                  <a
                    href="https://electrickiev.com/"
                    target="_blank"
                    className="hero-left__link"
                    rel="noopener noreferrer"
                  >
                    electrickiev.com
                  </a>{' '}
                  site for a professional electrician from Ukraine. But much has
                  been removed as unnecessary, only the general concept is given
                  here.
                </p>
              </div>

              <Link className="btn-link button-main" to="/contact">
                Order
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-right">
              <StaticImage
                src="../../images/hero/hero.png"
                alt="Hero image"
                className="hero-right__image"
                width={400}
                height={400}
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
      {/* section hero end */}
    </HeroSectionStyles>
  );
}

// ===== Hero section styles - start =====
const HeroSectionStyles = styled.section`
  position: relative;
  background-color: var(--main);
  z-index: 1;

  .hero-left {
    padding: 180px 0;
    color: var(--white);
  }
  @media (max-width: 992px) {
    .hero-left {
      padding-top: 80px;
      padding-bottom: 40px;
    }
  }

  .hero-left__subtitle {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: var(--second-font);
    margin-bottom: 40px;
  }
  @media (max-width: 380px) {
    .hero-left__subtitle {
      font-size: 14px;
    }
  }

  .hero-left__title {
    font-family: var(--second-font);
    font-size: 52px;
    line-height: 1.2;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  @media (max-width: 1200px) {
    .hero-left__title {
      font-size: 45px;
    }
  }
  @media (max-width: 768px) {
    .hero-left__title {
      font-size: 35px;
    }
  }
  @media (max-width: 380px) {
    .hero-left__title {
      font-size: 25px;
    }
  }

  .hero-left__content {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-bottom: 35px;
  }
  @media (max-width: 1200px) {
    .hero-left__content {
      max-width: none;
    }
  }

  .hero-left__text {
    font-size: 20px;
    font-weight: 500;
  }

  .hero-left__promo {
    font-size: 21px;
    font-weight: 600;
  }
  @media (max-width: 1200px) {
    .hero-left__text {
      font-size: 18px;
    }
    .hero-left__promo {
      font-size: 20px;
    }
  }
  @media (max-width: 576px) {
    .hero-left__text {
      font-size: 16px;
    }
    .hero-left__promo {
      font-size: 18px;
    }
  }

  .call-me__buttons {
    display: flex;
    gap: 8px;
  }

  .call-me__icon {
    height: 45px;
    width: 45px;
    transition: all 0.3s ease;
    padding: 3px;
  }
  .call-me__icon:hover {
    padding: 5px;
    background-color: var(--accent);
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    .call-me__icon {
      height: 40px;
      width: 40px;
    }
  }
  @media (max-width: 576px) {
    .call-me__icon {
      height: 35px;
      width: 35px;
    }
  }

  .hero-right {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-left: -50px;
    margin-right: -50px;
  }
  @media (max-width: 1600px) {
    .hero-right {
      margin-right: auto;
      margin-left: auto;
    }
    .hero-right__image {
      margin-right: 40px;
    }
  }
  @media (max-width: 992px) {
    .hero-right {
      padding-bottom: 40px;
    }
    @media (max-width: 400px) {
      .hero-right {
        display: none;
      }
    }
  }

  .hero-right__image {
    display: block;
  }
  @media (max-width: 600px) {
    .hero-right__image {
      max-width: 80%;
      margin: 0 auto;
    }
  }
  @media (max-width: 1200px) {
    .hero-right__image {
      margin-right: auto;
    }
  }
`;
// ===== Hero section styles - end =====

export default HeroSection;
