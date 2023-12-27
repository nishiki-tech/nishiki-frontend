'use client';

import { LabeledInput } from '@/components/parts/LabeledInput';
import {
  DatePicker,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

interface IAddDrawerBodyProps {}

export const AddDrawerBody = ({}: IAddDrawerBodyProps) => {
  return (
    <div className="flex flex-col gap-4">
      <LabeledInput label="Name" htmlFor="name" required>
        <Input name="name" id="name" placeholder="Container name" />
      </LabeledInput>
      <LabeledInput label="Group" htmlFor="group" required>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a Group" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="group1">Group 1</SelectItem>
              <SelectItem value="group2">Group 2</SelectItem>
              <SelectItem value="group3">Group 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </LabeledInput>
      <LabeledInput label="Container" htmlFor="container" required>
        <Select name="container">
          <SelectTrigger>
            <SelectValue placeholder="Select a container" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Group 1</SelectLabel>
              <SelectItem value="aaaaa">AAAAA</SelectItem>
              <SelectItem value="bbbbb">BBBBB</SelectItem>
              <SelectItem value="ccccc">CCCCC</SelectItem>
              <SelectLabel>Group 2</SelectLabel>
              <SelectItem value="ddddd">DDDDD</SelectItem>
              <SelectItem value="eeeee">EEEEE</SelectItem>
              <SelectItem value="fffff">FFFFF</SelectItem>
              <SelectLabel>Group 3</SelectLabel>
              <SelectItem value="ggggg">GGGGG</SelectItem>
              <SelectItem value="hhhhh">HHHHH</SelectItem>
              <SelectItem value="iiiii">IIIII</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </LabeledInput>
      <div className="grid grid-cols-2 gap-6">
        <LabeledInput label="Quantity" htmlFor="quantity">
          <Input name="quantity" id="quantity" type="number" />
        </LabeledInput>
        <LabeledInput label="Unit" htmlFor="unit">
          <Input name="unit" id="unit" type="text" />
        </LabeledInput>
      </div>
      <LabeledInput label="Expiry" htmlFor="expiry">
        <DatePicker />
      </LabeledInput>
      <LabeledInput label="Category" htmlFor="category">
        <Input name="category" id="category" type="text" />
      </LabeledInput>
      {/* "Add more" checkbox will be added here */}
    </div>
  );
};
