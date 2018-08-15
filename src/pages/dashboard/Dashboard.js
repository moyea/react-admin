import React, {Component} from 'react';
import {Card, Icon, Row, Col, Progress, List, Checkbox, Input, Button} from 'antd';
import ReactEcharts from 'echarts-for-react';
import ReactPeity from "../../comps/ReactPeity";
import max from 'lodash.max';
import './dashboard.css';

class Dashboard extends Component {

  state = {
    taskInput: '',
    todoList: [
      {id: 1000, title: 'Upgrade to SSD harddisks', checked: false},
      {id: 1001, title: 'Pay server invoice', checked: false},
      {id: 1002, title: 'Upgrade to SSD harddisks', checked: false},
      {id: 1003, title: 'Pay server invoice', checked: false},
      {id: 1004, title: 'Upgrade to SSD harddisks', checked: false}
    ],
    chartOptions: {
      color: ['#a4bcdd', '#f5bec4'],
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: false
      },
      xAxis: [
        {
          show: false,
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          show: false,
          type: 'value'
        }
      ],
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: [120, 132, 101, 134, 90, 230, 210],
          smooth: true,
          showSymbol: false
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: [220, 182, 191, 234, 290, 330, 310],
          smooth: true,
          showSymbol: false
        }
      ]
    }
  };

  onChange(target) {
    target.checked = !target.checked;
    this.setState({
      todoList: [
        ...this.state.todoList
      ]
    });
  }

  addTask() {
    const {todoList, taskInput} = this.state;
    if (!taskInput) {
      return;
    }
    let maxId = max(todoList.map(item => item.id));
    this.setState({
      todoList: [
        ...todoList,
        {id: maxId + 1, title: taskInput, checked: false}
      ],
      taskInput: ''
    });
  }

  render() {
    const {todoList, chartOptions} = this.state;
    return (
      <div className="dashboard">
        <Row gutter={20}>
          <Col span={14}>
            <Card title="Network"
                  extra={<span><Icon type="sync"/><Icon type="tool" style={{marginLeft: '.5em'}}/></span>}>
              <div className="chart-wrapper">
                <ReactEcharts option={chartOptions} style={{height: '170px'}}/>
              </div>
              <Row gutter={30} style={{marginTop: '15px', marginBottom: 0}}>
                <Col span={12} style={{borderRight: '1px solid #ddd'}}>
                  <Row style={{marginBottom: 0}}>
                    <Col span={12} style={{padding: '10px', paddingLeft: 0, color: '#4590d3'}}>
                      <Icon type="chart"/>
                      25% server load
                    </Col>
                    <Col span={12} style={{padding: '10px', paddingLeft: 0, color: '#4590d3'}}>
                      <Icon type="user"/>
                      156 online users
                    </Col>
                    <Col span={24} style={{marginTop: '15px', height: '3px', lineHeight: '3px'}}>
                      <Progress default="default" strokeWidth={3} strokeLinecap="square" percent={30} size="small"
                                showInfo={false}/>
                    </Col>
                    <Col span={24} style={{marginTop: '15px', paddingRight: '5px', paddingBottom: '5px'}}>
                      Tip: Download the analytics mobile app for real time updates on the server.
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row className="mb-10">
                    <Col span={12}>Visitors</Col>
                    <Col span={12}>
                      <ReactPeity data={'1, 2, 3, 2, 2'} type="line"
                                  options={{width: '150', height: '20', stroke: '#8eacd4', fill: '#e7edf6'}}/>
                    </Col>
                  </Row>
                  <Row className="mb-10">
                    <Col span={12}>Bounce Rates</Col>
                    <Col span={12}>
                      <ReactPeity data={'1, 2, 3, 2, 2'} type="line"
                                  options={{width: '150', height: '20', stroke: '#f4b7bd', fill: '#fae4e7'}}/>
                    </Col>
                  </Row>
                  <Row className="mb-10">
                    <Col span={12}>Today`s Sales</Col>
                    <Col span={12} className="text-right">189000</Col>
                  </Row>
                  <Row className="mb-10">
                    <Col span={12}>Broken Links</Col>
                    <Col span={12} className="text-right">4</Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={10}>
            <Row gutter={20}>
              <Col span={12}>
                <Card className="small-widget"
                      cover={<div style={{padding: '10px', backgroundColor: '#70bf73'}}><ReactPeity
                        data={'1, 2, 3, 2, 2'}
                        type="line"
                        options={{
                          width: '203',
                          height: '67',
                          stroke: '#f0f0f0',
                          fill: '#a9d9ab',
                          min: 0,
                          max: 5
                        }}/></div>}>
                  <Card.Meta
                    title={<span><Button htmlType="button" shape="circle" type="primary"><Icon type="inbox"/></Button>HDD Usage</span>}/>
                </Card>
              </Col>
              <Col span={12}>
                <Card className="small-widget"
                      cover={<div style={{padding: '10px', backgroundColor: '#35baf5'}}><ReactPeity
                        data={'1, 2, 3, 2, 2'}
                        type="line"
                        options={{
                          width: '203',
                          height: '67',
                          fill: 'none',
                          stroke: '#f0f0f0',
                          min: 0,
                          max: 3
                        }}/></div>}>
                  <Card.Meta
                    title={<span><Button htmlType="button" shape="circle" type="primary"><Icon type="inbox"/></Button>Earnings</span>}/>
                </Card>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <Card className="small-widget"
                      cover={<div style={{padding: '10px', backgroundColor: '#8561c5'}}><ReactPeity
                        data={'1, 2, 3, 2, 2,4,5'} type="bar"
                        options={{width: '203', height: '67', fill: ['#f0f0f0'], min: 0, max: 5}}/></div>}>
                  <Card.Meta
                    title={<span><Button htmlType="button" shape="circle" type="primary"><Icon type="inbox"/></Button>Sales</span>}/>
                </Card>
              </Col>
              <Col span={12}>
                <Card className="small-widget"
                      cover={<div style={{padding: '10px', backgroundColor: '#33abaa'}}><ReactPeity
                        data={'1, 2, 3'} type="pie"
                        options={{width: '203', height: '67'}}/></div>}>
                  <Card.Meta
                    title={<span><Button htmlType="button" shape="circle" type="primary"><Icon type="inbox"/></Button>Top Movie</span>}/>
                </Card>
              </Col>
            </Row>
            <Row className="weather-comps ant-card-bordered">
              <Col span={4} className="weather-image">
                <i className="iconfont icon-weather-partlycloudy"/>
              </Col>
              <Col span={20} className="weather-details">
                <h4>25℃</h4>
                <p>Partly Cloudy</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={20} style={{marginBottom: 0}}>
          <Col span={14}>
            <Card title="TODO List">
              <List dataSource={todoList} renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={<Checkbox checked={item.checked}
                                     value={item.id}
                                     onChange={() => this.onChange(item)}>{item.title}</Checkbox>}/>
                </List.Item>)} style={{height: '234px', overflowY: 'scroll'}}/>
              <Row>
                <Col span={22}>
                  <Input placeholder="Add New Task" value={this.state.taskInput}
                         onChange={(e) => this.setState({taskInput: e.target.value})}/>
                </Col>
                <Col span={2} className="text-right">
                  <Button htmlType="button" type="primary" onClick={() => this.addTask()}>
                    <Icon type="plus"/>
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={10}>
            <Card title="Services">
              <Row>
                <Col span={7}>
                  <ReactPeity data={'20, 68, 12'} type="donut"
                              options={{
                                width: '110',
                                height: '110',
                                fill: ['#ffc000', '#6aa5db', '#ee929c'],
                                radius: 50
                              }}/>
                </Col>
                <Col span={17}>
                  <div className="legend-item finance">
                    <p>Finance<span className="right">20%</span></p>
                    <Progress default="default" strokeWidth={5} percent={20} size="small" showInfo={false}
                              status="success"/>
                  </div>
                  <div className="legend-item research">
                    <p>Research<span className="right">68%</span></p>
                    <Progress default="default" strokeWidth={5} percent={68} size="small" showInfo={false}/>
                  </div>
                  <div className="legend-item marketing">
                    <p>Marketing<span className="right">12%</span></p>
                    <Progress default="default" strokeWidth={5} percent={12} size="small" showInfo={false}/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={7}>
                  <ReactPeity data={'20, 68, 12'} type="donut"
                              options={{
                                width: '110',
                                height: '110',
                                fill: ['#ffc000', '#6aa5db', '#ee929c'],
                                radius: 50
                              }}/>
                </Col>
                <Col span={17}>
                  <p className="services-text">The year 2015 saw a significant change in the job market for the
                    industry. With increasing
                    goverment expenditure on research & development, jobs in the research sector rose to 68% from 47% in
                    the previous financial year. Share of jobs in the finance sector remained more or less constant
                    while that in marketing sector dropped to 12%. The reduction in marketing jobs is attributed to
                    increasing use of online advertising in recent years, which is largely automated.</p>
                  <Row style={{marginBottom: 0}}>
                    <Col span={8}>
                      <i className="square finance"/>
                      Finance
                    </Col>
                    <Col span={8}>
                      <i className="square research"/>
                      Research
                    </Col>
                    <Col span={8}>
                      <i className="square marketing"/>
                      Marketing
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>);
  }
}

export default Dashboard;
