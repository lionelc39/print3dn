export const Label = ({ children, ...props }) => (
  <label className="block mb-1 text-sm font-medium text-gray-700" {...props}>
    {children}
  </label>
);