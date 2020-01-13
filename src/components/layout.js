import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import GlobalStyle from "../Global";
import styled from "styled-components";
import { grainsboro, elevation, fixed } from "../utilities";

const StyledFooter = styled.footer`
  background: ${grainsboro};
  padding: 1.2rem 5% 0.3rem 5%;
  width: 100%;
  ${fixed()};
  ${elevation[0]};
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <GlobalStyle />
        <main>{children}</main>
      </div>
      <StyledFooter>
        <h2>© {new Date().getFullYear()}, Built by David Lee</h2>
      </StyledFooter>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
