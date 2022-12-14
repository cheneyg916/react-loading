import React, { FunctionComponent, memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';
import './style';

const BallClipRotate: FunctionComponent<ILoadingProp> =memo(
  ({ text, style, color, textColor, size, visible }) => {
    return (
      <Loader text={text} style={style} visible={visible} textColor={textColor}>
        <div className="ball-clip-rotate">
          <div
            style={{
              backgroundColor: color,
              borderColor: color,
              width: `${size}px`,
              height: `${size}px`,
            }}
          ></div>
        </div>
      </Loader>
    );
  },
);

export default BallClipRotate
