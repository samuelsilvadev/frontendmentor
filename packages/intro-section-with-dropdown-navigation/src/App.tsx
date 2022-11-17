import { Button } from "components/button";
import { ClientsGroup } from "components/clients-group";
import { Header } from "components/header";
import { Heading } from "components/heading";
import { Hero } from "components/hero";
import { SideMenu } from "components/side-menu";
import { BREAKPOINTS, GLOBAL_VARIABLES } from "components/styles.config";
import { Text } from "components/text";
import { useMenu } from "state/menu/MenuProvider";
import styled from "styled-components";
import { useMediaQuery } from "usehooks-ts";

const Main = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINTS.MD}) {
    padding: 0 48px;
    flex-direction: row-reverse;
    justify-content: space-between;
    height: calc(100vh - ${GLOBAL_VARIABLES.HEADER_HEIGHT.MD});
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
    max-width: 1314px;
    margin: 0 auto;
  }
`;

const StyledHero = styled(Hero)`
  margin-bottom: 40px;

  @media (min-width: ${BREAKPOINTS.MD}) {
    width: 40%;
  }
`;

const ContentWrapperSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.MD}) {
    justify-content: center;
    align-items: flex-start;
    width: 50%;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 20px;

  @media (min-width: ${BREAKPOINTS.LG}) {
    max-width: 510px;
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
    margin-bottom: 58px;
  }
`;

const StyledText = styled(Text)`
  padding: 0 20px;
  margin-bottom: 20px;

  @media (min-width: ${BREAKPOINTS.MD}) {
    padding: 0;
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
    max-width: 430px;
    margin-bottom: 52px;
  }
`;

const StyledButton = styled(Button)`
  margin-bottom: 40px;

  @media (min-width: ${BREAKPOINTS.LG}) {
    margin-bottom: 92px;
  }
`;

const StyledClientsGroup = styled(ClientsGroup)`
  @media (min-width: ${BREAKPOINTS.LG}) {
    max-width: 510px;
  }
`;

function App() {
  const isLteMd = useMediaQuery(`(max-width: ${BREAKPOINTS.MD})`);
  const isGteMd = useMediaQuery(`(min-width: ${BREAKPOINTS.MD})`);
  const { isOpen } = useMenu();

  return (
    <>
      <Header />
      <Main>
        <StyledHero />
        <ContentWrapperSection>
          <StyledHeading align={isGteMd ? "start" : "center"}>
            Make remote work
          </StyledHeading>
          <StyledText align={isGteMd ? "start" : "center"}>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </StyledText>
          <StyledButton variation="primary">Learn more</StyledButton>
          <StyledClientsGroup />
        </ContentWrapperSection>
      </Main>
      {isOpen && isLteMd && <SideMenu />}
    </>
  );
}

export default App;
