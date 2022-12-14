---
title: 基本使用
nav:
  title: 基本使用
  order: 1
---

### 基本使用

```tsx
import React from 'react';
import { message, Button } from 'antd';
import { BallPulse, BallClipRotate, LineScale, LineScalePulseOut } from '@zooscript/react-loading';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const list = [
  {
    component: <BallPulse text="ball-pulse" />,
    text: `<BallPulse text="ball-pulse" />`,
  },
  {
    component: <BallClipRotate text="ball-clip-rotate" />,
    text: `<BallClipRotate text="ball-clip-rotate" />`,
  },
  {
    component: <LineScalePulseOut text="line-scale-pulse-out" />,
    text: `<LineScalePulseOut text="line-scale-pulse-out" />`,
  },
  {
    component: <LineScale text="line-scale" />,
    text: `<LineScale text="line-scale" />`,
  },
];

export default () => {
  return (
    <div>
      {list.map((item) => {
        return (
          <CopyToClipboard
            key={item.text}
            text={item.text}
            onCopy={() => message.success('已复制到剪切板')}
          >
            <div
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                width: '160px',
                height: '100px',
              }}
            >
              {item.component}
            </div>
          </CopyToClipboard>
        );
      })}
    </div>
  );
};
```

### 改变加载动画颜色，大小，文本

```tsx
import React from 'react';
import { message, Button } from 'antd';
import { BallPulse, BallClipRotate, LineScale, LineScalePulseOut } from '@zooscript/react-loading';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const list = [
  {
    component: <BallPulse text="ball-pulse" color="#47d547" />,
    text: `<BallPulse text="ball-pulse" />`,
  },
  {
    component: <BallClipRotate text="ball-clip-rotate" color="yellow" />,
    text: `<BallClipRotate text="ball-clip-rotate" />`,
  },
  {
    component: <LineScalePulseOut text="line-scale-pulse-out" color="#1b6edf" />,
    text: `<LineScalePulseOut text="line-scale-pulse-out" />`,
  },
  {
    component: <LineScale text="line-scale" textColor="red" />,
    text: `<LineScale text="line-scale" />`,
  },
];

export default () => {
  return (
    <div>
      {list.map((item) => {
        return (
          <CopyToClipboard
            key={item.text}
            text={item.text}
            onCopy={() => message.success('已复制到剪切板')}
          >
            <div
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                width: '142px',
                height: '100px',
              }}
            >
              {item.component}
            </div>
          </CopyToClipboard>
        );
      })}
    </div>
  );
};
```

<API id="BallBeat"></API>
