import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Exercise from './Exercise';
import FileReader from '../FileReader';

import codeRenderer from './renderer/CodeBlock';
import linkRenderer from './renderer/HyperLink';

const EXERCISE_SPLITTER = `<!--exercise-->`

class Markdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdownSource: []
        }
    }

    componentDidMount() {
        this.stitchMarkdownSource(this.props);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tutorialMetadata.markdownLocation !== this.props.tutorialMetadata.markdownLocation) {
            this.stitchMarkdownSource(this.props);
        }
    }

    stitchMarkdownSource({ tutorialMetadata }) {
        FileReader.readFile(`${tutorialMetadata.markdownLocation}`)
            .then(markdownText => {
                let stichedSource = [];
                const hasExercise = markdownText.includes(EXERCISE_SPLITTER);
                if (hasExercise) {
                    stichedSource = [];
                    const splitSource = markdownText.split(EXERCISE_SPLITTER);
                    splitSource.forEach((s, index) => {
                        stichedSource.push(
                            <ReactMarkdown
                                key={index}
                                source={s}
                                renderers={{
                                    code: codeRenderer,
                                    link: linkRenderer
                                }}
                            />
                        );
                        if (index < splitSource.length - 1) {
                            stichedSource.push(
                                <Exercise
                                    key={`exercise-${index}`}
                                    exercise={tutorialMetadata.exercises[index]}
                                />
                            );
                        }
                    });
                } else {
                    stichedSource = [
                        <ReactMarkdown
                            key="mkdown"
                            source={markdownText}
                            renderers={{
                                code: codeRenderer,
                                link: linkRenderer
                            }}
                        />]
                }
                this.setState({
                    markdownSource: stichedSource
                });
            })
    }

    render() {
        return (
            <div>
                {this.state.markdownSource.map(d => d)}
            </div>
        );
    }
}

Markdown.propTypes = {
    source: PropTypes.string
};

export default Markdown;