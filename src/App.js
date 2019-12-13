import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import ArticlesList from './containers/ArticlesList';
import ArticleCreate from './containers/ArticleCreate';
import ArticleCard from './containers/ArticleCard';
import ArticleEdit from './containers/ArticleEdit';
import { Layout } from 'antd';

import './App.scss';

const {
    Header,
    Content
} = Layout;

class App extends Component {
    componentDidMount() {
        const storage = window.localStorage;

        if (!storage.getItem('articles')) {
            storage.setItem('articles', JSON.stringify([]))
        }
    }

    render() {
        return (
            <Layout className='layout'>
                <Header className='header'>
                    <div className='header__menu'>
                        <Link className='header__menu-item' to='/'>
                            Главная
                        </Link>
                        <Link className='header__menu-item' to='/create'>
                            Добавить статью
                        </Link>
                    </div>
                </Header>
                <Content className='content'>
                    <Switch>
                        <Route
                            exact
                            path={'/'}
                            render={(props) => <ArticlesList {...props} />}
                        />
                        <Route
                            path={'/article/:id'}
                            render={(props) => <ArticleCard {...props} />}
                        />
                        <Route
                            path={'/article_edit/:id'}
                            render={(props) => <ArticleEdit {...props} />}
                        />
                        <Route
                            path={'/create'}
                            render={(props) => <ArticleCreate {...props} />}
                        />
                    </Switch>
                </Content>
            </Layout>
        );
    }
}

export default App;
