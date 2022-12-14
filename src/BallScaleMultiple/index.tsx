import React, { FunctionComponent, memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';
import './style';

const BallScaleMultiple: FunctionComponent<ILoadingProp> = memo(
  ({
    text,
    style,
    color,
    size,
    textColor,
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
        <div className="ball-scale-multiple">
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

export default BallScaleMultiple
