import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
function Cards (props){


return(    <>

    <div className ="cards">
    <div className ="card">
    <img src={props.img} alt="mypic" className="card_img"/>
    <div className = "card_body">
    <span className="card_category">{props.category}</span>
    <h3 className ="card_title">{props.title}</h3>
    <a href={props.link} target="_blank">
    <button>watch now</button></a></div></div>
    
    </div>
    </>)
}

export default Cards;