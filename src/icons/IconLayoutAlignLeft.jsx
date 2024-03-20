function IconLayoutAlignLeft(props) {
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
      <path d="M4 4v16" />
      <path d="M10 9 H18 A2 2 0 0 1 20 11 V13 A2 2 0 0 1 18 15 H10 A2 2 0 0 1 8 13 V11 A2 2 0 0 1 10 9 z" />
    </svg>
  );
}

export default IconLayoutAlignLeft;
