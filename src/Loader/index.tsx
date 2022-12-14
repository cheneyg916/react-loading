import React, { FunctionComponent } from 'react';
import { ILoadingProp } from '../type';
import './index.less';

const Loader: FunctionComponent<ILoadingProp> = ({
  text,
  visible = true,
  textOffset,
  textColor,
  style,
  children,
}) => {
  return visible ? (
    <div className="react-loader-wrap" style={style}>
      {children}
      {!!text && (
        <div
          className="react-loader-text-tip"
          style={{ marginTop: `${textOffset}px`, color: textColor }}
        >
          {text}
        </div>
      )}
    </div>
  ) : null;
};

export default Loader;
