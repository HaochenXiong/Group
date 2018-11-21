import React, { Component } from 'react';
import { Layout, Icon, Row, Col, Cascader, Card, InputNumber} from 'antd';
import { List, Button} from 'antd';
import './App.css';

import ResultList from './Components/ResultList.js';

const { Content } = Layout;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num:'', 
      results: [],
      loading: false,
      hasMore: true,

      options : [
        {
        value: 'Class 1',
        label: 'Class 1',
        number: 24,
        class1: ['Amy','Jenny','Ben','Lily','Alice','John','Robert','Angel','James','Jacky','Nathan','Willow']
        },
        {
        value: 'Class 2',
        label: 'Class 2',
        number:14,
        class2: ['Onna','Jackson','Matt','Yuchen','sheldon','Dargon','Nick','Iris','Krystal']
        }
      ],
      
    };
  }

  groupMaker = (list,num) => {
    list=this.state.options[0].class1;
    num=list.length/document.getElementById("perGroup").value;
    let n=list.length-1;
    let length=n/num;
    let list1=list,list2=[];
    for(let i=0;i<num;i++){
            let newlist=[];
            for(let j=0;j<length;j++){
                let id=Math.ceil(Math.random(0,list1.length-1)*list1.length-1);
                newlist.push(list1[id]);
                list1.splice(id,1);
            }
            let item = newlist.join(', ');
            list2.push(item);
    };
    this.setState({
      results: list2,
      num: num
    });
    console.log(list2);
}


  render() {
    return (
      <div className='App'>
      <Layout>
        <Content>        
          <Row type="flex" justify="center" align="middle">
            <Col span={2}>
              <Icon type="question-circle" 
                theme="twoTone" 
                twoToneColor="#eb2f96"
                className='icon'/>
              </Col>
            <Col offset={1}>
              <h1 className='title'> Group Maker </h1>
            </Col>
          </Row>         
        </Content>

      <Card className='card' bordered={false}>
        <Cascader addonBefore={<Icon type="usergroup-add" size='large'/>} 
                  placeholder="Select Class"
                  options={this.state.options}
                  size='large'/>
      </Card>
      <br/>

      <Card className='card' bordered={false}>
        <Row type="flex" justify="center" align="middle">
          <Col> 
            <label style={{fontSize: 12}}>Members Per Group:</label>
          </Col>
          <Col offset={1}>
            <InputNumber min={2} 
                    max={10} 
                    step={1} 
                    defaultValue = '2'
                    size='large'
                    id='perGroup'/>
          </Col>
        </Row>
      </Card>
      <br/>

      <div>
        <Button type='primary' class="button"
        onClick={this.groupMaker}> 
        Make Groups
        </Button>
      </div>
      <br/>

      <Card className='card' bordered={false}>
        <h1 className='resultTitle'>Results</h1>
        <div>
          <ResultList dataSource={this.state.results}/>
      </div>
      </Card>
      <br/>

      </Layout>

      </div>
    );
  }
}

export default App;