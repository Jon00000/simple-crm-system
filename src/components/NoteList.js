import React from 'react';
import { List, Typography, Modal, Input } from 'antd';

class NoteList extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      toggle: 'none'
    }
  }
  //show modal window
  showInput(row) {
    this.setState({
      visible: true
    },()=>setTimeout(() => {
      if(this.input !== undefined){
        this.input.focus()
      }
    }, 10))
  }
  //hide the modal window
  cancelHandle() {
    this.setState({
      visible: false,
    });
  }
  //submit the input notes
  okHandle() {
    const words = this.input.state.value; //use ref (Be Careful!)
    if (!words) {
      Modal.error({
        centered: true,
        mask: true,
        title: 'please write some words'
      });
    }
    else {
      this.props.onAddNotes(words)
      this.setState({
        visible: false,
      });
    }
  }

  render() {
    const notes = this.props.dataSource;
    // let this = this;
    return (
      <List
        size="small"
        header={<a href="javascript:;" onClick={this.showInput.bind(this)}>Add a note</a>}
        bordered
        dataSource={notes}
        itemLayout='horizontal'
        renderItem={item => (
          <div>
            <List.Item
              actions={[<a style={{ display: this.state.toggle }} onClick={() => { this.props.onDeleteNotes(item) }}>delete</a>]}
              onMouseOver={() => this.setState({ toggle: 'inline' })}
              onMouseOut={() => this.setState({ toggle: 'none' })}
            >
              <Typography.Text mark>[Note]</Typography.Text> {item}
            </List.Item>
            <Modal
              centered={true}
              mask={false}
              title="Please add some notes"
              visible={this.state.visible}
              onOk={() => this.okHandle()}
              onCancel={() => this.cancelHandle()}
            >
              <Input placeholder="input notes here"
                onPressEnter={() => this.okHandle()}
                ref={(input) => this.input = input}
              >
              </Input>
            </Modal>
          </div>
        )}
      />
    )
  }
}

export default NoteList;
