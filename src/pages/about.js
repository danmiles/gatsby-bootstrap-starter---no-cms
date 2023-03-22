import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import styled from 'styled-components';

// Icons
// import { BsCheckSquare } from 'react-icons/bs';

function AboutPage() {
  return (
    <Layout>
      <Seo title="Page title" description="Page meta description" />

      <PriceStyles>
        {/* Content here */}
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-header">
                <h4 className="section__subtitle">"About me"</h4>
                <h1 className="section__title">Lorem ipsum dolor sit amet.</h1>
                <p className="section__info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium natus ad, blanditiis obcaecati minima
                  reprehenderit, sequi fuga atque ipsam cumque ea eveniet modi
                  doloribus! Dolor doloremque nulla et dicta distinctio.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end section-header */}
      </PriceStyles>
    </Layout>
  );
}

const PriceStyles = styled.div`
  padding: 100px 0;
  min-height: 60vh;
`;

export default AboutPage;
