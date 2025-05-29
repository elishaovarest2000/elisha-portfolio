// src/components/ui/button.jsx
export function Button({ children }) {
  return <button className="bg-blue-500 text-white px-4 py-2 rounded">{children}</button>;
}
export function ButtonLink({ href, children }) {
  return (
    <a href={href} className="bg-blue-500 text-white px-4 py-2 rounded">
      {children}
    </a>
  );
}
export function ButtonIcon({ icon, children }) {
  return (
    <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}