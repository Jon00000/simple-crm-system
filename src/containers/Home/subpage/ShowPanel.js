import React, { Component } from 'react';
import Table from '../../../components/Table';
import { message } from 'antd';
import {
  deleteCustomerFetch, deleteNoteFetch,
  updateFetch
} from '../../../fetch/crud';

class ShowPanel extends Component {

  deleteRow(id) {

    deleteCustomerFetch(id)
      .then(() => {
        let results = this.props.lists.filter((item) => {
          return item.id !== id;
        })
        this.props.onHandleResults(results)
      })
      .then(() => message.success('Customer successfully deleted !'))
  }
  deleteNotes(note, record) {
    const newNotes = record.notes.filter((v) => {
      return v !== note
    })
    record.notes = newNotes;
    deleteNoteFetch(record)
      .then(() => {
        let results = this.props.lists;
        results.forEach((item) => {
          if (item.id === record.id) item = record
        })
        this.props.onHandleResults(results)
      })
      .then(() => message.success('Note successfully deleted !'))
  }

  addNotes(note, record) {

    record.notes.push(note);

    updateFetch(record).then(() => {
      let results = this.props.lists;
      results.forEach((item) => {
        if (item.id === record.id) item = record
      })
      this.props.onHandleResults(results)
    })
  }

  changeStatus(record) {

    updateFetch(record).then(() => {
      let results = this.props.lists;
      results.forEach((item) => {
        if (item.id === record.id) item = record
      })
      this.props.onHandleResults(results)
    }).then(() => {
      message.success('Status successfully changed!');

    })
  }

  updateCust(record) {
    console.log('show panel', record)
    updateFetch(record)
      .then(() => {
        let results = this.props.lists;
        results.forEach((item) => {
          if (item.id === record.id) item = record
        })
        this.props.onHandleResults(results)
      })
      .then(() => {
        message.success('Customer successfully changed!');
      })
  }

  render() {
    const dataSource = this.props.lists;

    return (
      <div >
        <Table dataSource={dataSource}
          onHandleDel={this.deleteRow.bind(this)}
          onHandleDelNotes={this.deleteNotes.bind(this)}
          onHandleAddNotes={this.addNotes.bind(this)}
          onHandleChangeStatus={this.changeStatus.bind(this)}
          onHandleUpdate={this.updateCust.bind(this)}
        ></Table>
      </div>
    );
  }
}

export default ShowPanel;
