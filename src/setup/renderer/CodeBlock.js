import React from 'react';
import Lowlight from 'react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/dracula.css';

Lowlight.registerLanguage('js', js);
Lowlight.registerLanguage('xml', xml);
Lowlight.registerLanguage('html', xml);

function CodeBlock (props){
    return (
        <Lowlight
            language={props.language || 'js'}
            value={props.value || ''}
            inline={props.inline}
        />
    )
}

export default CodeBlock;
