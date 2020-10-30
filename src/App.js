import React from 'react';
import './App.css';
import Display from './display.js'
import Buttons from './Buttons.js'


class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display: "0",
      clickedNumber: false,
      clickedOperator: false,
      clickedDecimal: false,

    }
  
   this.handleClear = this.handleClear.bind(this)
   this.inputNums = this.inputNums.bind(this)
   this.doEquals = this.doEquals.bind(this)
   this.inputOperator = this.inputOperator.bind(this)
   this.inputDecimal = this.inputDecimal.bind(this)
  }

  handleClear(){
    this.setState({display: 0,
    clickedNumber: false,
    clickedOperator: false,
    clickedDecimal: false})
  }
 
  inputNums(Buttons){
    if(!this.state.clickedNumber && Buttons.target.innerText !== "0")
    {this.setState({display: Buttons.target.innerText,
    clickedNumber: true,
    clickedDecimal: false})}

    else if(this.state.clickedNumber){
      this.setState({display: this.state.display + Buttons.target.innerText,
      })
    }
  }
  inputOperator(operator){
  if(!this.state.clickedOperator){
    this.setState({
    display:  this.state.display + operator.target.innerText,
    clickedDecimal: false })
  }

  }

  inputDecimal(decimal){
    if(!this.state.clickedDecimal){
      this.setState({
        display: this.state.display + decimal.target.innerText,
        clickedDecimal: true,
        clickedNumber: true,
        clickedOperator:false
      })
    }
  }
doEquals(){
  let opsArr = ["+","-","*","/"]
  let arr = this.state.display.split("")
  
  let count = 0
  for (let i=0; i<arr.length;i++){
  for (let j=0; j<opsArr.length; j++){
    if(arr[i] === opsArr[j]){
      count++
    }
}
  }
  if(count >= 1 && arr.length >= 2){
    console.log("nice")
  }
}
 
  render(){
    const buttonsData = 
    [{id:"zero",value: "0"},
    {id:"one", value: "1"},{id:"two",value: '2'},
    {id:"three",value: "3"},{id:"four",value: "4"},{id:"five",value: "5"},
    {id:"six",value: "6"},{id:"seven",value: "7"},{id:"eight",value: "8"},
    {id:"nine",value: "9"}];

    const operators = [{
      id:"add", value: "+"},{ id:"subtract", value: "-"
    },{id:"multiply", value: "*"},{id:"divide", value: "/"}]
    return(
    <div className = "App">
      <Display
        display = {this.state.display}
        />

       {buttonsData.map((data)   =>  
       (<Buttons
       id = {data.id}
       name = {data.value} 
       key = {data.id}
       onClick = {this.inputNums}                                    
       />
       )) }

<Buttons
    id = "decimal"
    onClick = {this.inputDecimal}
    name = "."
    />

   {operators.map((operator) =>(<Buttons 
      id = {operator.id}
      name = {operator.value}
      key = {operator.id}
      onClick = {this.inputOperator}
      />))}

<Buttons 
id= "equals"
name = "="
onClick = {this.doEquals}
/>

    <Buttons
    id = "clear"
    onClick = {this.handleClear}
    name = "Clear"
    />
    </div>
    

    )
  }
}

export default Calculator;
