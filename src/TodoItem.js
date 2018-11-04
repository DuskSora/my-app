import React,{ Component } from 'react';
import propTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    render() {
        const { content, test } = this.props;
        return <li onClick={this.handleDeleteItem}>{test}---{content}</li>;
    }

    handleDeleteItem() {
        const { index, handleDeleteItem } = this.props;
        handleDeleteItem(index);
    }
}

TodoItem.propTypes = {
    test : propTypes.string.isRequired,
    content : propTypes.string,
    index : propTypes.number
};

TodoItem.defaultProps = {
    test : '333'
};

export default TodoItem;