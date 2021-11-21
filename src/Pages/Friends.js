import React from 'react';
import './Friends.css'


function Friends() {
  return (
    <>
      <div className = "searchB">
      <input type = "text" placeholder="Search..." />
        <table>
            <tr>
                <th>Friend</th>
                <th>Energy Usage Today</th>
            </tr>
            <tr>
                <td>Daniel Casto</td>
                <td>9800</td>
            </tr>
            <tr>
                <td>Taise Miyazumi</td>
                <td>9500</td>
            </tr>
            <tr>
                <td>Claudia Brito</td>
                <td>8650</td>
            </tr>
            <tr>
                <td>Julia Chancey</td>
                <td>9400</td>
            </tr>
        </table>
      </div>
    </>
  );
}

export default Friends;