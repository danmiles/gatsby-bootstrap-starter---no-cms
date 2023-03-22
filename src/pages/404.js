import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Link } from 'gatsby';
import styled from 'styled-components';

// images
import image404 from '../images/404/404-img.jpg';
const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Page not found" description="Page not found description" />
    <Page404Styles>
      <section className="page-404">
        <div className="container">
          <div className="page-404__content">
            <div className="page-404__title-box">
              <span className="page-404__error">404</span>
              <h1 className="page-404__title">
                Error - page not found or does not exist.
              </h1>
              <p className="page-404__text">
                Try to return to{' '}
                <Link className="page-404__home-link" to="/">
                  home page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Page404Styles>
  </Layout>
);

const Page404Styles = styled.div`
  .page-404 {
    min-height: 1000px;
    background: url(${image404}) center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media (max-width: 992px) {
    .page-404 {
      min-height: 800px;
    }
  }

  .page-404__content {
    padding-top: 10%;
  }

  .page-404__title-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .page-404__error {
    line-height: 1;
    font-size: 140px;
    font-weight: 900;
    color: var(--white);
  }
  @media (max-width: 992px) {
    .page-404__error {
      font-size: 100px;
    }
  }

  .page-404__title {
    font-size: 35px;
    font-weight: 900;
    font-family: var(--second-font);
    padding: 5px 15px;
    line-height: 1.2;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
  }
  @media (max-width: 992px) {
    .page-404__title {
      font-size: 28px;
    }
  }

  .page-404__text {
    font-size: 22px;
    font-weight: 600;
    padding: 5px 15px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    max-width: 320px;
    text-align: center;
  }

  .page-404__home-link {
    font-size: 22px;
    font-weight: 900;
    color: var(--main);
    transition: all 0.3s ease;
  }
  .page-404__home-link:hover {
    color: var(--hover);
  }
`;

export default NotFoundPage;
