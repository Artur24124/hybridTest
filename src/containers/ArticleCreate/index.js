import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Form,
    Input,
    Button,
    Typography,
    notification
} from 'antd';

import * as articlesActions from '../../store/actions/articles';

const {
    createArticle
} = articlesActions;

class ArticleCreate extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const {
            createArticle,
            form
        } = this.props;

        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.id = Math.random().toString(36)
                    .substr(2, 9);
                values.comments = [];
                createArticle(values);
                form.resetFields();

                notification['success']({
                    message: 'Успех',
                    description: 'Статья успешно добавлена',
                });
            } else {
                notification['error']({
                    message: 'Ошибка',
                    description: 'Произошла ошибка при сохранении.',
                });
            }
        });
    };

    render() {
        const {
            form
        } = this.props;
        const { getFieldDecorator } = form;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Typography.Title>
                    Создание статьи
                </Typography.Title>
                <Form.Item label='Заголовок'>
                    {getFieldDecorator('title', {
                        rules: [
                            {
                                required: true,
                                message: 'Пожалуйста, заполните поле - Заголовок',
                            },
                        ],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label='Краткое описание'>
                    {getFieldDecorator('shortDescription', {
                        rules: [
                            {
                                required: true,
                                message: 'Пожалуйста, заполните поле - Краткое описание',
                            },
                        ],
                    })(
                        <Input.TextArea />
                    )}
                </Form.Item>
                <Form.Item label='Полное описание'>
                    {getFieldDecorator('longDescription', {
                        rules: [
                            {
                                required: true,
                                message: 'Пожалуйста, заполните поле - Полное описание',
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

export default connect(
    state => ({
    }),
    {
        createArticle
    }
)
(Form.create()(ArticleCreate));