import { Button } from "components/button";
import { ClientsGroup } from "components/clients-group";
import { Header } from "components/header";
import { Heading } from "components/heading";
import { Hero } from "components/hero";
import { Text } from "components/text";
import styled from "styled-components";

const StyledHero = styled(Hero)`
  margin-bottom: 40px;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 20px;
`;

const StyledText = styled(Text)`
  padding: 0 20px;
  margin-bottom: 20px;
`;

const ContentWrapperSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-bottom: 40px;
`;

function App() {
  return (
    <>
      <Header />
      <StyledHero />
      <ContentWrapperSection>
        <StyledHeading align="center">Make remote work</StyledHeading>
        <StyledText align="center">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </StyledText>
        <StyledButton variation="primary">Learn more</StyledButton>
        <ClientsGroup />
      </ContentWrapperSection>
    </>
  );
}

export default App;
