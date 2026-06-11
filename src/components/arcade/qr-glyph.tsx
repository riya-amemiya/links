export const QrGlyph = ({ size = 16 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <rect
      height="7"
      rx="1.2"
      stroke="currentColor"
      strokeWidth="1.7"
      width="7"
      x="1.4"
      y="1.4"
    />
    <rect fill="currentColor" height="2" width="2" x="3.9" y="3.9" />
    <rect
      height="7"
      rx="1.2"
      stroke="currentColor"
      strokeWidth="1.7"
      width="7"
      x="15.6"
      y="1.4"
    />
    <rect fill="currentColor" height="2" width="2" x="18.1" y="3.9" />
    <rect
      height="7"
      rx="1.2"
      stroke="currentColor"
      strokeWidth="1.7"
      width="7"
      x="1.4"
      y="15.6"
    />
    <rect fill="currentColor" height="2" width="2" x="3.9" y="18.1" />
    <rect fill="currentColor" height="2" width="2" x="11" y="11" />
    <rect fill="currentColor" height="2" width="2" x="15.6" y="15.6" />
    <rect fill="currentColor" height="2" width="2.2" x="20" y="15.6" />
    <rect fill="currentColor" height="2" width="2" x="18" y="18" />
    <rect fill="currentColor" height="2.2" width="2" x="15.6" y="20" />
    <rect fill="currentColor" height="2" width="2" x="20.2" y="20.2" />
  </svg>
);
