/**
 * This file is used as an example for the Select component.
 * Once you're done with the example, you can delete this file.
 */

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

const groups = [
  {
    id: '1',
    group: 'Group 1',
    containers: [
      { id: '1', container: 'container1' },
      { id: '2', container: 'container2' },
      { id: '3', container: 'container3' },
    ],
  },
  {
    id: '2',
    group: 'Group 2',
    containers: [
      { id: '4', container: 'container4' },
      { id: '5', container: 'container5' },
      { id: '6', container: 'container6' },
    ],
  },
  {
    id: '3',
    group: 'Group 3',
    containers: [
      { id: '7', container: 'container7' },
      { id: '8', container: 'container8' },
      { id: '9', container: 'container9' },
    ],
  },
  {
    id: '4',
    group: 'Group 4',
    containers: [
      { id: '10', container: 'container10' },
      { id: '11', container: 'container11' },
      { id: '12', container: 'container12' },
    ],
  },
  {
    id: '5',
    group: 'Group 5',
    containers: [
      { id: '13', container: 'container13' },
      { id: '14', container: 'container14' },
      { id: '15', container: 'container15' },
    ],
  },
  {
    id: '6',
    group: 'Group 6',
    containers: [
      { id: '16', container: 'container16' },
      { id: '17', container: 'container17' },
      { id: '18', container: 'container18' },
    ],
  },
  {
    id: '7',
    group: 'Group 7',
    containers: [
      { id: '19', container: 'container19' },
      { id: '20', container: 'container20' },
      { id: '21', container: 'container21' },
    ],
  },
  {
    id: '8',
    group: 'Group 8',
    containers: [
      { id: '22', container: 'container22' },
      { id: '23', container: 'container23' },
      { id: '24', container: 'container24' },
    ],
  },
  {
    id: '9',
    group: 'Group 9',
    containers: [
      { id: '25', container: 'container25' },
      { id: '26', container: 'container26' },
      { id: '27', container: 'container27' },
    ],
  },
  {
    id: '10',
    group: 'Group 10',
    containers: [
      { id: '28', container: 'container28' },
      { id: '29', container: 'container29' },
      { id: '30', container: 'container30' },
    ],
  },
  {
    id: '11',
    group: 'Group 11',
    containers: [
      { id: '31', container: 'container31' },
      { id: '32', container: 'container32' },
      { id: '33', container: 'container33' },
    ],
  },
  {
    id: '12',
    group: 'Group 12',
    containers: [
      { id: '34', container: 'container34' },
      { id: '35', container: 'container35' },
      { id: '36', container: 'container36' },
    ],
  },
];

export function SelectUsageExample() {
  return (
    <div className="w-full px-4">
      <div className="my-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a Group" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Groups</SelectLabel>
              {groups.map((group) => (
                <SelectItem key={group.id} value={group.group}>
                  {group.group}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a Container" />
        </SelectTrigger>
        <SelectContent>
          {groups.map((group) => (
            <SelectGroup key={group.id}>
              <SelectLabel>{group.group}</SelectLabel>
              {group.containers.map((container) => (
                <SelectItem key={container.id} value={container.container}>
                  {container.container}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
