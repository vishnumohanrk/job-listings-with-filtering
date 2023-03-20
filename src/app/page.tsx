import { Card } from '@/components/card';
import { DATA } from '@/lib/data';

export default function IndexPage() {
  return (
    <section className="mx-auto grid max-w-screen-xl gap-x-4 gap-y-14 px-4 md:grid-cols-2 lg:grid-cols-1 lg:gap-y-6">
      {DATA.map(i => (
        <Card key={i.id} {...i} />
      ))}
    </section>
  );
}
