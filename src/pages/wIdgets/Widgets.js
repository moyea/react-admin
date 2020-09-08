import React, {Component} from 'react';
import CKEditor from 'react-ckeditor-component';
import './widgets.css';

class Widgets extends Component {

  state = {
    content: ''
  };

  onChange(e) {
    console.log('onChange:=>', e);
    const newContent = e.editor.getData();
    console.log('newContent:=>', newContent);
  }

  afterPaste(evt) {
    console.log('afterPaste:=>', evt);
  }

  render() {
    return (
      <div className="page-wrapper page-widgets">
        <CKEditor activeClass="editor" scriptUrl="https://cdn.bootcss.com/ckeditor/4.9.2/ckeditor.js"
                  content={this.state.content} events={{
          change: this.onChange,
          afterPaste: this.afterPaste
        }}/>
      </div>
    );
  }
}

export default Widgets;
