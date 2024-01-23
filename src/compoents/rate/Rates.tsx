import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Rate, Form, Input, Upload, Button, Pagination } from "antd";
import {
  CameraOutlined,
  LikeOutlined,
  MessageOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { MyContext } from "../../hook/Context";
import "./index.scss";
const Rates = (props) => { 
  const { updateProduct, setProduct, loading, product } = useContext(MyContext);
  const [handleComments, setHanldeComments] = useState<any[]>([]);
  const [value, setValue] = useState(3);
  const [pagination, setPagenation] = useState(0);
  const onChange = (values: any) => {
    setPagenation(values - 1);
    const arrProducts = props.item?.comment.slice(
      (values - 1) * 3,
      (values - 1) * 3 + 3
    );
    setHanldeComments(arrProducts);
  };
  const handleLike = (user, index) => {
    const pageIndex = index + 3 * pagination;
    const updatedCmt = { ...props.item?.comment[pageIndex] };
    const updatedLikes = updatedCmt.like.includes(user)
      ? updatedCmt.like.filter((i) => i !== user)
      : [...updatedCmt.like, user];

    updatedCmt.like = updatedLikes;

    const updateCmts = [...props.item?.comment];
    updateCmts[pageIndex] = updatedCmt;
    updateProduct({ ...props.item, comment: updateCmts });
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish = async (values: any, str?: any) => {
    props.setMesg(updateProduct);
  };
  const hanldeChageValues = (onValuesChange, allValues) => {
    const items = {
      name: allValues?.user,
      user: props.user.username,
      rate: allValues?.rate,
      mesg: allValues?.mesg,
      like: [],
      img: allValues?.img.map((img) => img.thumbUrl),
    };
    if (props?.item !== null) {
      setProduct({ ...props.item, comment: [...props.item?.comment, items] });
    }
  };
 
  useEffect(() => {
    onChange(pagination + 1);
  }, [props.item]);
  return (
    <>
      <Rate
        onChange={setValue}
        disabled={true}
        value={props.item?.rate ? props.item?.rate : value}
      />
      {props.item?.comment.length } đánh giá
      <div className="comment">
        <div className="comment-form">
          <h1>Đánh giá sản phẩm</h1>
          <Form
            layout="vertical"
            onFinish={onFinish}
            onValuesChange={hanldeChageValues}
          >
            <Form.Item
              label="Đánh giá của bạn"
              name="rate"
              rules={[
                { required: true, message: "Đánh giá của bạn về sản phẩm!" },
              ]}
            >
              <Rate onChange={setValue} value={value} />
            </Form.Item>
            <Form.Item
              name="img"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              style={{ flexBasis: "50%" }}
              rules={[{ required: true, message: "Please input file" }]}
            >
              <Upload listType="picture-card">
                <div>
                  <CameraOutlined />
                  <div>Upload</div>
                </div>
              </Upload>
            </Form.Item>

            <Form.Item
              name="user"
              rules={[
                { required: true, message: "Đánh giá của bạn về sản phẩm!" },
              ]}
              style={{ width: "50%" }}
            >
              <Input
                style={{ padding: "1rem", border: "1px solid #386A20" }}
                placeholder="Họ và tên"
              />
            </Form.Item>

            <Form.Item name="mesg">
              <TextArea
                rows={10}
                placeholder="Thêm bình luận của bạn"
                style={{ padding: "1rem", border: "1px solid #386A20" }}
              />
            </Form.Item>
            <Form.Item>
              <Button className="btn" htmlType="submit">
                Gửi
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="comment-list">
          <div>
            {handleComments.map((i, index) => {
              return (
                <div className="fb" key={index}>
                  <div className="fb-user">
                    <img src="./avatar.jpg" alt="img" />
                    <div>
                      <h2>{i.name}</h2>
                      <Rate value={i.rate} disabled={true} />
                    </div>
                  </div>
                  <div className="fb-mesg">
                    <p>{i.mesg}</p>
                  </div>
                  <div className="fb-img">
                    {i.img.length > 0 && <img src={i.img} alt="img" />}
                  </div>
                  <div className="fb-btn">
                    <div>
                      <LikeOutlined
                        className="fb-btn-icon"
                        onClick={() => handleLike(props.user.user, index)}
                        style={{
                          color: i.like.includes(props.user.user)
                            ? "blue"
                            : "black",
                        }}
                      />
                      <p>{i.like.length}</p>
                    </div>
                    <div>
                      <MessageOutlined className="fb-btn-icon" />
                      <p>Bình luận</p>
                    </div>
                    <div>
                      <ShareAltOutlined className="fb-btn-icon" />

                      <p>Chia sẻ</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination
            defaultCurrent={1}
            pageSize={3}
            total={
              props.item?.comment.length > 0 ? props.item?.comment.length : 0
            }
            onChange={onChange}
            className="pagination"
          />
        </div>
      </div>
    </>
  );
};

export default Rates;
