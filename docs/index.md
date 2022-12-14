## react-loading

react-loading, 一款基于 react 的轻量级加载动画库, 支持按需导入, 开箱即用!

```tsx
import React from 'react';
import { message, Button } from 'antd';
import {
  BallPulse,
  BallClipRotate,
  SquareSpin,
  BallScale,
  LineScale,
  LineScaleParty,
  BallScaleMultiple,
  BallPulseSync,
  BallBeat,
  LineScalePulseOut,
  BallSpinFadeLoader,
  LineSpinFadeLoader,
} from '@zooscript/react-loading';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const list = [
  {
    c: <BallPulse text="ball-pulse" />,
    t: `<BallPulse text="ball-pulse" />`,
  },
  {
    c: <BallClipRotate text="ball-clip-rotate" />,
    t: `<BallClipRotate text="ball-clip-rotate" />`,
  },
  {
    c: <BallScale text="ball-scale" />,
    t: `<BallScale text="ball-scale" />`,
  },
  {
    c: <LineScalePulseOut text="line-scale-pulse-out" />,
    t: `<LineScalePulseOut text="line-scale-pulse-out" />`,
  },
  {
    c: <LineScale text="line-scale" />,
    t: `<LineScale text="line-scale" />`,
  },
  {
    c: <LineScaleParty text="line-scale-party" />,
    t: `<LineScaleParty text="line-scale-party" />`,
  },
  {
    c: <BallPulseSync text="ball-pulse-sync" />,
    t: `<BallPulseSync text="ball-pulse-sync" />`,
  },
  {
    c: <BallBeat text="ball-beat" />,
    t: `<BallBeat text="ball-beat" />`,
  },
  {
    c: <SquareSpin text="square-spin" />,
    t: `<SquareSpin text="square-spin" />`,
  },
  {
    c: <BallSpinFadeLoader text="ball-spin-fade-loader" textOffset={30} />,
    t: `<BallSpinFadeLoader text="ball-spin-fade-loader" />`,
  },
  {
    c: <BallScaleMultiple text="ball-scale-multiple" textOffset={30} />,
    t: `<BallScaleMultiple text="ball-scale-multiple" />`,
  },
  {
    c: <LineSpinFadeLoader text="line-spin-fade-loader" textOffset={30} />,
    t: `<LineSpinFadeLoader text="line-spin-fade-loader" />`,
  },
];

export default () => {
  return (
    <div>
      {list.map((v) => {
        return (
          <CopyToClipboard
            key={v.t}
            text={v.t}
            onCopy={() => {
              message.success('已复制到剪切板');
            }}
          >
            <div
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                width: '142px',
                height: '100px',
              }}
            >
              {v.c}
            </div>
          </CopyToClipboard>
        );
      })}
    </div>
  );
};
```

### Install | 安装

```bash
# npm install @zooscript/react-loading
yarn add @zooscript/react-loading
```

### Use | 使用

```js
import { BallPulse, BallClipRotate, SquareSpin } from '@zooscript/react-loading';

export default () => <BallClipRotate text="zooscript" />;
```

## 按需导入配置 测试打包

```js
extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@zooscript/react-loading',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
        style: true,
      },
    ],
  ],
```
