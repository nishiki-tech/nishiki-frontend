/**
 * This file is used as an example for the Input components.
 * Once we're done with the example, we can delete this file.
 */

import { useRef, useState } from 'react';

import { Label } from '../';
import { Input, NumberInput, SearchInput, SquareTextInput } from './';

export function InputUsageExample() {
  const [value, setValue] = useState('');
  const squareTextInputRef = useRef<HTMLInputElement>(null);

  /**
   * When cross button click is completed,
   * set the focus back to the input,
   */
  const handleCrossButtonClick = () => {
    // clear squareTextInputRef value
    setValue('');
    squareTextInputRef.current?.focus();
  };
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 py-4">
      <Input type="text" id="groupName" placeholder="Group name" />
      <SquareTextInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={squareTextInputRef}
        handleCrossButtonClick={handleCrossButtonClick}
        className="bg-white"
      />
      <SearchInput placeholder="Search Foods" />
      <div className="w-1/2">
        <Label htmlFor="quantity">Quantity</Label>
        <NumberInput id="quantity" placeholder="Quantity" />
        {/* By default input component is excluding dot, but you can modify it  */}
        <NumberInput
          id="quantity"
          placeholder="Quantity"
          exceptionSymbolsProps={{ exceptDot: true }}
        />
      </div>
    </div>
  );
}
