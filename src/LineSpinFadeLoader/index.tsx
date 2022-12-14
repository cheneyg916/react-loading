import React, { FunctionComponent, memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';
import './style';

const LineSpinFadeLoader: FunctionComponent<ILoadingProp> = memo(
  ({
    text,
    style,
    color,
    textColor,
    size = 5,
    textOffset,
    visible,
  }) => {
    return (
      <Loader
        text={text}
        style={style}
        visible={visible}
        textOffset={textOffset}
        textColor={textColor}
      >
        <div className="line-spin-fade-loader">
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 3}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 3}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 3}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 3}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 3}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 3}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 3}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 3}px`,
            }}
          ></div>
        </div>
      </Loader>
    );
  },
);

export default LineSpinFadeLoader
