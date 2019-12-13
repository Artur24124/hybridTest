import React, { Component } from 'react';
import {
    Form,
    Input,
    Button,
    Typography
} from 'antd';

const { Title } = Typography;

class CommentCreate extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const {
            createComment,
            form
        } = this.props;

        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.id = Math.random().toString(36)
                    .substr(2, 9);
                createComment(values);
                form.resetFields();
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Title level={4}>Добавить комментарий:</Title>
                <Form.Item label='Имя'>
                    {getFieldDecorator('name', {
                        rules: [
                            {
                                required: true,
                                message: 'Пожалуйста, заполните поле - Имя',
                            },
                        ],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label='Комментарий'>
                    {getFieldDecorator('text', {
                        rules: [
                            {
                                required: true,
                                message: 'Пожалуйста, заполните поле - Комментарий',
                            },
                        ],
                    })(
                        <Input.TextArea />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(CommentCreate);