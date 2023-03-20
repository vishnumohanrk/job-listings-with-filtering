export type TJob = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export type TagProps = {
  text: string;
  action: (text: string) => void;
};

export function getTagsFromParams(filter: string | string[] | undefined) {
  if (!filter || filter.length === 0) return [];

  const arr =
    typeof filter === 'string'
      ? filter.split(',')
      : filter.flatMap(i => i.split(','));

  return arr.filter(Boolean);
}

export function getFilteredData(jobs: TJob[], filters: string[]) {
  if (filters.length === 0) {
    return jobs;
  }

  return jobs.filter(({ role, level, languages, tools }) => {
    const arr = [role, level, ...languages, ...tools].map(i => i.toLowerCase());

    return filters.every(i => arr.includes(i.toLowerCase()));
  });
}
