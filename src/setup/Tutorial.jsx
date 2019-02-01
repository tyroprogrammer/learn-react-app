import React from "react";
import styled from "styled-components";

import TutorialNavigation from "./TutorialNavigation";
import { TutorialMetadataApi } from "./TutorialMetadataApi";
import Markdown from "./Markdown";
import AppShell from "./AppShell";

const Container = styled.div`
  padding: 10px;
  margin: 10px 100px 10px 100px;
`;

const TutorialContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
`;

const BottomNavigation = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

const Tutorial = ({ match }) => {
  const route = match.url;
  const currentTutorial = TutorialMetadataApi.getCurrentTutorial(route);
  const nextTutorial = TutorialMetadataApi.getNextTutorial(route);
  const previousTutorial = TutorialMetadataApi.getPreviousTutorial(route);
  return (
    <Container>
      <AppShell title={currentTutorial.displayName} />
      <TutorialContainer>
        <Markdown tutorialMetadata={currentTutorial} />
      </TutorialContainer>
      <BottomNavigation>
        <TutorialNavigation
          nextTutorial={nextTutorial}
          previousTutorial={previousTutorial}
        />
      </BottomNavigation>
    </Container>
  );
};

export default Tutorial;
