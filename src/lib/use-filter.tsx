import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import { getTagsFromParams } from './utils';

export function useFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentFilters = useMemo(
    () => getTagsFromParams(searchParams.getAll('filter')),

    [searchParams]
  );

  function addFilter(text: string) {
    if (!currentFilters.includes(text)) {
      const newFilters = [...currentFilters, text];
      router.push(`/?filter=${newFilters.join()}`);
    }
  }

  function removeFilter(text: string) {
    const newFilters = currentFilters.filter(i => i !== text);

    if (newFilters.length) {
      router.push(`/?filter=${newFilters.join()}`);
    } else {
      router.push('/');
    }
  }

  return {
    addFilter,
    removeFilter,
  };
}
