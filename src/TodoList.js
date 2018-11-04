import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './index.css';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

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
                      dataSource={data}
                      renderItem={item =>(<List.Item>{item}</List.Item>)} />
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
        const inputValue = e.target.value;
        // this.setState(() => ({inputValue}));
        const action = {
            type: 'change_input_value',
            value: inputValue
        };
        store.dispatch(action);
    }

    handleBtnClick() {
        // this.setState((prevState) => ({
        //     inputValue: '',
        //     list: [...prevState.list, prevState.inputValue]
        // }));
        const action = {
            type: 'add_todo_item'
        };
        store.dispatch(action);
    }

    handleDeleteItem(index) {
        this.setState((prevState) => {
            prevState.list.splice(index, 1);
            return {list: prevState.list};
        });
    }

    handleStoreChanged() {
        this.setState(store.getState());
    }
}

export default TodoList;