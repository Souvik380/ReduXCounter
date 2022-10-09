import React from 'react'
import {connect} from "react-redux"

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
    flag: state.count.flag
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMin:  (qty) => dispatch({ type: "SET_MIN" ,payload:qty}),
    setMax:  (qty) => dispatch({ type: "SET_MAX" ,payload:qty}),
    reset:    ()=>dispatch({type:"reset"}),
    increase: ()=>dispatch({type:"increase"}),
    decrease: ()=>dispatch({type:"decrease"}),
  };
};

function Counter(props){
    return (
      <div className='flex flex-col justify-center space-y-14'>
          <h1 className='text-8xl'>{props.count}</h1>
          {props.flag && <p className='text-2xl font-bold'>Max Value reached</p>}
          <div className='flex justify-around '>
              <div>
                  <p className='text-5xl font-bold mb-6'>Steps</p>
                  <div className="buttons-step space-x-6 flex ">
                      <button className="bg-green-300 hover:bg-gradient-to-r from-lime-500 to-orange-500  font-bold text-6xl h-[100px] w-[100px] border-4 border-black-600 rounded-lg" onClick={()=>props.setMin(5)}>5</button>
                      <button className="bg-green-300 hover:bg-gradient-to-r from-lime-500 to-orange-500 font-bold text-6xl h-[100px] w-[100px] border-4 border-black-600 rounded-lg" onClick={()=>props.setMin(10)}>10</button>
                      <button className="bg-green-300 hover:bg-gradient-to-r from-lime-500 to-orange-500 font-bold text-6xl h-[100px] w-[100px] border-4 border-black-600 rounded-lg" onClick={()=>props.setMin(15)}>15</button>
                  </div>
              </div>

              <div>
                  <p className='text-5xl font-bold mb-6'>Max</p>
                  <div className="buttons-max space-x-6 flex">
                      <button className="bg-green-300 hover:bg-gradient-to-r from-lime-500 to-orange-500 font-bold text-6xl h-[100px] w-[100px] border-4 border-black-600 rounded-lg" onClick={()=>props.setMax(15)}>15</button>
                      <button className="bg-green-300 hover:bg-gradient-to-r from-lime-500 to-orange-500 font-bold text-6xl h-[100px] w-[100px] border-4 border-black-600 rounded-lg" onClick={()=>props.setMax(30)}>30</button>
                      <button className="bg-green-300 hover:bg-gradient-to-r from-lime-500 to-orange-500 font-bold text-6xl h-[100px] w-[100px] border-4 border-black-600 rounded-lg" onClick={()=>props.setMax(50)}>50</button>         
                  </div>
              </div>
          </div>

          <div className='flex justify-center space-x-20'>
            <button className='bg-green-400 h-[100px] w-[200px] hover:bg-gradient-to-r from-lime-500 to-orange-500 font-bold text-4xl border-4 border-black-600 rounded-lg' onClick={()=>props.increase()}>Increment</button>
            <button className='bg-green-400 h-[100px] w-[200px] hover:bg-gradient-to-r from-lime-500 to-orange-500 font-bold text-4xl border-4 border-black-600 rounded-lg' onClick={()=>props.decrease()}>Decrement</button>
            <button className='bg-green-400 h-[100px] w-[200px] hover:bg-gradient-to-r from-lime-500 to-orange-500 font-bold text-4xl border-4 border-black-600 rounded-lg' onClick={()=>props.reset()}>Reset</button>
          </div>
      </div>
    )
  }



export default connect(mapStateToProps,mapDispatchToProps)(Counter)