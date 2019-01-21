import React, { Component } from 'react';
import { TutorialMetadataApi } from './TutorialMetadataApi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    padding: 10px;
    margin: 10px;
    text-align: center;
`

const Title = styled.div`
    font-weight: bold;
    font-size: 2rem;
    padding: 15px;
`

const TutorialNavigation = styled.div`
    margin-top: 20px;
    margin-left: calc(50% - 100px);
    text-align: left;
`;

const TutorialLink = styled.div`
    padding: 10px;
    font-size: 1.3rem;
    font-weight: bold;
`;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorialMetadata: []
        }
    }

    componentDidMount(){
        this.setState({
            tutorialMetadata: TutorialMetadataApi.getTutorialMetadata()
        })
    }
    render() {
        const { tutorialMetadata } = this.state;
        return (
            <Container>
                <Title>
                    Welcome to Learn React App!
                </Title>
                <div>
                    Jump to any tutorial as you like but it's recommended to go in order.
                </div>
                <TutorialNavigation>
                    {
                        tutorialMetadata.map((data, index) => {
                            return <TutorialLink>
                                <Link key={data.id} to={data.route}>{data.displayName}</Link>
                            </TutorialLink>
                        })
                    }
                </TutorialNavigation>

            </Container>
        )
    }
}

export default Home;
