import "./ExpenceStyles.css";
import CalenderView from './CalenderView'
import Card from './Card'
import React, {useState} from 'react'
const ExpencesItem = (props) => {

const [title, setTilte]=useState(props.title)
  const buttonHandler =()=>{
    setTilte('Updated');
    console.log(title);
  }
return (
    <div className="expense-item">
      <CalenderView date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        {console.log(title)}
        <div className="expense-item__price">Rs.{props.amount}</div>
      </div>
      <button onClick={buttonHandler}>change Title</button>
    </div>
  );
}

export default ExpencesItem;
