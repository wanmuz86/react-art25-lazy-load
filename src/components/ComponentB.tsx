import { useState } from 'react';

const ComponentB = () => {

  const [message, setMessage] = useState('');
  const handleButtonClick = () => {
    import('../utils/sum').then(({sum}) => {
      const sumResult = sum(3,5);
      setMessage(`The answer is ${sumResult}`)

    })
  }

  return (
    <div>
        <h2>Component B Loaded</h2>
        <p>{message}</p>
        <button onClick={handleButtonClick}>Button Click - Lazy Load</button>
    </div>
  )
}

export default ComponentB