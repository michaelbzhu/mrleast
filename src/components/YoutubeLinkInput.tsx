"use client";

type YoutubeLinkInputProps = {
  onSubmit: (link: string) => void;
};

export default function YoutubeLinkInput({ onSubmit }: YoutubeLinkInputProps) {
  return (
    <div className="w-1/4 flex p-4">
      <input
        className="border border-black rounded-md w-full mr-2 text-sm p-1"
        placeholder="youtube.com/watch?v=..."
      ></input>
      <button
        className="border-black border rounded-sm px-1 text-sm"
        onClick={(e) => onSubmit(e.currentTarget.value)}
      >
        Submit
      </button>
    </div>
  );
}
