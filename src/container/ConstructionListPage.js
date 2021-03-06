import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, Button, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForConstructionList from '../component/ForConstructionList/BreadCrumbForConstructionList'
import ConstructionList from '../component/ForConstructionList/ConstructionList'

const { Search } = Input;
class ConstructionListPage extends Component {

  state =  {
    searchString: '',
    allItems: [
      {
        title: 'Dọn dẹp hành lang tuyến cột A2',
        imgSrc: 'https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg',
        address: 'Thư viện Tạ Quang Bửu',
        time: '08/03/2020 - NA',
        member: '20 kỹ sư'
      }, 
      {
        title: 'Sửa tụ điện cột F25',
        imgSrc: 'https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg',
        address: '458 Minh Khai, Vĩnh Tuy, Hà Nội',
        time: '16/04/2020 - 01/07/2020',
        member: '15 kỹ sư'
      }, 
      {
        title: 'Công trình C',
        imgSrc: 'https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg',
        address: 'Địa chỉ',
        time: 'Ngày khởi công - Ngày hoàn tất',
        member: 'Số kỹ sư tham gia'
      }, 
      {
        title: 'Công trình D',
        imgSrc: 'https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg',
        address: 'Địa chỉ',
        time: 'Ngày khởi công - Ngày hoàn tất',
        member: 'Số kỹ sư tham gia'
      }, 
      {
        title: 'Công trình E',
        imgSrc: 'https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg',
        address: 'Địa chỉ',
        time: 'Ngày khởi công - Ngày hoàn tất',
        member: 'Số kỹ sư tham gia'
      }, 
      {
        title: 'Công trình F',
        imgSrc: 'https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg',
        address: 'Địa chỉ',
        time: 'Ngày khởi công - Ngày hoàn tất',
        member: 'Số kỹ sư tham gia'
      }, 
    ],
    displayItems: []
  }

  _onSearchChanged = (event) => {
    this.setState({ searchString: event.target.value })
  };

  render() {
    console.log(this.state.searchString)
    const displayedProject = this.state.allItems.filter(
      item => 
        item.title.toLowerCase().includes(this.state.searchString.toLowerCase()) ||
        item.address.toLowerCase().includes(this.state.searchString.toLowerCase())
    )
    return (
      <div>
        <Header />
        <BreadCrumbForConstructionList />
        <div className="site-card-wrapper">
        <Divider>Lựa chọn công trình để thiết lập tiến độ và xem thống kê tiến độ</Divider>
        <Search placeholder="Nhập tên công trình cần tìm kiếm" enterButton onChange={this._onSearchChanged} />
          <div style={{ marginTop: 16, marginBottom: 16, textAlign: 'right' }}>
            <Link to={`/construction-add`}>
              <Button type="primary" size="large" shaspe="round" icon={<PlusOutlined />}>Tạo công trình</Button>
            </Link>
          </div>
          <ConstructionList projects = {displayedProject} />
          <Pagination style={{ marginTop: 16, textAlign: 'center' }} defaultCurrent={1} total={50} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ConstructionListPage;