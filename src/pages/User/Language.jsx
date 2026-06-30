import React from "react";
import GenericPage from "./GenericPage";
import { Languages, MessageSquare, Globe, Subtitles } from "lucide-react";

const Language = () => {
  return (
    <GenericPage
      icon={Languages}
      title="Language"
      description="Browse content by language. Find movies and series in English, Hindi, Japanese, Korean, and many more languages."
      features={[
        {
          icon: MessageSquare,
          title: "Multiple Languages",
          description: "Discover content in 50+ languages from around the world.",
        },
        {
          icon: Subtitles,
          title: "Subtitle Options",
          description: "Filter by available subtitle languages for accessibility.",
        },
        {
          icon: Globe,
          title: "Original Audio",
          description: "Watch content in its original language with subtitles.",
        },
      ]}
    />
  );
};

export default Language;
