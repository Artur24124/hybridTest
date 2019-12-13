import React, { PureComponent } from 'react';

import {
    Typography,
    Button
} from 'antd';

import './style.scss';

const {
    Text
} = Typography;

class CommentList extends PureComponent {
    render() {
        const { comments } = this.props;

        return (
            <div className='comments'>
                {
                    comments.length > 0 ? (
                        comments.map((comment) => (
                            <div className='comments__item' key={comment.id}>
                                <Text className='comments__item-name'>
                                    <b>Имя:</b> {comment.name}
                                </Text>
                                <Text className='comments__item-text'>
                                    <b>Комментарий:</b> {comment.text}
                                </Text>
                                <Button
                                    type='danger'
                                    className='comments__item-button'
                                    onClick={() => this.props.deleteComment(comment.id)}
                                >
                                    Удалить
                                </Button>
                            </div>
                        ))
                    ) : 'Нету комментариев'
                }
            </div>
        )
    }
}

export default CommentList;