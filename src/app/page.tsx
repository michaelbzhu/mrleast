export default function Home() {
  return (
    <div className="w-1/4 flex p-4">
      <input
        className="border border-black rounded-md w-full mr-2 text-sm p-1"
        placeholder="youtube.com/watch?v=..."
      ></input>
      <button className="border-black border rounded-sm px-1 text-sm">
        Submit
      </button>
    </div>
  );
}
