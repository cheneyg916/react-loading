import React, { memo } from 'react';
import Loader from "../Loader";
import "./style";
export default /*#__PURE__*/memo(function (_ref) {
  var text = _ref.text,
      style = _ref.style,
      color = _ref.color,
      textColor = _ref.textColor,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 4 : _ref$size,
      visible = _ref.visible;
  return /*#__PURE__*/React.createElement(Loader, {
    text: text,
    style: style,
    visible: visible,
    textColor: textColor
  }, /*#__PURE__*/React.createElement("div", {
    className: "line-scale-pulse-out"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 9, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 9, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 9, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 9, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 9, "px")
    }
  })));
});