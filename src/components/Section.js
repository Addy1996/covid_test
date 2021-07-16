import React from "react";
import './Section.css'

const Section = ()=> {
    
    return <div className = "container">
        <form>
        <div className="div1" >
            <h2>ข้อมูลผู้ป่วย</h2>
            <p>เพศ</p>
            <select className ="selectgender">
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
            </select>
            <input className ="input1 "type="text" name="name" />
            <p>อาชีพ</p>
            <input className="inputjob" type="text" name="name" />
        </div>
    <div className="div2" >
    <h3>ข้อมูลไทมไลน์</h3>
    <p>วันเวลา</p>
    <input type="datetime-local" className = "inputdate"  /> 
    <p>รายละเอียด</p>
    <textarea className = "inputdescription" /> 
    <button type ="submit" className ="btnsubmit">+ เพิ่มข้อมูล</button>
    </div>
    </form>
</div>
}
export default Section;