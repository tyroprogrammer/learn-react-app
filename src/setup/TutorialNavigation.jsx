import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: table;
    text-align: center;
    width: 100%;
`;

const Navigation = styled.div`
    width: 33%;
    display: table-cell;
`;

const linkStyle = {
    padding: 10,
    backgroundColor: "#3f51b5",
    color: "white",
    borderRadius: 5
};

const TutorialNavigation = ({ previousTutorial, nextTutorial }) => {
    return (
      <Container>
        <Navigation>
          {previousTutorial && (
            <Link style={linkStyle} to={`${previousTutorial.route}`}>
              ← {previousTutorial.displayName}
            </Link>
          )}
        </Navigation>
        <Navigation>
          <Link style={linkStyle} to="/">
            Home
          </Link>
        </Navigation>
        <Navigation>
          {nextTutorial && (
            <Link style={linkStyle} to={`${nextTutorial.route}`}>
              {nextTutorial.displayName} →
            </Link>
          )}
        </Navigation>
      </Container>
    );
};

export default TutorialNavigation;
