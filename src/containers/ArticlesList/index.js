import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as articlesActions from '../../store/actions/articles';

import {
    Button,
    Typography
} from 'antd';

import './style.scss';

const {
    Title,
    Text
} = Typography;

const {
    getArticles,
    deleteArticle
} = articlesActions;

class ArticlesList extends Component {
    componentDidMount() {
        this.props.getArticles();
    }

    renderArticles = () => {
        const { articles } = this.props;

        return articles.map((article) => (
           <div key={article.id} className='articles__item'>
               <Title level={3}>
                   <Link to={`/article/${article.id}`}>{article.title}</Link>
               </Title>
               <Text>Краткое описание: {article.shortDescription}</Text>
               <Text>Комментарии: {article.comments.length}</Text>
               <div className='articles__item-buttons'>
                   <Button type='primary'>
                       <Link to={`/article_edit/${article.id}`}>Редактировать</Link>
                   </Button>
                   <Button
                       type='danger'
                       onClick={() => this.props.deleteArticle(article.id)}
                   >
                       Удалить
                   </Button>
               </div>
           </div>
        ));
    };

    render() {
        const {
            articles
        } = this.props;

        const content = articles.length > 0 ?
            this.renderArticles()
            : <Title level={4}>Статей нету</Title>

        return (
            <div className='articles'>
                <Title level={2}>Статьи</Title>
                {content}
            </div>
        )
    }
}

export default connect(
    state => ({
        articles: state.articles.articles
    }),
    {
        getArticles,
        deleteArticle
    }
)
(ArticlesList);