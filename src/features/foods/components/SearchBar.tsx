import { SearchInput } from '@/components/ui';

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [query, setQuery] = useState('');
  useEffect(() => {
    setQuery(searchParams?.get('query') || '');
  }, [searchParams]);

  /**
   * Update search query at URL param and local state
   * @param term search query
   */
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}` as Route);
    setQuery(term);
  };
  return (
    <SearchInput
      placeholder="Search Foods..."
      className="mb-2"
      onChange={(e) => handleSearch(e.target.value)}
      value={query}
    />
  );
};
