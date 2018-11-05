import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './index.css';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleStoreChanged = this.handleStoreChanged.bind(this);
        store.subscribe(this.handleStoreChanged);
    }

    render() {
        return (
            <Fragment>
                <div style={{marginTop:'10px',marginLeft:'10px'}}>
                    <label htmlFor="insertArea">输入内容</label>
                    <Input placeholder="text" style={{width:'20%'}} id="insertArea" className="test" value={this.state.inputValue} onChange={this.handleInputChange}></Input>
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>
                <ul>
                    {this.getListItem()}
                </ul>
                <List size="small"
                      style={{width:'500px'}}
                      bordered
                      dataSource={this.state.list}
                      renderItem={(item, index) =>(<List.Item onClick={this.handleDeleteItem.bind(this, index)}>{item}</List.Item>)} />
            </Fragment>
        );
    }

    componentDidMount() {
        axios.get('../api/todoList.json').then((data) => {

        }).catch(() => {

        });
    }

    getListItem() {
        return  this.state.list.map((item, index) => {
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
}

export default TodoList;