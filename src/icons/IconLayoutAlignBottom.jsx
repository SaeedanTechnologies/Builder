function IconLayoutAlignBottom(props) {
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
      <path d="M4 20h16" />
      <path d="M11 4 H13 A2 2 0 0 1 15 6 V14 A2 2 0 0 1 13 16 H11 A2 2 0 0 1 9 14 V6 A2 2 0 0 1 11 4 z" />
    </svg>
  );
}

export default IconLayoutAlignBottom;
