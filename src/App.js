import { useEffect, useState } from 'react';
import Container from './Components/Container/Container';
import FormattedTime from './Components/Formattedtime/Formattedtime';
import Button from './Components/Button/Button.js';

const App = () => {
  
  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(0);

  const start = () => {
    clearInterval(timer);
    setTimer(
      setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1)
    );
  };

  const stop = () => {
    clearInterval(timer);
  };

  const reset = () => {
    clearInterval(timer);
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);

  return (
    <Container>
      <FormattedTime time={time} />
      <Button action={start}>Start</Button>
      <Button action={stop}>Stop</Button>
      <Button action={reset}>Reset</Button>
    </Container>
  );
};

export default App;