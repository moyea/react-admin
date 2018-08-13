import React, {Component} from 'react';
import {Collapse} from 'antd';

class FAQ extends Component {

  render() {

    const faq = [
      {
        id: 1000,
        title: 'How can I access high resolution images?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 1001,
        title: 'Can I download the application on my PC?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 1002,
        title: 'How often does the database get updated?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      }
    ];

    return (
      <div className="page-wrapper">
        <Collapse accordion>
          {faq.map(item => (<Collapse.Panel header={item.title} key={item.id}>
            {item.content}
          </Collapse.Panel>))}
        </Collapse>
        <Collapse accordion style={{marginTop: '20px'}}>
          {faq.map(item => (<Collapse.Panel header={item.title} key={item.id}>
            {item.content}
          </Collapse.Panel>))}
        </Collapse>
        <Collapse accordion style={{marginTop: '20px'}}>
          {faq.map(item => (<Collapse.Panel header={item.title} key={item.id}>
            {item.content}
          </Collapse.Panel>))}
        </Collapse>
      </div>
    );
  }
}

export default FAQ;
