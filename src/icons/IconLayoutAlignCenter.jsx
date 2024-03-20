function IconLayoutAlignCenter(props) {
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
      <path d="M12 4v5M12 15v5" />
      <path d="M8 9 H16 A2 2 0 0 1 18 11 V13 A2 2 0 0 1 16 15 H8 A2 2 0 0 1 6 13 V11 A2 2 0 0 1 8 9 z" />
    </svg>
  );
}

export default IconLayoutAlignCenter;
