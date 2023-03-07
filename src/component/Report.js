import React, { useState } from "react";
import axios from "axios";
export default function Login() {
  const [number_value, setReport] = useState("");
  const [jpg_FILE, setImg] = useState("");
  const [dataField,setDataField] =useState('');

  const handleNumberValueChange = (e) => {
    setReport(e.target.value);
  };

  const handleJpgFileChange = (e) => {
    setImg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reportForm ={
      number_value:number_value,
      jpg_FILE:jpg_FILE
    }
    axios
    .get(
      `https://paul.blueboxonline.com/api/v1/report`,
      {reportForm},
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res);
      setDataField(res)
    });
  };

  return (
    <div className="report">
      <div className="header">Report</div>
      <div className="content d-flex justify-content-center align-items-center mt-1">
        <form className="report-form">
          <input
            type="text"
            value={number_value}
            className="form-control form-control mt-"
            placeholder="value"
            onChange={handleNumberValueChange}
          />
          <input
            type="file"
            value={jpg_FILE}
            id="jpg_FILE"
            accept="image/*"
            name="jpg_FILE"
            className="form-control form-control"
            onChange={handleJpgFileChange}
          />
          <button
            type="submit"
            className="btn btn-primary btn-submit mb-5 mt-1"
            onClick={handleSubmit}
          >
            Generate Report
          </button>
          
        </form>
        
      </div>
      <div className="container">
        <textarea className="form-control form-control container w-100 h-auto m-auto" rows={"8"}>
              {dataField}
        </textarea>
      </div>
    </div>
  );
}
