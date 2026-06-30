import React from "react";
import Navbar from "../../components/User/Navbar";
import Footer from "../../components/User/Footer";
import { Construction } from "lucide-react";

const GenericPage = ({ icon: Icon, title, description, features = [] }) => {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600">
            {Icon ? <Icon className="h-10 w-10 text-white" /> : <Construction className="h-10 w-10 text-white" />}
          </div>
          <h1 className="mb-4 text-5xl font-bold text-white">{title}</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            {description || "This page is coming soon. Stay tuned for exciting features!"}
          </p>
        </div>

        {/* Features Grid */}
        {features.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={index}
                  className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a]/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-600/50 hover:bg-[#111111]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-violet-600/10">
                    <FeatureIcon className="h-8 w-8 text-violet-400" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Coming Soon Message */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-pink-600/10 p-12 text-center backdrop-blur-xl">
          <Construction className="mx-auto mb-6 h-12 w-12 text-violet-400" />
          <h2 className="mb-4 text-3xl font-bold text-white">Coming Soon</h2>
          <p className="mx-auto max-w-3xl text-gray-300">
            We're working hard to bring you this feature. Check back soon for updates!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GenericPage;
