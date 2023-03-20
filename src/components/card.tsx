/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { Chip } from './chip';
import { Tag } from './tag';

import type { TJob } from '@/lib/types';

export function Card({
  logo,
  company,
  new: isNew,
  featured,
  position,
  postedAt,
  contract,
  location,
  level,
  role,
  tools,
  languages,
}: TJob) {
  const tags = [role, level, ...languages, ...tools];

  return (
    <article className="relative items-center rounded-lg bg-white px-6 py-8 font-bold shadow-md lg:flex">
      <img
        src={logo}
        alt={`${company} logo`}
        className="-top-8 h-16 w-16 max-lg:absolute lg:mr-4 lg:h-[5.5rem] lg:w-[5.5rem]"
      />
      <div className="flex flex-1 flex-col justify-between gap-2 max-lg:mt-2 lg:gap-1.5">
        <div className="flex items-center">
          <h3 className="mr-6 text-accent">{company}</h3>
          {isNew && <Chip text="NEW!" />}
          {featured && <Chip text="FEATURED" />}
        </div>
        <Link
          href="/"
          className="transition-colors hover:text-accent focus-visible:text-accent lg:text-xl"
        >
          {position}
        </Link>
        <div className="flex gap-2 font-semibold text-secondaryText">
          <p>{postedAt}</p>
          <span>&middot;</span>
          <p>{contract}</p>
          <span>&middot;</span>
          <p>{location}</p>
        </div>
      </div>
      <hr className="my-4 h-px w-full lg:hidden" />
      <ul className="flex flex-wrap gap-4">
        {tags.map(i => (
          <li key={i}>
            <Tag text={i} />
          </li>
        ))}
      </ul>
    </article>
  );
}
