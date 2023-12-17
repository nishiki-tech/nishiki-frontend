import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}` as Route);
  }, 300);
  return (
    <div>
      <label htmlFor="search" className="">
        Search
      </label>
      <input
        className=""
        placeholder="Search food..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue=""
      />
    </div>
  );
};
