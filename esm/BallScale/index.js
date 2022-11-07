import React, { memo } from 'react';
import Loader from "../Loader";
import "./style";
export default /*#__PURE__*/memo(function (_ref) {
  var text = _ref.text,
      style = _ref.style,
      color = _ref.color,
      textColor = _ref.textColor,
      size = _ref.size,
      visible = _ref.visible;
  return /*#__PURE__*/React.createElement(Loader, {
    text: text,
    style: style,
    visible: visible,
    textColor: textColor
  }, /*#__PURE__*/React.createElement("div", {
    className: "ball-scale"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  })));
});