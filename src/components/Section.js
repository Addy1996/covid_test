import React, { Component } from 'react';
import './Section.css'


class Section extends React.Component {
  constructor(props){
    super(props)
    this.state = { gender:'',age:'', job:""}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(event){
    const { gender,age, job } = this.state
    
    event.preventDefault()
    alert(`
      ____Timeline Test____\n
      เพศ : ${gender}
      อายุ : ${age} ปี
      อาชีพ : ${job}

    `)
    console.log(this.state)
  }
  
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  
    render() {
      return(
      <div className = "container">
        <form>
          <div className="div1" >
            <h2>ข้อมูลผู้ป่วย</h2>
            <label>เพศ<label className ="lable1">อายุ</label></label><br></br>
            <select className ="selectgender"  name='gender'value={this.state.gender} onChange = {this.handleChange} >
            <option >กรุณาเลือก</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
            </select>
            <input className ="input1 "type="number" name='age'  value={this.state.age} onChange = {this.handleChange} />
            <label>อาชีพ</label><br></br>
            <input className="inputjob" type="text" name='job'value={this.state.job} onChange = {this.handleChange}/>
          </div>
          <div className="div2" >
          <h3>ข้อมูลไทมไลน์</h3>
          <label>วันเวลา</label><br></br>
          <input type="datetime-local" className = "inputdate"  /> 
          <label>รายละเอียด</label><br></br>
          <textarea className = "inputdescription" /> 
          <button type ="submit" className ="btnsubmit" onClick={this.handleSubmit}>+ เพิ่มข้อมูล</button>
          </div>
        </form>
      </div>
        
      );
    }
  }
    
 


export default Section;