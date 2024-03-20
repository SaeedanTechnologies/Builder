function IconLayoutAlignMiddle(props) {
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
      <path d="M4 12h5M15 12h5" />
      <path d="M11 6 H13 A2 2 0 0 1 15 8 V16 A2 2 0 0 1 13 18 H11 A2 2 0 0 1 9 16 V8 A2 2 0 0 1 11 6 z" />
    </svg>
  );
}

export default IconLayoutAlignMiddle;
