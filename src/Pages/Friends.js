import React from 'react';
import './Friends.css'


function Friends() {
  return (
    <>
      <div>
        <table>
            <tr>
                <th>Friend</th>
                <th>Energy Usage Today</th>
            </tr>
            <tr>
                <td>Daniel Casto</td>
                <td>50</td>
            </tr>
            <tr>
                <td>Taise Miyazumi</td>
                <td>51</td>
            </tr>
            <tr>
                <td>Claudia Brito</td>
                <td>55</td>
            </tr>
            <tr>
                <td>Julia Chancey</td>
                <td>49</td>
            </tr>
        </table>
      </div>
    </>
  );
}

export default Friends;