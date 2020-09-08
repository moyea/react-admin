import React, { Component } from 'react';
import { Icon, Table, Tabs, List } from 'antd';

class SearchResult extends Component {
  state = {
    comments: [
      { id: 1, title: 'Jackson', content: '' },
      { id: 2, title: 'Dora', content: '' },
      { id: 3, title: 'David', content: '' },
      { id: 4, title: 'Jeff', content: '' },
      { id: 5, title: 'Tim', content: '' },
    ],
  };

  render() {
    const { comments } = this.state;

    const data = [
      {
        key: '1',
        from: 'John Brown',
        age: 32,
        title: 'Cillum ad ad ut velit.',
        received: '2014-09-25',
        extra: false,
      },
      {
        key: '2',
        from: 'Jim Green',
        age: 42,
        title:
          'Adipisicing occaecat ut magna minim dolor sint aute ipsum sit enim excepteur excepteur ea nostrud.',
        received: '2015-09-25',
        extra: true,
      },
      {
        key: '3',
        from: 'Joe Black',
        age: 32,
        title:
          'Consequat officia dolor sit labore aliquip elit enim sunt id magna.',
        received: '2014-10-25',
        extra: false,
      },
      {
        key: '4',
        from: 'Disabled User',
        age: 99,
        title:
          'Dolor exercitation ea labore ipsum deserunt eu deserunt pariatur labore occaecat nisi exercitation.',
        received: '2014-09-28',
        extra: true,
      },
    ];
    const rowSelection = {
      onChange(selectedRowKeys, selectedRows) {},
      getCheckboxProps(record) {
        return {
          // disabled:
          name: record.name,
        };
      },
    };

    const columns = [
      { title: 'From', dataIndex: 'from', width: 150 },
      {
        title: 'Title',
        dataIndex: 'title',
        width: 180,
        render(text) {
          return <div className="email-title">{text}</div>;
        },
      },
      {
        title: <Icon type="paper-clip" />,
        dataIndex: 'extra',
        width: 20,
        render(text) {
          return text ? <Icon type="paper-clip" /> : '';
        },
      },
      {
        title: 'Received',
        dataIndex: 'received',
        key: 'received',
        width: 100,
        sorter(a, b) {
          // return Date.parse(a) - Date.parse(b);
          // return differenceInMilliseconds(new Date(a), new Date(b));
        },
      },
    ];
    return (
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="All" key="1">
          <List
            itemLayout="horizontal"
            dataSource={comments}
            renderItem={(item) => (
              <List.Item className="comment-item">
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad beatae consectetur, consequatur consequuntur distinctio
                      earum, eos et id itaque, libero minus modinihil quibusdam
                      reiciendis sapiente temporibus vel voluptate voluptatibus.
                    </p>
                  }
                />
              </List.Item>
            )}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Users" key="2">
          <Table
            bordered={true}
            pagination={false}
            size={'small'}
            columns={columns}
            dataSource={data}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Messages" key="3">
          <Table
            bordered={true}
            pagination={false}
            size={'small'}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
          />
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

export default SearchResult;
