import { Rate, Tabs, TabsProps } from 'antd'
import React from 'react'
import Rates from '../../../compoents/rate/Rates';





const Section2 = (props) => {
    const product = props.productDetail 
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Chi tiết sản phẩm',
          children: <img src="/desp.png" alt="img" />
        },
        {
          key: '2',
          label: 'Đánh giá từ khách hàng',
          children: <div>
          {product !==null &&  <div>
            <Rates rate={ product.rate }/>
            {product.comment.length}  đánh giá
            </div>}
          </div>,
        },
        {
          key: '3',
          label: 'Giao hàng và trả lại miễn phí',
          children: <div>
    
          </div>,
        },
      ];
  return (
    <div >
         <Tabs style={{width:"100%"}} size="large" defaultActiveKey="1" items={items}/>;
    </div>
  )
}

export default Section2