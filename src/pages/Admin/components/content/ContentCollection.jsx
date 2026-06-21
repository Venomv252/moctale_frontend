import React from "react";
import ContentTable from "./ContentTable.jsx";

const ContentCollection = ({ contents, onDelete }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          Content Collection
        </h2>

        <div className="rounded-xl bg-violet-600 px-4 py-2 text-sm">
          Total: {contents.length}
        </div>
      </div>

      <ContentTable
        contents={contents}
        onDelete={onDelete}
      />
    </div>
  );
};

export default ContentCollection;