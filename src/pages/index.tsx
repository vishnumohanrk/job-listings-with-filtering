import type { GetStaticProps } from 'next';

import { Card } from '@/components/card';
import { FilterContainer } from '@/components/filter-container';
import { MetaHead } from '@/components/meta-head';
import { JOBS_DATA } from '@/lib/data';
import { useFilter } from '@/lib/use-filter';
import type { TJob } from '@/lib/utils';

export default function HomePage({ allJobs }: { allJobs: TJob[] }) {
  const { jobs, addFilter, removeFilter, tags } = useFilter(allJobs);

  return (
    <>
      <MetaHead />
      <FilterContainer tags={tags} removeFilter={removeFilter} />
      <section className="mt-14 grid gap-x-4 gap-y-14 md:grid-cols-2 lg:mt-6 lg:grid-cols-1 lg:gap-y-6">
        <h2 className="sr-only">Available Jobs for the selected filters</h2>
        {jobs.map(i => (
          <Card key={i.id} addFilter={addFilter} {...i} />
        ))}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      allJobs: JOBS_DATA,
    },
  };
};
