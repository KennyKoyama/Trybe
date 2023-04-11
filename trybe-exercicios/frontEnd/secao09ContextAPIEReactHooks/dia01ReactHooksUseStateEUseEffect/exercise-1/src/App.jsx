import React, { useState } from 'react';

export default function App() {
  const [fullname, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('Fundamentos');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ fullname, age, city, module})
  };

  return (
    <form
      id="Form"
      onSubmit={ handleSubmit }
      className='flex flex-col gap-10 p-10 items-start'
    >
      <h1 className="text-3xl font-medium">Form</h1>
      <fieldset className='flex gap-2'>
        <input
          type="text"
          value={ fullname }
          onChange={ ({ target }) => setFullname(target.value) }
          className='border border-black rounded px-2'
          placeholder='Full Name'
        />
        <input
          type="number"
          min="0"
          max="150"
          step="1"
          value={ age }
          onChange={ ({ target }) => setAge(parseInt(target.value | 0)) }
          className='border border-black rounded w-11 text-center'
          placeholder='Age'
        />
        <input
          type="text"
          value={ city }
          onChange={ ({ target }) => setCity(target.value) }
          className='border border-black rounded px-2'
          placeholder='City'
        />
      </fieldset>
      <fieldset
        onChange={ ({ target }) => setModule(target.value) }
        className='flex gap-5'
      >
        <legend className="text-xl font-medium">Módulos</legend>
        <label htmlFor="fundamentals" className='flex gap-1'>
          <input type="radio" id="fundamentals" name="modules" value="Fundamentos" defaultChecked />
          Fundamentos
        </label>
        <label htmlFor="FrontEnd" className='flex gap-1'>
          <input type="radio" id="FrontEnd" name="modules" value="Front-end" />
          Front-end
        </label>
        <label htmlFor="BackEnd" className='flex gap-1'>
          <input type="radio" id="BackEnd" name="modules" value="Back-end" />
          Back-end
        </label>
        <label htmlFor="computerScience" className='flex gap-1'>
          <input type="radio" id="computerScience" name="modules" value="Ciência da Computação" />
          Ciência da Computação
        </label>
      </fieldset>
      <button
        type="submit"
        className='bg-sky-400 p-2 rounded shadow shadow-gray-500'
      >
        Submit
      </button>
    </form>
  )
}
