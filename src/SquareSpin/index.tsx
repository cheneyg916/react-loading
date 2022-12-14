import React, { FunctionComponent, memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';
import './style';

const SquareSpin: FunctionComponent<ILoadingProp> = memo(
  ({ text, style, color, size, textColor, visible }) => {
    return (
      <Loader text={text} style={style} visible={visible} textColor={textColor}>
        <div className="square-spin">
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

export default SquareSpin;
