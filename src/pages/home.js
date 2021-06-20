import React, { Component } from 'react';
import Circle from '../component/circle';
import WorkList from '../component/workList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [
        {
          id: 1,
          color: 'red',
          des: 'this is desription'
        },
        {
          id: 2,
          color: 'yellow',
          des: 'this is desription'
        },
        {
          id: 3,
          color: 'green',
          des: 'this is desription'
        },
        {
          id: 4,
          color: 'blue',
          des: 'this is desription'
        },
        {
          id: 5,
          color: 'orange',
          des: 'this is desription'
        }
      ]
    }
  }
  
  render() {
    const { itemList } = this.state
    const removeItem = (id) => {
      const index = itemList.findIndex((item)=> item.id === id)
      itemList.splice(index, 1)
      this.setState(() => itemList)
    }
    const workList = itemList.map((item) =>{
      return (
        itemList.length > 1 ? <WorkList removeItem={removeItem} list={item} key={ item.id } /> : <p key='1'>bạn ko còn item nào.</p>
      )
    })
    return (
      <div>
        <h1>HOME</h1>
        <div className="wrap-content">
          <Circle seconds={20} size="100"/>
          <Circle seconds={30} size="150"/>
          <Circle seconds={40} size="200"/> 
        </div>
        <div className="work-list">
          <h3>Work list</h3>
          <div className="wrap-work">
            { workList }
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
