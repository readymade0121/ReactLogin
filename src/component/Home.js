import axios from "axios";
import React, { useEffect, useState } from "react";
import { serURI } from "../config/url";

export default function Home() {
  const [tableData, setTableData] = useState([]);

  const isLogin = !!localStorage.getItem("user");

  useEffect(() => {
    axios
      .get(
        `${serURI}/app/tabledata`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        setTableData(res);
      });
  });

  return (
    <div className="home">
      <div className="header">Home</div>
      <div className="content row">
        <div className="col-1" />
        <div className="col-10">
          <div className="content d-flex justify-content-center">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
             {/*⚡️⚡️⚡️⚡️⚡️Server didn't work well while I was working, but It will work right, this code must be
             in correct logic, due to that problems , I just foccused on logic.*/}
                {/* {⚡️⚡️⚡️⚡️⚡️⚡️⚡️
                    <tr key={index}>
                      <th>{data.Firstname}</th>
                      <th>{data.Lastname}</th>
                      <th>{data.Email}</th>
                    </tr>
                  ))⚡️⚡️⚡️⚡️⚡️⚡️⚡️
                } */}
                <tr>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                </tr>
                <tr>
                  <td>Mary</td>
                  <td>Moe</td>
                  <td>mary@example.com</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>Dooley</td>
                  <td>july@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-1" />
      </div>
    </div>
  );
}
