export function FilterItem({ text }: { text: string }) {
  return (
    <li className="flex items-center rounded-l-md bg-accent/10 pl-4 font-bold text-accent">
      {text}
      <button
        type="button"
        className="ml-4 rounded-r-md bg-accent p-3 transition-colors hover:bg-primaryText focus-visible:bg-primaryText"
      >
        <span className="sr-only">Remove {text} from filters</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
          />
        </svg>
      </button>
    </li>
  );
}
