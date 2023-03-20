import { Card } from '@/components/card';
import { FilterContainer } from '@/components/filter-container';
import { DATA } from '@/lib/data';

export default function IndexPage() {
  const tags: string[] = ['React', 'HTML', 'CSS', 'JavaScript'];

  return (
    <>
      <FilterContainer tags={tags} />
      <section className="mt-14 grid gap-x-4 gap-y-14 md:grid-cols-2 lg:mt-6 lg:grid-cols-1 lg:gap-y-6">
        {DATA.map(i => (
          <Card key={i.id} {...i} />
        ))}
      </section>
    </>
  );
}
