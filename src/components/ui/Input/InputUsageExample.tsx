/**
 * This file is used as an example for the Dialog component.
 * Once you're done with the example, you can delete this file.
 */

import { Input, SearchInput } from '..';

export function InputUsageExample() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input type="text" id="groupName" placeholder="Group name" />
      <SearchInput placeholder="Search Foods" />
      <div className="w-1/2">
        {/* When it's type number, it allows input like 01111 */}
        <Input type="number" id="quantity" placeholder="Quantity" />
      </div>
    </div>
  );
}
