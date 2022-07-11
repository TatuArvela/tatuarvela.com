import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Page from "../components/Page";
import { en, I18nProvider } from "../i18n";

const Text = styled.p`
  text-align: center;
`;

const FourOhFour = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft <= 0) {
    router.push("/", "/");
  }

  return (
    <I18nProvider value={en}>
      <Page pageTitle="404">
        <Text>How did you get here?</Text>
        <Text>Redirecting in {timeLeft}...</Text>
      </Page>
    </I18nProvider>
  );
};

export default FourOhFour;
