import React from 'react';
import {List} from 'antd';

class ResultList extends React.Component {
    state = {  }
    render() { 
        return ( 
        <List
            bordered
            dataSource={this.props.dataSource}
            renderItem={item => (<List.Item>{item}</List.Item>)} 
        /> );
    }
}

export default ResultList;
