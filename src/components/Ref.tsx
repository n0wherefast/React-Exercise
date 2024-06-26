import React, { useRef } from 'react';

export default function Example() {
    const inputRef = useRef<HTMLInputElement>(null);


  function handleClick() {
    inputRef.current!.focus();
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
