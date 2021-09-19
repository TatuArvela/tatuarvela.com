import * as React from 'react';
import styled from 'styled-components';
import Page from '../layouts/Page';
import { useEffect, useState } from 'react';

const Text = styled.p`
  text-align: center;
`

const FourOhFour = () => {
  const [timeLeft, setTimeLeft] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  if (timeLeft <= 0) {
    window.location = '/'
  }

  return (
    <Page pageTitle={"404"}>
      <Text>How did you get here?</Text>
      <Text>Redirecting in {timeLeft}...</Text>
    </Page>
  )
}



export default FourOhFour;