export const Button = ({ children, ...props }) => (
  <button
    className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition"
    {...props}
  >
    {children}
  </button>
);