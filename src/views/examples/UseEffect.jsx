import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function Fatorar(num) {
  const n = parseInt(num);
  if (n < 0) return "Nao existe, Gado";
  if (n === 0) return 1;
  return Fatorar(n - 1) * n;
}
//#02
function ParOuImpar(nume) {
  const p = parseInt(nume);
  if (p % 2 === 0) return "Par";
    else return "Impar";
}
//#01
const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  // #02
  
  const [status, setStatus] = useState(1)
//01
  useEffect(
    function () {
      setFatorial(Fatorar(number));
    },
    [number]
  );
//#02
  useEffect(
    function () {
      setStatus(ParOuImpar(number));
    },
    [number]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <div>
        <SectionTitle title="Exercicio #01" />
        <div className="center">
          <div>
            <div>
              <span className="text">Fatorial:</span>
              <span className="text red">{fatorial}</span>
            </div>
            <input
              type="number"
              className="input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <SectionTitle title="Exercicio #02" />
        <div className="center">
          <div>
            <span className="text">Status: </span>
            <span className="text red">{status}</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
