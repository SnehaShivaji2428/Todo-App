import React, {useState} from 'react';
import Todo from './components/Todo';

function App() {
  const [mode, setMode] = useState('light');
  const [btn, setBtn] = useState('Enable Dark Mode');
  const [butn, setButn] = useState('secondary');
  const [myStyle, setMyStyle] = useState({
    color : 'black',
    backgroundColor : 'white'
  });
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      setBtn('Enable Light Mode');
      setButn('primary');
      setMyStyle({
        color : 'white',
        backgroundColor : '#303030'
      })
      document.body.style.backgroundColor = "#303030";
    } else {
      setMode('light');
      setBtn('Enable Dark Mode');
      setButn('secondary');
      setMyStyle({
        color : '#303030',
        backgroundColor : 'white'
      })
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
    <Todo mode={mode} toggleMode={toggleMode} btn={btn} myStyle={myStyle} butn={butn} />
    </>
  );
}

export default App;
