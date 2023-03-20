import Image from 'next/image';

import pattern from '../../public/images/bg-header-desktop.svg';

export function BgPattern() {
  return (
    <div className="relative h-[156px] w-full">
      <Image
        fill
        alt=""
        priority
        src={pattern}
        className="bg-accent object-cover"
      />
    </div>
  );
}
