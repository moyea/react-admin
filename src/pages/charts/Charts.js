import React, {Component} from 'react';
import {Row, Col, Card, Avatar} from 'antd';
import ReactEcharts from "echarts-for-react";
import './charts.css';

class Charts extends Component {

  render() {

    const chartOptions = {
      color: ['#a4bcdd', '#f5bfc4'],
      grid: {
        left: '0',
        right: '0',
        bottom: '3%',
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
          smooth: true,
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          smooth: true,
          data: [220, 182, 99, 234, 290, 330, 310]
        }
      ]
    };

    const barChartOptions = {
      color: ['#6aa5db', '#ee929c', '#aed581'],
      grid: {
        left: '0',
        right: '0',
        bottom: '3%'
      },
      xAxis: [
        {
          show: false,
          type: 'category',
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
          type: 'bar',
          stack: '广告',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'bar',
          stack: '广告',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'bar',
          stack: '广告',
          data: [150, 232, 201, 154, 190, 330, 410]
        }
      ]
    };

    return (
      <div className="page-wrapper">
        <Row gutter={20}>
          <Col span={12}>
            <Card>
              <div className="chart-wrapper">
                <ReactEcharts option={chartOptions} style={{height: '300px'}}/>
              </div>
              <Card.Meta className="chart-title" avatar={<Avatar icon="area-chart"/>} title="Area Chart"/>
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <div className="chart-wrapper">
                <ReactEcharts option={barChartOptions} style={{height: '300px'}}/>
              </div>
              <Card.Meta className="chart-title" avatar={<Avatar icon="bar-chart"/>} title="Bar Chart"/>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Charts;
