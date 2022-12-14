import React, { FunctionComponent, memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';
import './style';

const LineScalePulseOut: FunctionComponent<ILoadingProp> = memo(
  ({ text, style, color, textColor, size = 4, visible }) => {
    return (
      <Loader text={text} style={style} visible={visible} textColor={textColor}>
        <div className="line-scale-pulse-out">
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 9}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 9}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 9}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 9}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size * 9}px`,
            }}
          ></div>
        </div>
      </Loader>
    );
  },
);

export default LineScalePulseOut