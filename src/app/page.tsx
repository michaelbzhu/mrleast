"use client";

import Feedback from "@/components/Feedback";
import YoutubeLinkInput from "@/components/YoutubeLinkInput";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <YoutubeLinkInput onSubmit={(link) => console.log(link)} />
      <Feedback />
    </div>
  );
}
