import React, { useState } from 'react';
import { Space, Rate } from 'antd';



const Rates = (props) => {
  const [value, setValue] = useState(3);
  return (
    <Space>
      <Rate onChange={setValue} value={props.rate ? props.rate :value} />
      
    </Space>
  );
};

export default Rates;