export const Card = ({ children, className }) => (
  <div className={`border rounded-lg shadow-md p-4 ${className || ""}`}>{children}</div>
);

export const CardHeader = ({ children }) => <div className="mb-2">{children}</div>;
export const CardTitle = ({ children }) => <h3 className="text-lg font-bold">{children}</h3>;
export const CardDescription = ({ children }) => <p className="text-sm text-gray-500">{children}</p>;
export const CardContent = ({ children }) => <div>{children}</div>;