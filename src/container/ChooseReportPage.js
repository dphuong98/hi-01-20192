import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Card, Col, Row, Pagination, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForChooseReport from '../component/ForReport/BreadCrumbForChooseReport'

class ChooseReportPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForChooseReport />
        <div className="site-card-wrapper">
          <div style={{ marginBottom: 16, textAlign: 'right' }}>
            <Button type="primary" size="large" shape="round" icon={<PlusOutlined />}>Tạo mẫu báo cáo</Button>
          </div>

          <Row gutter={16}>
            <Col span={8}>
              <Link to={`/create-report`}>
                <Card hoverable
                  title="Báo cáo kiểm tra định kỳ" bordered={false}
                  cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
                >
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Card hoverable
                title="Báo cáo tiến độ hàng ngày" bordered={false}
                cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
              >
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable
                title="Báo cáo dọn dẹp hành lang tuyến" bordered={false}
                cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
              >
              </Card>
            </Col>
            <Col span={8} style={{ marginTop: 16 }}>
              <Card hoverable
                title="Báo cáo sửa chữa bộ phận" bordered={false}
                cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
              >
              </Card>
            </Col>
            <Col span={8} style={{ marginTop: 16 }}>
              <Card hoverable
                title="Báo cáo kiểm tra chức năng" bordered={false}
                cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
              >
              </Card>
            </Col>
            <Col span={8} style={{ marginTop: 16 }}>
              <Card hoverable
                title="Báo cáo lắp đặt thành phần mới" bordered={false}
                cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
              >
              </Card>
            </Col>
          </Row>
          <Pagination style={{ marginTop: 16, textAlign: 'center' }} defaultCurrent={1} total={50} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ChooseReportPage;