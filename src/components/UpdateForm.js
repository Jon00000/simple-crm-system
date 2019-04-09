import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 15 }
};
class UpdateForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        const comfirmHandle =  this.props.comfirmHandle;
        const fieldsValue = this.props.form.getFieldsValue();

        //表单校验
        this.props.form.validateFields(function(errors,value){
            //校验通过
            if(!errors){
                comfirmHandle(fieldsValue); //获取当前表单数据并当做回调函数的参数传递给父组件
            }
        });

    }

    render() {
        // const { getFieldDecorator, getFeildsValue } = this.props.form;
        const { getFieldDecorator } = this.props.form;
        const { record } = this.props;

        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Item label="ID" {...formItemLayout} >
                    {getFieldDecorator(`id`, {
                        rules: [{
                            required: true, 
                            message: 'Input Customer ID!',
                        }],
                        initialValue : record ? record.id : ""
                    })(
                        <Input placeholder="please input Customer's ID" disabled={true}/>
                    )}
                </Form.Item>
                <Form.Item label="Name" {...formItemLayout}>
                    {getFieldDecorator(`name`, {
                        rules: [{
                            required: true,
                            message: "Input Customer's Name!",
                        }],
                        initialValue : record ? record.name : ""
                    })(
                        <Input placeholder="please input Customer's Name" />
                    )}
                </Form.Item>
                <Form.Item label="Email" {...formItemLayout}>
                    {getFieldDecorator(`email`, {
                        rules: [{
                            required: true,
                            message: "Input Customer's Email!",
                        }],
                        initialValue : record ? record.email : ""
                    })(
                        <Input placeholder="please input Customer's Email" />
                    )}
                </Form.Item>
                
                {/* <Form.Item label="Date">
                    {getFieldDecorator(`date`, {
                        rules: [{
                            required: false,
                            message: "Input Customer's Date!",
                        }],
                    })(
                        <RangePicker style={{ float: "left" }} />
                    )}
                </Form.Item> */}
                <FormItem wrapperCol={{ span: 10, offset: 10 }}>
                    <Button type="primary" htmlType="submit">
                        Confirm
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default UpdateForm = Form.create()(UpdateForm);