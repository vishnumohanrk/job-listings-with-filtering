import Link from 'next/link';

import { FilterItem } from './filter-item';

export function FilterContainer({ tags }: { tags: string[] }) {
  return tags.length ? (
    <section className="sticky top-12 z-20 flex w-full items-center rounded-lg bg-white px-6 py-8 shadow-md">
      <ul className="flex flex-1 flex-wrap gap-4">
        {tags.map(i => (
          <FilterItem key={i} text={i} />
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
    <div className="h-[102px] w-full" />
  );
}
