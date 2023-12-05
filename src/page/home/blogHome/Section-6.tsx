import React from 'react'


const arrCol =[
    {
        img:"Vector7.png",
        title:"100% sản vật địa phương",
        des:"Chúng tôi đảm bảo nguyên liệu rõ ràng, cung cấp những sản phẩm sạch, tự nhiên an toàn cho sức khỏe."
    },
    {
        img:"people-outline.png",
        title:"Sức khỏe cho cộng đồng",
        des:"Hướng đến sức khỏe người tiêu dùng bằng việc sản xuất những sản phẩm chất lượng .."
    },
    {
        img:"Vector-1.png",
        title:"Đúng giá nhà cung cấp",
        des:"Chúng tôi bán đúng giá nhà cung cấp và hướng đến thương mại công bằng với nông dân"
    },
    {
        img:"Vector-2.png",
        title:"Liên kết chuỗi giá trị",
        des:"Khai thác trọn vẹn chuỗi giá trị của nguyên liệu. Hướng đến nhiều đối tượng khách hàng và để lại ấn tượng bằng những sản phẩm sạch"
    }
]
const NotesAboutus = () => {
  return (
    <div className='wrap-flex'>
        {
            arrCol.map((item ,i)=> {
                return (
                    <div className='content'>
                        <div className='img'><img src={item.img} alt="img" /></div>
                        <div className='text'>
                            <p className='text-title'>{item.title}</p>
                            <p className='text-des'>{item.des}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default NotesAboutus