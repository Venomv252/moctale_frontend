import { useState } from "react";

import ContentOverview from "../../components/Admin/Content/ContentOverview";
import ContentCollection from "../../components/Admin/Content/ContentCollection";
import SearchContent from "../../components/Admin/Content/SearchContent";
import AddContentForm from "../../components/Admin/Content/AddContentForm";
import { addContent } from "../../services/content.service";

const Content = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "view", label: "View Content", icon: "📋" },
    { id: "search", label: "Search Content", icon: "🔍" },
    { id: "add", label: "Add Content", icon: "➕" },
  ];

  const handleAddContent = async (contentData) => {
    try {
      await addContent(contentData);
      alert("Content added successfully!");
      setActiveTab("view");
    } catch (err) {
      console.error("Failed to add content:", err);
      alert("Failed to add content. Please try again.");
    }
  };

  return (
    <div className="min-h-screen  p-4 md:p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Content Management
        </h1>
        <p className="mt-2 text-gray-400">
          Manage your movies, series, and anime content
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-2 border-b border-white/10 pb-1 md:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-t-lg px-4 py-3 text-sm font-medium transition-all md:px-6 md:text-base ${
                activeTab === tab.id
                  ? "border-b-2 border-violet-600 bg-violet-600/10 text-violet-400"
                  : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-300"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-fadeIn">
        {activeTab === "overview" && <ContentOverview />}

        {activeTab === "view" && <ContentCollection />}

        {activeTab === "search" && <SearchContent />}

        {activeTab === "add" && <AddContentForm onSubmit={handleAddContent} />}
      </div>
    </div>
  );
};

export default Content;