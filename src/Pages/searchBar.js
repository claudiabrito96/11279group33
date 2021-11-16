import React from 'react';
import search from "../Components/search"
import JSONDATA from './MOCK_DATA.json'


class searchBar extends React.Component{
    render (){
        return (
            <div>
            <input type = "text" placeholder="Search..." />
            {JSONDATA.map((val,key) =>{
                return(
                    <div className="user" key ={key}>
                        {val.first_name} 
                        {val.last_name} 
                        {val.energy}
                    </div>
                );
            })}
           </div>
        )
    }
}

export default searchBar