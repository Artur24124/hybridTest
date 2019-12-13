import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import * as articlesActions from '../../store/actions/articles';

import CommentCreate from '../../components/CommentCreate';
import CommentList from '../../components/CommentList';

import {
    Typography
} from 'antd';

import './style.scss';

const {
    Title,
    Text,
} = Typography;

const {
    getArticleById,
    editArticle
} = articlesActions;

class ArticleCard extends PureComponent {
    componentDidMount() {
        this.props.getArticleById(this.props.match.params.id)
    }

    deleteComment = (id) => {
        const article = this.props.articleById;
        article.comments = article.comments
            .filter((comment) => comment.id !== id);;
        this.props.editArticle(article);
        this.forceUpdate();
    };

    createComment = (comment) => {
        const article = this.props.articleById;
        article.comments = [...article.comments, comment];
        this.props.editArticle(article);
        this.forceUpdate();
    };

    render() {
        const { articleById } = this.props;

        return (
            <Fragment>
                {
                    articleById ? (
                        <div className='article'>
                            <Title level={3}>{articleById.title}</Title>
                            <Text>{articleById.longDescription}</Text>
                            <div className='article__comments'>
                                <Title level={4}>Комментарии:</Title>
                                <CommentList
                                    deleteComment={this.deleteComment}
                                    comments={articleById.comments}
                                />
                                <CommentCreate
                                    createComment={this.createComment}
                                />
                            </div>
                        </div>
                    ) : null
                }
            </Fragment>
        )
    };
}

export default connect(
    state => ({
        articleById: state.articles.articleById
    }),
    {
        getArticleById,
        editArticle
    }
)(ArticleCard);