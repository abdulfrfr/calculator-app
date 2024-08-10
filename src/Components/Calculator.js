import React, { useState } from 'react';


function Calc () {
const [isDone, setIsDone] = useState(false)
const [change, setChange] = useState(false)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const [getNum1, setGetNum1] = useState('')
const [getNum2, setGetNum2] = useState('')
const [sign, getSign]= useState('')
const [total, setTotal] = useState('')


function handleInputValue(event){
const num = event.target.innerHTML

if(isDone === true){
    setGetNum2(()=> Number(getNum2 + num))
} else if(isDone === false){
    setGetNum1(()=> Number(getNum1 + num))
} else{
    return null
}
console.log(num);

}


function handleInputChange(event){
    const value = event.target.innerHTML
    setIsDone(!isDone)
    setChange(false)
    getSign(value)

    console.log(getNum1);
    console.log(getNum2);
    console.log(value);
   
}

function evaluation(num1, num2, operator){

if(operator === '+'){
    setTotal(num1 + num2)
} else if (operator === '-'){
    setTotal(num1 - num2)
} else if (operator === '*'){
    setTotal(num1 * num2)
} else if(operator === '/'){
    setTotal(num1 / num2)
} else{
    return null
}

setChange(true)

setGetNum1('')
setGetNum2('')
getSign('')

console.log(total);

}

function clearAll(){
    setGetNum1('')
    setGetNum2('')
    getSign('')
    setIsDone(false)
    setTotal('')
    setChange(false)
}


    return(
        <div>
        <div className='top'>
        <h1 className='logo'>Calc</h1>
        </div>
        <div className='inputs'>
         
        {change? 
        <input className='firstInput' type='text' name='num' value={total}/> 
        :
        <input className='firstInput' type='text' name='num' value={isDone ? getNum2 : getNum1 }/>}
        
        
        </div>
        <div className='figures'>
        <div className='numbers'>
        {numbers.map((eachNum, index)=>{return <button className="btn" id={index} key={index} onClick={handleInputValue}>{eachNum}</button>})}
        <button className='btn operators' onClick={handleInputChange}>+</button>
        <button className='btn operators' onClick={handleInputChange}>-</button>
        
        </div>
        
        </div>
        <div className='opt'>
        <button className='btn btn-opt equal' onClick={()=> evaluation(getNum1, getNum2, sign)}>=</button>
        <button className='btn btn-opt' onClick={clearAll}>AC</button>
        <button className='btn operators' onClick={handleInputChange}>X</button>
        <button className='btn btn-opt' onClick={handleInputChange}>/</button>

        </div>
        </div>
    );
}

export default Calc;
