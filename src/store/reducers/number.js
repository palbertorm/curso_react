export  function numberReducer (state, action) {
    
    // cada vez q a acao for tomada incrementa 2 se nao, devolve o estado atual
  
    switch (action.type) {
      case "addNumber2":
        return { ...state, number: state.number + 2 };
      case "addMulti7":
        return { ...state, number: state.number *7  };
      case "addDiv25":
        return { ...state, number: state.number /25  };
      case "addNumInt":
        return { ...state, number: parseInt(state.number )};
      case "addN":
          return {...state, number: state.number + action.n}
      default:
        return state;
    }
  }