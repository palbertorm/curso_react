import React from "react";

export const data = {
    number: 123,
    text:'Contexto de API'

}

const DataContext = React.createContext(data)

export default DataContext