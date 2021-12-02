import React from 'react';
import length from 'ramda/src/length';
import symmetricDifference from 'ramda/src/symmetricDifference';
import Editor from '../components/formElements/Editor';
import EditorComponent from '../components/formElements/EditorComponent';

const arrayIncorrect = (value, correct) =>
    length(symmetricDifference(value || [], correct || [])) ? 'Неправильный ответ' : undefined;

const renderInfo =
  (prop = 'label') =>
      (props) =>
          <div dangerouslySetInnerHTML={{ __html: props[prop] }} />;

const COMPONENTS_DEFAULTS = (placeholder) => [
    {
        type: 'Editor',
        name: 'Текст',
        icon: 'font',
        renderInfo: renderInfo('content'),
        component: Editor,
        formComponent: EditorComponent,
        props: {
            content: '<p><br></p>',
        },
        staticContent: true,
        hidePreview: true,
        fields: [{ type: 'editor', prop: 'content' }],
    },
];

export default COMPONENTS_DEFAULTS;
