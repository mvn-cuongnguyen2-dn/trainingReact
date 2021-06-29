import React, { Component } from 'react'

class TableData extends Component {
  constructor(props) {
    super(props);
  }
  handleRemove = () => {
    this.props.removeItem(this.props.data);
  }
  render() {
    const data = this.props.data;
    const inIndex = this.props.idIndex;
    return (
      <tr key={inIndex}>
        <td>{data.email}</td>
        <td>{data.country}</td>
        <td>{data.gender === '0' ? 'Male' : 'Female'}</td>
        <td>{data.other}</td>
        <td className="txt-center">
          <button className="btn-transparent" onClick={() => this.handleRemove}><i className="fa fa-trash"></i></button>
        </td>
      </tr>
    )
  }
}
export default TableData;