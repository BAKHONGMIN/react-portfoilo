/* eslint-disable*/
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const ReactTypingEffectDemo = () => {
  return (
    <>
      <ReactTypingEffect
        text={["박홍민"]}
      />


      {/* <ReactTypingEffect
        text={["박홍민"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'black'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      /> */}
    </>
  );
};
export default ReactTypingEffectDemo;