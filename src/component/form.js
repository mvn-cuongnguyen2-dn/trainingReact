import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TableData from './tableData';

const Form = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    country: '',
    gender: '0',
    des: ''
  });
  const [listData, setListData] = useState([]);
  const [textError, setTextError] = useState('');

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setForm({
      ...form,
      [name]: value
    });
  }
  const handleRemove = (index) => {
    listData.splice(index, 1)
    setListData([...listData])
  }
  const handleAddUser = () => {
    if(form.email && form.password && form.country && form.gender && form.other) {
      setListData([...listData,form]);
      setTextError('');
    }else{
      setTextError('Plz enter all data');
    }
  }
  return (
    <div className="form-re">
      <div className="form-group">
        <label>Email address</label>
        <input 
          type="email" 
          className="form-control" 
          name="email"
          placeholder="name@example.com" 
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input 
          type="password" 
          className="form-control" 
          name="password"
          placeholder="name@example.com" 
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-group">
        <label>You country</label>
        <select className="form-control" name="country" value={form.country} onChange={(e) => handleChange(e)}>
            <option value="">Please choose your country</option>
            <option value="Vietnam">Viet Nam</option>
          <option value="usa">USA</option>
        </select>
      </div>
      <div className="d-flex">
        <div className="form-radio">
          <input 
            type="radio"
            name="gender"
            id="male"
            value="0" 
            checked={form.gender === '0'}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="male" className="mr-4 ml-2">Male</label>
        </div>
        <div className="form-radio">
          <input 
            type="radio"
            name="gender"
            id="female"
            value="1" 
            checked={form.gender === '1'}
            onChange={(e) => handleChange(e)} 
          />
          <label className="ml-2">Female</label>
        </div>
      </div>
      <div className="form-group mt-2">
        <label>Other information</label>
        <textarea className="form-control" name="other" rows="3" onChange={(e) => handleChange(e)} />
      </div>
      <div className="buttons-set">
        <button type="button" className="btn btn-primary w-100" onClick={Button} 
        onClick={() => 
          handleAddUser()
        }>Submit</button>
        {textError && (
          <div className="error text-center my-2 d-block">{textError}</div>
        )}
      </div>

      <div className="list-data mt-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Email</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Other information</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {listData && listData.length > 0 ? listData.map((item, index) =>
            <TableData key={index} data={item} idIndex={index} removeItem={(e) => handleRemove(e)}/>
          ):(<tr><td className="text-center" colSpan="5">No data</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Form;