import React, { FunctionComponent, memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';
import './style';

 const BallScale: FunctionComponent<ILoadingProp> = memo(
  ({ text, style, color, textColor, size, visible }) => {
    return (
      <Loader text={text} style={style} visible={visible} textColor={textColor}>
        <div className="ball-scale">
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


export default BallScale
