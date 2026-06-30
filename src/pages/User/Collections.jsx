import React from "react";
import Navbar from "../../components/User/Navbar";
import Footer from "../../components/User/Footer";
import { FolderHeart, Grid3x3, Bookmark, Users, Star, TrendingUp } from "lucide-react";

const Collections = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600">
            <FolderHeart className="h-10 w-10 text-white" />
          </div>
          <h1 className="mb-4 text-5xl font-bold text-white">Collections</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Explore curated collections created by the community. Discover themed lists, rankings, and personalized recommendations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Public Collections */}
          <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a]/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-600/50 hover:bg-[#111111]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-violet-600/10">
              <Grid3x3 className="h-8 w-8 text-violet-400" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold text-white">Public Collections</h3>
            <p className="text-gray-400">
              Browse collections created by other users. Find themed lists like "Best Horror Movies" or "Marvel Timeline".
            </p>
          </div>

          {/* Saved Collections */}
          <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a]/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-600/50 hover:bg-[#111111]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-pink-600/10">
              <Bookmark className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold text-white">Save Collections</h3>
            <p className="text-gray-400">
              Bookmark your favorite collections for easy access. Keep track of lists you want to watch.
            </p>
          </div>

          {/* Follow Creators */}
          <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a]/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-600/50 hover:bg-[#111111]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600/10">
              <Users className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold text-white">Follow Creators</h3>
            <p className="text-gray-400">
              Follow users who create amazing collections. Get notified when they publish new lists.
            </p>
          </div>
        </div>

        {/* Popular Collection Examples */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-white">Popular Collection Types</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-[#0a0a0a]/50 p-6 backdrop-blur-xl">
              <Star className="mb-3 h-8 w-8 text-yellow-400" />
              <h3 className="mb-2 text-xl font-semibold text-white">Genre Collections</h3>
              <p className="text-gray-400">Best Horror Movies, Classic Sci-Fi, Romantic Comedies, Action Thrillers</p>
            </div>
            
            <div className="rounded-xl border border-white/10 bg-[#0a0a0a]/50 p-6 backdrop-blur-xl">
              <TrendingUp className="mb-3 h-8 w-8 text-violet-400" />
              <h3 className="mb-2 text-xl font-semibold text-white">Trending Collections</h3>
              <p className="text-gray-400">Nolan Collection, Marvel Cinematic Universe, Best Anime of 2025</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-pink-600/10 p-12 text-center backdrop-blur-xl">
          <FolderHeart className="mx-auto mb-6 h-12 w-12 text-violet-400" />
          <h2 className="mb-4 text-3xl font-bold text-white">Create Your Own Collection</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Organize your favorite movies, series, and anime into themed collections. Share them with the community and help others discover great content.
          </p>
          <button className="rounded-lg bg-violet-600 px-8 py-3 font-semibold text-white transition-all hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-600/50">
            Create Collection
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
