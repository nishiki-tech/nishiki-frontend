/**
 * This file is used as an example for the Input components.
 * Once we're done with the example, we can delete this file.
 */

import { Label } from '../';
import { Input, NumberInput, SearchInput } from './';

export function InputUsageExample() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input type="text" id="groupName" placeholder="Group name" />
      <Input variant="square" type="text" id="groupName" />
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
