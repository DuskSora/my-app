import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

const TodoListUI = (props) => (
    <Fragment>
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
            <label htmlFor="insertArea">输入内容</label>
            <Input placeholder="text" style={{width:'20%'}} id="insertArea" className="test" value={props.inputValue} onChange={props.handleInputChange}></Input>
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
        </div>
        <ul>
            {props.getListItem(props.list)}
        </ul>
        <List size="small"
            style={{width:'500px'}}
            bordered
            dataSource={props.list}
            renderItem={(item, index) =>(<List.Item onClick={() => {props.handleDeleteItem(index);}}>{item}</List.Item>)} />
    </Fragment>
);

// class TodoListUI extends Component {
//     render() {
//         return ( 
//         <Fragment>
//             <div style={{marginTop:'10px',marginLeft:'10px'}}>
//                 <label htmlFor="insertArea">输入内容</label>
//                 <Input placeholder="text" style={{width:'20%'}} id="insertArea" className="test" value={this.props.inputValue} onChange={this.props.handleInputChange}></Input>
//                 <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//             </div>
//             <ul>
//                 {this.props.getListItem(this.props.list)}
//             </ul>
//             <List size="small"
//                   style={{width:'500px'}}
//                   bordered
//                   dataSource={this.props.list}
//                   renderItem={(item, index) =>(<List.Item onClick={index => {this.props.handleDeleteItem(index);}}>{item}</List.Item>)} />
//         </Fragment>);
//     }
// }

export default TodoListUI;