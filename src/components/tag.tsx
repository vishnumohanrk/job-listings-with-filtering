import type { TagProps } from '@/lib/utils';

export function Tag({ text, action }: TagProps) {
  function handleClick() {
    action(text);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded bg-accent/10 px-4 py-1 text-accent transition-colors hover:bg-accent hover:text-white focus-visible:bg-accent focus-visible:text-white"
    >
      {text}
    </button>
  );
}
