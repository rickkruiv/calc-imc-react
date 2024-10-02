import React, { useState } from 'react'
import Button from '../button/Button'
import './ImcCalc.css'

const ImcCalc = ({ calcImc }) => {
  const [heigth, setHeigth] = useState('');
  const [weight, setWeight] = useState('');

  function cleanForm(e) {
    e.preventDefault();
    setHeigth('');
    setWeight('');
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,.]/g, "")
  }

  const handleHeigthChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setHeigth(updatedValue);
  }

  const handleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setWeight(updatedValue);
  }

  return (
    <div id='calc-container'>
      <h2>Calculadora IMC</h2>
      <form id="imc-form">

        <div className="forms-input">

          <div className="form-control">
            <label htmlFor="heigth">Altura:</label>
            <input type="text" name="heigth" id="heigth" placeholder='Ex: 1,80' onChange={(e) => handleHeigthChange(e)} value={heigth} />
          </div>

          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input type="text" name="weight" id="weight" placeholder='Ex: 82,5' onChange={(e) => handleWeightChange(e)} value={weight} />
          </div>

        </div>

        <div className="action-control">
          <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, heigth, weight)} />
          <Button id="clear-btn" text="Cancelar" action={cleanForm} />
        </div>

      </form>
    </div>
  )
}

export default ImcCalc