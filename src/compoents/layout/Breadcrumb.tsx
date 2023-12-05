import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import React from 'react'

const Breadcrumbs = ({breadCrumb}) => {
  return (
    <>
    <Breadcrumb
    items={[
      {
        href: '',
        title: <HomeOutlined />,
      },
      {
        href: '',
        title: (
          <>
           
            <span>{breadCrumb}</span>
          </>
        ),
      }
    ]}
  />
    </>

  )
}

export default Breadcrumbs