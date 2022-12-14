import React, { FunctionComponent, memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';
import './style';

const BallPulse: FunctionComponent<ILoadingProp> = memo(
  ({ text, style, textColor, color, size, visible }) => {
    return (
      <Loader text={text} style={style} visible={visible} textColor={textColor}>
        <div className="ball-pulse">
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: color,
              width: `${size}px`,
              height: `${size}px`,
            }}
          ></div>
        </div>
      </Loader>
    );
  },
);

export default BallPulse
