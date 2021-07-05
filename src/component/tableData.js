import React from 'react'

const TableData = (props) =>  {
  const handleRemove = () => {
    props.removeItem(props.idIndex);
    console.log('ádas');
  }
  const data = props.data;
  const inIndex = props.idIndex;
  return (
    <tr key={inIndex}>
      <td>{data.email}</td>
      <td>{data.country}</td>
      <td>{data.gender === '0' ? 'Male' : 'Female'}</td>
      <td>{data.other}</td>
      <td className="txt-center">
        <button className="btn-transparent" onClick={() => handleRemove()}><i className="fa fa-trash"></i></button>
      </td>
    </tr>
  )
}
export default TableData;