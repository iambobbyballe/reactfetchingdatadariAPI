import React from "react";
import PropsTypes from "prop-types";

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.children}</h1>
    </header>
  );
}

Header.propsTypes = {
  children: PropsTypes.string.isRequired
};
export default Header;
