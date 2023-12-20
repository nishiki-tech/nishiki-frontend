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
    <div>
      <SearchInput
        className="mx-4 mt-6 mb-2"
        placeholder="Search Foods..."
        onChange={(e) => handleSearch(e.target.value)}
        value={query}
      />
    </div>
  );
};
