function IconLayoutAlignTop(props) {
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
      <path d="M4 4h16" />
      <path d="M11 8 H13 A2 2 0 0 1 15 10 V18 A2 2 0 0 1 13 20 H11 A2 2 0 0 1 9 18 V10 A2 2 0 0 1 11 8 z" />
    </svg>
  );
}

export default IconLayoutAlignTop;
