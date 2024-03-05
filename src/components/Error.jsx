export default function Error({ title, message }) {
  return (
    <div className="mt-10 text-center mx-auto bg-red-300 w-64 py-1 px-1 rounded-md">
      <h2 className="text-2xl font-bold text-red-800">{title}</h2>
      <p>{message}</p>
    </div>
  );
}
