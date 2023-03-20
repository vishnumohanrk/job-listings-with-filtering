import { useRouter } from 'next/router';
import { useMemo } from 'react';

import type { TJob } from './utils';
import { getFilteredData, getTagsFromParams } from './utils';

export function useFilter(allJobs: TJob[]) {
  const router = useRouter();

  const currentFilters = useMemo(
    () => getTagsFromParams(router.query.filter),
    [router.query.filter]
  );

  const jobs = useMemo(
    () => getFilteredData(allJobs, currentFilters),
    [allJobs, currentFilters]
  );

  function addFilter(tag: string) {
    if (!currentFilters.includes(tag)) {
      const newFilters = [...currentFilters, tag];
      router.push(`/?filter=${newFilters.join()}`);
    }
  }

  function removeFilter(tag: string) {
    const newFilters = currentFilters.filter(i => i !== tag);

    if (newFilters.length) {
      router.push(`/?filter=${newFilters.join()}`);
    } else {
      router.push('/');
    }
  }

  return {
    jobs,
    addFilter,
    removeFilter,
    tags: currentFilters,
  };
}
