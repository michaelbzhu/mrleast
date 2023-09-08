"use client";

import YoutubeLinkInput from "@/components/YoutubeLinkInput";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <YoutubeLinkInput onSubmit={(link) => console.log(link)} />;
    </div>
  );
}
