import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import logo from "../images/ma-logo1.svg";
import { grainsboro, elevation } from "../utilities";
import { Link } from "gatsby";

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <div>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: `Moving Analystics`
};

export default styled(Header)`
  background: ${grainsboro};
  padding: 1.2rem 5% 0.3rem 5%;
  width: 100%;
  ${elevation[2]};
  .logo {
    width: 600px;
  }
`;
