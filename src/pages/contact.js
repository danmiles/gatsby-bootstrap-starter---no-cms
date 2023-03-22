import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

function ContactPage() {
  const [serverState, setServerState] = useState({
    status: false,
  });

  const handleServerResponse = (ok, form) => {
    setServerState({
      status: { ok },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    axios({
      method: 'post',
      // add your getform url
      url: 'https://getform.io/f/your-get-form-url',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, form);
      })
      .catch((r) => {
        handleServerResponse(false, form);
      });
  };

  return (
    <Layout>
      <Seo
        title="Contact"
        description="This is a contact page meta description."
      />
      <ContactStyles>
        <section className="contact-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <div className="section-header">
                  <h4 className="section__subtitle">"Contact"</h4>
                  <h1 className="section__title">
                    Lorem ipsum dolor sit amet.
                  </h1>
                  <p className="section__info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, labore quisquam molestiae distinctio ea pariatur
                    rem iure impedit voluptatibus, vero consequuntur a
                    dignissimos debitis et possimus cupiditate qui? Molestiae,
                    ea!
                  </p>
                </div>
              </div>
            </div>
            {/* end section-header */}

            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="contact-page__left">
                  <form
                    onSubmit={handleOnSubmit}
                    className="contact-page__form"
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Your name (required)"
                            name="Your name"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Message subject"
                            name="Message subject"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input type="text" placeholder="Phone" name="Phone" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="email"
                            placeholder="Mail (required)"
                            name="Email"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-page__input-box text-message-box">
                          <textarea
                            name="Message"
                            placeholder="Your message (required)"
                            required="required"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="contact-page__btn-msg-box">
                      {serverState.status.ok ? (
                        <div className="form-msg success">Message sent!</div>
                      ) : (
                        <div className="form-msg"></div>
                      )}
                      <div className="contact-page__btn-box">
                        <button type="submit" className="button-main">
                          Send a message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* contact-page__left col end */}
              <div className="col-xl-4 col-lg-5 ">
                <div className="contact-page__right"></div>
              </div>
              {/* contact-page__right col end */}
            </div>
            {/* end row */}
          </div>
        </section>
      </ContactStyles>
    </Layout>
  );
}

const ContactStyles = styled.div`
  .contact-page {
    padding: 80px 0;
  }
  @media (max-width: 992px) {
    .contact-page {
      padding: 60px 0;
    }
  }

  .section-header {
    margin-bottom: 50px;
  }

  .contact-page__left {
    position: relative;
    display: block;
  }
  @media (max-width: 992px) {
    .contact-page__left {
      margin-bottom: 50px;
    }
  }

  .contact-page__form {
    position: relative;
    display: block;
  }

  .contact-page__input-box {
    position: relative;
    display: block;
    margin-bottom: 20px;
  }

  .contact-page__input-box input[type='text'],
  .contact-page__input-box input[type='email'] {
    height: 50px;
    width: 100%;
    background-color: #fcfcfe;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    font-size: 18px;
    color: #444444;
    display: block;
    border: 1px solid #dbdcdd;
    border-radius: 5px;
  }

  .contact-page__input-box textarea {
    font-size: 18px;
    color: #444444;
    height: 220px;
    width: 100%;
    background-color: #fcfcfe;
    padding: 18px 30px 30px;
    border: 1px solid #dbdcdd;
    border-radius: 5px;
    outline: none;
    margin-bottom: 0px;
  }

  .contact-page__btn-msg-box {
    display: flex;
    gap: 15px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    .contact-page__btn-msg-box {
      width: 100%;
      justify-content: center;
    }
  }

  .contact-page__input-box.text-message-box {
    height: 220px;
  }

  .contact-page__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
  }
  @media (max-width: 992px) {
    .contact-page__right {
      margin-left: 0;
    }
  }

  .site-name__logo {
    width: 70px;
    height: 70px;
  }

  .site-name {
    margin-bottom: 0;
  }

  .site-name h2 {
    color: var(--second-color);
    font-size: 40px;
  }
  @media (max-width: 1400px) {
    .site-name h2 {
      font-size: 30px;
    }
  }

  .site-name p {
    font-size: 20px;
    color: var(--second-color);
  }

  .contact-page__email {
    font-size: 18px;
    font-weight: 400;
    font-family: var(--main-font);
    margin-top: 19px;
  }

  .contact-page__email a {
    color: #444444;
    transition: all 500ms ease;
  }

  .contact-page__email a:hover {
    color: var(--hover);
  }

  .contact-page__call-box {
    border-top: 1px solid #cbcdd2;
    padding-top: 35px;
    margin-top: 35px;
  }
  @media (max-width: 992px) {
    .contact-page__call-box {
      text-align: center;
    }
  }

  .contact-page__call-sub-title {
    font-size: 24px;
    color: var(--second-color);
    font-weight: 600;
    margin-bottom: 10px;
  }

  .contact-page__call-number {
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 10px;
  }

  .contact-page__call-number a {
    color: var(--second-color);
    transition: all 500ms ease;
  }
  .contact-page__call-number a:hover {
    color: var(--hover);
  }

  .call-me__buttons {
    display: flex;
    gap: 8px;
  }
  @media (max-width: 992px) {
    .call-me__buttons {
      justify-content: center;
    }
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

  .form-msg {
    visibility: hidden;
    transition: all 0.5s ease;
  }

  .form-msg.success {
    visibility: visible;
    padding: 20px 15px;
    font-size: 18px;
    font-weight: 500;
    background-color: #0f7d05;
    color: var(--white);
    text-align: center;
    max-width: 248px;
    border-radius: 5px;
  }

  .button-main {
    margin: 0;
    padding: 20px 30px;
    font-size: 18px;
    font-weight: 500;
    color: var(--white);
  }
`;

export default ContactPage;
