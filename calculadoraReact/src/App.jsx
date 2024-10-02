import { useState } from 'react';
import { data } from './data/data';
import ImcCalc from './components/ImcCalc/ImcCalc';
import ImcTable from './components/imcTable/imcTable';
import './App.css';

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  function calcImc(e, heigth, weigth) {
    e.preventDefault();

    if (!weigth || !heigth) return;

    const weightFloat = +weigth.replace(',', '.');
    const heigthtFloat = +heigth.replace(',', '.');

    const imcResult = (weightFloat / (heigthtFloat * heigthtFloat)).toFixed(1);

    setImc(imcResult)

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    })

    if (!info && imc > 99) return;

  }

  const resetCalc = (e) => {
    e.preventDefault();
    setImc('');
    setInfo('');
    setInfoClass('');
  }

  return (
    <div className='container'>
      {!imc ? (<ImcCalc calcImc={calcImc} />) : (<ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>)}
    </div>
  )
}

export default App
