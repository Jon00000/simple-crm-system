import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Radio } from "antd";

class FormLayout extends Component {

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onHandleSubmit(values);
            }
        });

        
    }

    handleReset = () => {
        this.props.form.resetFields();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                <Row gutter={24}>
                    <Col span={10} key={0}>
                        {/* Customer's id */}
                        <Form.Item label="ID">
                            {getFieldDecorator(`id`, {
                                rules: [{
                                    required: false,
                                    message: 'Input Customer ID!',
                                },{
                                    pattern : /^(\d*)$/,message:'please input numbers'
                                }],
                            })(
                                <Input placeholder="please input Customer's ID" />
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={3} />
                    <Col span={10} key={1}>
                        {/* Customer's name */}
                        <Form.Item label="Name">
                            {getFieldDecorator(`name`, {
                                rules: [{
                                    required: false,
                                    message: "Input Customer's Name!",
                                }],
                            })(
                                <Input placeholder="please input Customer's Name" />
                            )}
                        </Form.Item>
                    </Col>
                   {/* { <Col span={12} key={2}>
                        <Form.Item label="Date">
                            {getFieldDecorator(`date`, {
                                rules: [{
                                    required: false,
                                    message: "Input Customer's Date!",
                                }],
                            })(
                                <RangePicker style={{float: "left"}}/>
                            )}
                        </Form.Item>
                    </Col>} */}
                    <Col span={12} key={3} >
                        {/* Customer's status */}
                        <Form.Item label="Status">
                            {getFieldDecorator(`status`, {
                                initialValue: 'All',
                                rules: [{
                                    required: true,
                                    message: "Choose Customer's Status!",
                                }],
                            })(
                                <Radio.Group size='default' buttonStyle='solid' style={{float: "left"}}>
                                    <Radio.Button value="All">All</Radio.Button>
                                    <Radio.Button value="Prospective">Prospective</Radio.Button>
                                    <Radio.Button value="Current">Current</Radio.Button>
                                    <Radio.Button value="Non-Active">Non-Active</Radio.Button>
                                </Radio.Group>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit">Search</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default FormLayout = Form.create()(FormLayout);
