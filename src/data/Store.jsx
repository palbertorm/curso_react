import React, { useState } from "react";

const initialState = {
    number: 1503,
    text: 'context + API + hooks'
}
export  const contextApp = React.createContext(initialState)

const Store = props => {
    const [state, setState] = useState(initialState)

    function updateState(key, value){
        setState({
            ...state,
            [key]: value
        })
        
    }

    return(

    <contextApp.Provider value={{
        number:state.number,
        text:state.text,
        setNumber: n => updateState('number', n),//alterando o estado de forma individual
        setText: n => updateState('text', n),
    }}>
        {props.children}
    </contextApp.Provider>
        
    )
}

export default Store