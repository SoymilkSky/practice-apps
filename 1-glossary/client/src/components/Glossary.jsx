import React from 'react';
import GlossaryEntry from './GlossaryEntry.jsx';

function Glossary(props) {
  return (
    <div>
      {props.glossary.map((entry, index) =>
        <GlossaryEntry
          key={index + 1}
          index={index + 1}
          entry={entry}
          delete={props.delete}
          edit={props.edit}/>)}
    </div>
  )
}

export default Glossary;