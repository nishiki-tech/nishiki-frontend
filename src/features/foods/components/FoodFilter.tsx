import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

export const FoodFilter = ({ groups, containers }: { groups: string[]; containers: string[] }) => {
  const [selectedGroup, setSelectedGroup] = useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilter = (term: string) => {
    console.log(`Filter... ${term}`);
    const params = new URLSearchParams(searchParams);
    if (term && term.length > 0) {
      params.set('filter', term);
    } else {
      params.delete('filter');
    }
    replace(`${pathname}?${params.toString()}` as Route);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(event.target.value);
  };
  return (
    <div>
      Filter
      <label>Group :</label>
      <select name="groups" onChange={handleSelectChange} id="groups">
        {groups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
        <option key="any" value="">
          any group
        </option>
      </select>
      <label>container :</label>
      <select name="containers" onChange={handleSelectChange} id="containers">
        {containers.map((container) => (
          <option key={container} value={container}>
            {container}
          </option>
        ))}
        <option key="any" value="">
          any container
        </option>
      </select>
      <button onClick={() => handleFilter(selectedGroup)}> Apply </button>
    </div>
  );
};
