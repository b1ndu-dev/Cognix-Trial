"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";

import { Cover } from "@/components/cover";
import { Toolbar } from "@/components/toolbar";
import { Skeleton } from "@/components/ui/skeleton";

// Mock document data
const mockDocument = {
    id: "1",
    title: "Project Alpha",
    content: '[{"id":"a1b2c3d4-e5f6-7890-1234-567890abcdef","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"Start writing your document here...","styles":{}}],"children":[]}]',
    coverImage: "/cover.png",
    icon: "🚀"
};

const DocumentIdPage = () => {
  const Editor = useMemo(() => dynamic(() => import("@/components/editor"), { ssr: false }), []);

  const onChange = (content: string) => {
    // In a real app, you would save this content to the database.
    console.log("Content updated:", content);
  };

  return (
    <div className="pb-40">
      <Cover url={mockDocument.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={mockDocument} />
        <Editor
          onChange={onChange}
          initialContent={mockDocument.content}
        />
      </div>
    </div>
  );
}

export default DocumentIdPage;
