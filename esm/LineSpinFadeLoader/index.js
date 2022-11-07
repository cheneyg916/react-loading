import React, { memo } from 'react';
import Loader from "../Loader";
import "./style";
export default /*#__PURE__*/memo(function (_ref) {
  var text = _ref.text,
      style = _ref.style,
      color = _ref.color,
      textColor = _ref.textColor,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 5 : _ref$size,
      textOffset = _ref.textOffset,
      visible = _ref.visible;
  return /*#__PURE__*/React.createElement(Loader, {
    text: text,
    style: style,
    visible: visible,
    textOffset: textOffset,
    textColor: textColor
  }, /*#__PURE__*/React.createElement("div", {
    className: "line-spin-fade-loader"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 3, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 3, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 3, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 3, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 3, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 3, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 3, "px")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: color,
      width: "".concat(size, "px"),
      height: "".concat(size * 3, "px")
    }
  })));
});