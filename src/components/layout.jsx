import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// Import Global Styles
import '../css/layout.css';

// Import Bootstrap 5 only grid system. Root colors deleted.
import '../css/bootstrap-grid.css';

// Components
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteDataQuery {
            site {
                siteMetadata {
                    title
                    mail
                    phone
                }
            }
        }
    `);

    return (
        <>
            <Header
                siteTitle={data.site.siteMetadata?.title || `Title`}
                mailHero={data.site.siteMetadata?.mail}
                phoneHero={data.site.siteMetadata?.phone}
            />

            <main>{children}</main>

            <Footer
                siteTitle={data.site.siteMetadata?.title || `Title`}
                mailHero={data.site.siteMetadata?.mail}
                phoneHero={data.site.siteMetadata?.phone}
            />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
