import React, { Component } from 'react';

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.list.id,
      color: this.props.list.color,
      des: this.props.list.des
    }
  };
  delItem (id) {
    this.props.removeItem(id)
  };
  render() {
    const { id, color, des } = this.state
    return (
      <div className="work-iteam">
        <div className="color" style={{backgroundColor: color }}></div>
        <div>
          <h5>This is title { id }</h5>
          <div className="desription">{ des }</div>
        </div>
        <div onClick={()=>this.delItem(id)} className="delete">X</div>
      </div>
    )
  }
}
export default WorkList;
