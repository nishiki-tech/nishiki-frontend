/**
 * This file is used as an example for the Input component.
 * Once you're done with the example, you can delete this file.
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
        <Label>aaaa</Label>
        <NumberInput id="quantity" placeholder="Quantity" />
      </div>
    </div>
  );
}
