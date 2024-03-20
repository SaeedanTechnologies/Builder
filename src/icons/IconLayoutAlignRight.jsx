function IconLayoutAlignRight(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M20 4v16" />
      <path d="M6 9 H14 A2 2 0 0 1 16 11 V13 A2 2 0 0 1 14 15 H6 A2 2 0 0 1 4 13 V11 A2 2 0 0 1 6 9 z" />
    </svg>
  );
}

export default IconLayoutAlignRight;
