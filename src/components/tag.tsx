export function Tag({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="rounded bg-accent/10 px-4 py-1 text-accent transition-colors hover:bg-accent hover:text-white focus-visible:bg-accent focus-visible:text-white"
    >
      {text}
    </button>
  );
}
