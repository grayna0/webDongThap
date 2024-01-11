import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import FirtContent from './FirtContent';
import SecondContent from './SecondContent';
import "./index.scss"
const steps = [
  {
    title: 'First',
    content: <FirtContent/>,
  },
  {
    title: 'Second',
    content: <SecondContent/>,
  },
  {
    title: 'Last',
    content: <div>
        thanhf cong
    </div>,
  },
];

const Checkout = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);


    const next = () => {
      setCurrent(current + 1);
  steps[current+1].content
    };
  
    const prev = () => {
      setCurrent(current - 1);
  steps[current-1].content
    };
  
    const items = steps.map((item) => ({ key: item.title, title: item.title }));

  
    const contentStyle: React.CSSProperties = {
      lineHeight: '260px',
      textAlign: 'center',
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
    };
  
    return (
      <>
        <Steps current={current} items={items} />
      <div style={contentStyle}> {React.cloneElement(steps[current].content, { next: next })}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </>
    );
}

export default Checkout