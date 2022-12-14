import React, { FunctionComponent, memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';
import './style';

 const BallBeat: FunctionComponent<ILoadingProp> = memo(
  ({ text, style, color, textColor, size, visible }) => {
    return (
      <Loader text={text} style={style} visible={visible} textColor={textColor}>
        <div className="ball-beat">
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

export default BallBeat
