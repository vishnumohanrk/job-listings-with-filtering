import { Card } from '@/components/card';
import { FilterContainer } from '@/components/filter-container';
import { getFilteredData, getTagsFromParams } from '@/lib/utils';

export default function IndexPage({
  searchParams: { filter },
}: {
  searchParams: { filter: string | string[] | undefined };
}) {
  const tags = getTagsFromParams(filter);
  const arr = getFilteredData(tags);

  return (
    <>
      <FilterContainer tags={tags} />
      <section className="mt-14 grid gap-x-4 gap-y-14 md:grid-cols-2 lg:mt-6 lg:grid-cols-1 lg:gap-y-6">
        {arr.map(i => (
          <Card key={i.id} {...i} />
        ))}
      </section>
    </>
  );
}

export const dynamic = 'force-dynamic';
