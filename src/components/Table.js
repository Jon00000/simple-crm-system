import React from 'react';
import { Table, Divider, Modal, Select } from 'antd';
import NoteList from './NoteList';
import UpdateForm from './UpdateForm';

const Option = Select.Option;

class TableLayout extends React.Component {

    constructor() {
        super();
        this.state = {
            visible: false,
            formdata: {}
        }
    }

    showConfirm(row) {
        let that = this;
        Modal.confirm({
            title: 'Do you want to delete these items?',
            centered: true,
            mask: false,
            onOk() {
                that.props.onHandleDel(row.id);
            },
            onCancel() { },
        });
    }

    showUpdateWin(record) {
        this.setState({
            visible: true,
            formData: record,
        })
    }

    showConfirmChange() {
        let [row, state] = [...arguments];
        row.status = state; //update status
        this.props.onHandleChangeStatus(row);
        // let that = this;
        // Modal.confirm({
        //     title: "Do you want to change this customer's state?",
        //     onOk() {
        //         that.props.onHandleChangeState(row.id);
        //     },
        //     onCancel() { 
        //         debugger
        //         console.log(that.sel.props.defaultValue="aaa")
        //     },
        // });
    }

    comfirmUpdateHandle(value) {
        let record = this.state.formData;
        let newRecord = Object.assign(record, value);
        this.props.onHandleUpdate(newRecord);
        this.cancelHandle();
    }

    //取消
    cancelHandle() {
        this.setState({
            visible: false,
            formData: {}   //点击取消置空record对象
        });
    }

    render() {
        let that = this;
        const columns = [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            // sortDirections: ['ascend'],
            defaultSortOrder: ['ascend'],
        }, {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            filters: [{
                text: 'Prospective',
                value: 'Prospective'
            }, {
                text: 'Current',
                value: 'Current'
            }, {
                text: 'Non-Active',
                value: 'Non-Active'
            }],
            onFilter: (value, record) => record.status.indexOf(value) === 0,
            render: (text, record) => (
                <span>
                    <Select
                        size={'small'}
                        ref={(sel) => that.sel = sel}
                        defaultValue={text}
                        onChange={this.showConfirmChange.bind(this, record)}
                    >
                        <Option value="Prospective">Prospective</Option>
                        <Option value="Current">Current</Option>
                        <Option value="Non-Active">Non-Active</Option>
                    </Select>
                </span>
            )
        }, {
            title: 'TIME',
            dataIndex: 'time',
            key: 'time',
            // sorter: (a, b) => a.time - b.time,
            // defaultSortOrder: ['ascend'],
        }, {
            title: 'EMAIL',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="javascript:void(0);" onClick={this.showUpdateWin.bind(this, text)}>Edit</a>
                    <Divider type="vertical" />
                    <a href="javascript:void(0);" onClick={this.showConfirm.bind(this, text)}>delete</a>
                </span>
            ),
        }];
        return (
            <div >
                {/* <AddButton /> */}
                <Table dataSource={this.props.dataSource}
                    columns={columns}
                    rowKey='id'
                    expandedRowRender={(record) =>
                        <NoteList
                            dataSource={record.notes}
                            onDeleteNotes={(note) => (this.props.onHandleDelNotes(note, record))}
                            onAddNotes={(note) => (this.props.onHandleAddNotes(note, record))}
                        >
                        </NoteList>}
                >
                </Table>
                <Modal
                    centered={true}
                    mast={false}
                    title="Update Info"
                    visible={that.state.visible}
                    footer={null}
                    // onOk={() => this.okHandle()}
                    onCancel={() => this.cancelHandle()}
                >
                    <UpdateForm
                        record={this.state.formData}
                        comfirmHandle={this.comfirmUpdateHandle.bind(this)}
                    >
                    </UpdateForm>
                </Modal>

            </div>
        );
    }
}

export default TableLayout;
