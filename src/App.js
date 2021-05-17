import './App.css';
import { useState } from 'react';
import LeftSideComponent from './components/LeftSideComponent';
import RightSideComponent from './components/RightSideComponent';

function App() {
  const [city, setCity] = useState();
  const [temp, setTemp] = useState();
  const [description, setDescription] = useState();
  return (
    <div className="container">
      <LeftSideComponent city={city} temp={temp} description={description} />
      <RightSideComponent
        city={city}
        setCity={setCity}
        temp={temp}
        setTemp={setTemp}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
}

export default App;
