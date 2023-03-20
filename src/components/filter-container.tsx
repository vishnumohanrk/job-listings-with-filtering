import Link from 'next/link';

import { FilterItem } from './filter-item';

type FilterContainerProps = {
  tags: string[];
  removeFilter: (text: string) => void;
};

export function FilterContainer({ tags, removeFilter }: FilterContainerProps) {
  return tags.length ? (
    <section className="sticky top-11 z-20 flex w-full items-center rounded-5 bg-white p-6 shadow-card">
      <h2 className="sr-only">Selected Filters</h2>
      <ul className="flex flex-1 flex-wrap gap-4">
        {tags.map(i => (
          <FilterItem key={i} text={i} action={removeFilter} />
        ))}
      </ul>
      <Link
        href="/"
        className="font-bold text-secondaryText hover:text-accent hover:underline focus-visible:text-accent focus-visible:underline"
      >
        Clear
      </Link>
    </section>
  ) : (
    <div className="h-[86px] w-full" />
  );
}
