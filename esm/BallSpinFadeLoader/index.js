import React, { memo } from 'react';
import Loader from "../Loader";
import "./style";
export default /*#__PURE__*/memo(function (_ref) {
  var text = _ref.text,
      style = _ref.style,
      color = _ref.color,
      size = _ref.size,
      textColor = _ref.textColor,
      textOffset = _ref.textOffset,
      visible = _ref.visible;
  return /*#__PURE__*/React.createElement(Loader, {
    text: text,
    style: style,
    visible: visible,
    textOffset: textOffset,
    textColor: textColor
  }, /*#__PURE__*/React.createElement("div", {
    className: "ball-spin-fade-loader"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  })));
});