function IconRectangleHorizontal(props) {
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
      <path d="M4 6 H20 A2 2 0 0 1 22 8 V16 A2 2 0 0 1 20 18 H4 A2 2 0 0 1 2 16 V8 A2 2 0 0 1 4 6 z" />
    </svg>
  );
}

export default IconRectangleHorizontal;
