import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import {reducer,initialState} from '../../store'
import { addNumber2, login } from "../../store/actions";



const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <SectionTitle title="Exercicio#01"/>
      <div className="center">
          {state.user ? 
          <span className="text">{state.user.name}</span>
          : <span className="text">Sem usuario</span>}
          
        <span className="text">{state.number}</span>
        <div>
            <button className="btn" onClick={()=>login(dispatch, 'Candido') }>Login</button>
          
            <button className="btn" onClick={()=> dispatch({type:"addMulti7"})}>* 7</button>
            <button className="btn" onClick={()=> dispatch({type: "addDiv25"})}>/ 25</button>
            <button className="btn" onClick={()=> dispatch({type: "addNumInt"})}>arrendondar</button>
            <button className="btn" onClick={() => addNumber2(dispatch)}> 2 </button>
            <button className="btn" onClick={()=> dispatch({type: "addN", n: - 9 })}>-9</button>
        </div>
      </div>
      <SectionTitle title="Exercicio#02"/>
    </div>
  );
};

export default UseReducer;
