import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(a,b){
    const futur = Date.now() + 2000
    while( Date.now() < futur){} // espera 2s
    return a+b
}

const UseMemo = (props) => {
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)
    const [input3, setInput3] = useState(0)

    const result = useMemo(() => sum(input1,input2), [input1, input2])


    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className='center'>
                <input type="number" className="input" value={input1} onChange={e => setInput1(parseInt(e.target.value))}/>
                <input type="number" className="input" value={input2} onChange={e => setInput2(parseInt(e.target.value))}/>
                <input type="number" className="input" value={input3} onChange={e => setInput3(parseInt(e.target.value))}/>
                <span className="text">{result}</span>
            </div>
            
        </div>
    )
}

export default UseMemo
