export function Chip({ text }: { text: 'NEW!' | 'FEATURED' }) {
  return (
    <p
      className={`rounded-full py-1 px-3 text-xs text-white ${
        text === 'FEATURED' ? 'bg-primaryText' : 'mr-2 bg-accent'
      }`}
    >
      {text}
    </p>
  );
}
