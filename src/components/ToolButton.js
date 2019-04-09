import React from 'react';
import { Button } from 'antd';

class ToolButton extends React.Component {
  start() {
    console.log('add')
  }
  render() {
    let that = this;
    return (
      <div>
        <div style={{ marginBottom: 16, marginTop: 16,float:"left" }}>
          <Button
            type="primary"
            onClick={()=>that.start()}
            // disabled={!hasSelected}
            // loading={loading}
          >
            Add
          </Button>
        </div>
      </div>
    );
  }
}

export default ToolButton;