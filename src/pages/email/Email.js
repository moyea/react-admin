import React, {Component} from 'react';
import {Card, Col, Icon, Row, Table, List} from "antd";
import './email.css';
// import differenceInMilliseconds from 'date-fns/difference_in_milliseconds';
// import parse from 'date-fns/parse';

class Email extends Component {

  render() {

    const columns = [
      {title: 'From', dataIndex: 'from', width: 150},
      {
        title: 'Title',
        dataIndex: 'title',
        width: 180,
        render(text) {
          return <div className="email-title">{text}</div>;
        }
      },
      {
        title: <Icon type="paper-clip"/>,
        dataIndex: 'extra',
        width: 20,
        render(text) {
          return text ? <Icon type="paper-clip"/> : '';
        }
      },
      {
        title: 'Received',
        dataIndex:
          'received',
        key:
          'received',
        width:
          100,
        sorter(a, b) {
          // return Date.parse(a) - Date.parse(b);
          // return differenceInMilliseconds(new Date(a), new Date(b));
        }
      }
    ];

    const data = [{
      key: '1',
      from: 'John Brown',
      age: 32,
      title: 'Cillum ad ad ut velit.',
      received: '2014-09-25',
      extra: false
    }, {
      key: '2',
      from: 'Jim Green',
      age: 42,
      title: 'Adipisicing occaecat ut magna minim dolor sint aute ipsum sit enim excepteur excepteur ea nostrud.',
      received: '2015-09-25',
      extra: true
    }, {
      key: '3',
      from: 'Joe Black',
      age: 32,
      title: 'Consequat officia dolor sit labore aliquip elit enim sunt id magna.',
      received: '2014-10-25',
      extra: false
    }, {
      key: '4',
      from: 'Disabled User',
      age: 99,
      title: 'Dolor exercitation ea labore ipsum deserunt eu deserunt pariatur labore occaecat nisi exercitation.',
      received: '2014-09-28',
      extra: true
    }];
    const rowSelection = {
      onChange(selectedRowKeys, selectedRows) {

      },
      getCheckboxProps(record) {
        return {
          // disabled:
          name: record.name
        }
      }
    };

    const emailList = [
      {iconType: 'edit', label: 'Compose'},
      {iconType: 'inbox', label: 'Inbox'},
      {iconType: 'check', label: 'Sent Mail'},
      {iconType: 'info', label: 'Spam'},
      {iconType: 'delete', label: 'Trash'}
    ];
    const friendsList = [
      {name: 'Compose'},
      {name: 'Inbox'},
      {name: 'Sent Mail'},
      {name: 'Spam'},
      {name: 'Trash'}
    ];

    return (
      <div className="page-wrapper page-email">
        <Row gutter={20}>
          <Col span={6}>
            <Card title={<span><Icon type="inbox"/>Email</span>} style={{marginBottom: '20px'}}>
              <List dataSource={emailList} renderItem={item => (
                <List.Item><Icon type={item.iconType}/>{item.label}</List.Item>)}/>
            </Card>
            <Card title={<span><Icon type="group"/>Friends</span>}>
              <List dataSource={friendsList} renderItem={item => (
                <List.Item>{item.name}</List.Item>)}/>
            </Card>
          </Col>
          <Col span={18}>
            <Table className="email-table" bordered={true} pagination={false}
                   size={'small'} rowSelection={rowSelection}
                   columns={columns} dataSource={data}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Email;
