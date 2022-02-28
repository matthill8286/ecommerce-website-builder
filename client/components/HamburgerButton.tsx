interface HamburgerButtonProps {
  onClick: (ev: any) => void;
  active?: boolean;
}

export const HamburgerButton = ({ active, onClick }: HamburgerButtonProps) => {
  return (
    <button onClick={(ev) => onClick(ev)} aria-label="Open main menu">
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};
