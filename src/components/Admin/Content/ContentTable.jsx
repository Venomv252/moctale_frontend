import React from "react";
import ContentRow from "./ContentRow.jsx";

const ContentTable = ({ contents, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[1000px] border-collapse">
        <thead className="bg-[#111]">
          <tr>
            <th className="px-4 py-4 text-left">Poster</th>
            <th className="px-4 py-4 text-left">Title</th>
            <th className="px-4 py-4 text-left">Type</th>
            <th className="px-4 py-4 text-left">Status</th>
            <th className="px-4 py-4 text-left">Language</th>
            <th className="px-4 py-4 text-left">Release</th>
            <th className="px-4 py-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {contents.map((content) => (
            <ContentRow
              key={content._id}
              content={content}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;