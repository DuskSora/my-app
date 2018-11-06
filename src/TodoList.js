import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoListUI from './TodoListUI';
import './index.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction, getTodoList, getInitList } from './store/actionCreator';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleStoreChanged = this.handleStoreChanged.bind(this);
        this.initListData = this.initListData.bind(this);
        store.subscribe(this.handleStoreChanged);
    }

    render() {
        return (
            <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleDeleteItem={this.handleDeleteItem}
            getListItem={this.getListItem}/>
        );
    }

    componentDidMount() {
        // store.dispatch(getTodoList());
        store.dispatch(getInitList());
    }

    getListItem(list) {
        return  list.map((item, index) => {
            return <TodoItem key={index} content={item} index={index} handleDeleteItem={this.handleDeleteItem}/>;
        });
    }

    handleInputChange(e) {
        // const inputValue = e.target.value;
        // this.setState(() => ({inputValue}));
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: inputValue
        // };
        store.dispatch(getInputChangeAction(e.target.value));
    }

    handleBtnClick() {
        // this.setState((prevState) => ({
        //     inputValue: '',
        //     list: [...prevState.list, prevState.inputValue]
        // }));
        // const action = {
        //     type: ADD_TODO_ITEM
        // };
        store.dispatch(getAddItemAction());
    }

    handleDeleteItem(index) {
        // this.setState((prevState) => {
        //     prevState.list.splice(index, 1);
        //     return {list: prevState.list};
        // });
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     value: index
        // };
        store.dispatch(getDeleteItemAction());
    }

    handleStoreChanged() {
        this.setState(store.getState());
    }

    initListData(data) {
        store.dispatch(initListAction(data));
    }
}

export default TodoList;