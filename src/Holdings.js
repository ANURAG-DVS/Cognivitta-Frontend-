import { useEffect, useState } from "react";
import UserData from "./components/UserData.js";
import axios from "axios";

const API = "http://localhost:8000/";

const Holdings = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(API);
    if (response.data.length > 0) {
      setUsers(response.data);
    }
    console.log(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <h1>Holdings</h1>
      <table>
        <thead>
          <tr>
            <th>Trading_Symbol</th>
            <th>Quantity</th>
            <th>Avg_Price</th>
            <th>LTP</th>
            <th>P&L</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default Holdings;
