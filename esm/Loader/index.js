import React from 'react';
import "./index.less";

var Loader = function Loader(_ref) {
  var text = _ref.text,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      textOffset = _ref.textOffset,
      textColor = _ref.textColor,
      style = _ref.style,
      children = _ref.children;
  return visible ? /*#__PURE__*/React.createElement("div", {
    className: "react-loader-wrap",
    style: style
  }, children, !!text && /*#__PURE__*/React.createElement("div", {
    className: "react-loader-text-tip",
    style: {
      marginTop: "".concat(textOffset, "px"),
      color: textColor
    }
  }, text)) : null;
};

export default Loader;