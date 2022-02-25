/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactTooltip from "react-tooltip";
import icon from '../assest/images/Icon 14.png' 

function Tooltip(props) {
    const {text} = props
  return (
    <>
      <span data-tip={text} data-text-color='white'><img src={icon} alt="" /></span>
      <ReactTooltip />
    </>
  );
}
export default Tooltip;
