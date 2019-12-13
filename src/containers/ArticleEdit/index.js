import React, { Component, Fragment } from 'react';
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
    getArticleById,
    editArticle
} = articlesActions;

class ArticleEdit extends Component {
    componentDidMount() {
        this.props.getArticleById(this.props.match.params.id);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {
            form,
            articleById,
            editArticle
        } = this.props;

        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const article = values;
                article.id = articleById.id;
                editArticle(article);

                notification['success']({
                    message: 'Успех',
                    description: 'Статья успешно изменена',
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

        const article = this.props.articleById;

        return (
            <Fragment>
                {
                    article ? (
                        <Form onSubmit={this.handleSubmit}>
                            <Typography.Title>
                                Редактирование статьи
                            </Typography.Title>
                            <Form.Item label='Заголовок'>
                                {getFieldDecorator('title', {
                                    initialValue: article.title,
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
                                    initialValue: article.shortDescription,
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
                                    initialValue: article.longDescription,
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
                                    Изменить
                                </Button>
                            </Form.Item>
                        </Form>
                    ) : null
                }
            </Fragment>
        )
    }
}

export default connect(
    state => ({
        articleById: state.articles.articleById
    }),
    {
        getArticleById,
        editArticle
    }
)
(Form.create()(ArticleEdit));