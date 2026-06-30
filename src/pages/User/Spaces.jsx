import React from "react";
import Navbar from "../../components/User/Navbar";
import Footer from "../../components/User/Footer";
import { MessageSquare, Users, Heart, MessageCircle, TrendingUp, Sparkles } from "lucide-react";

const Spaces = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600">
            <MessageSquare className="h-10 w-10 text-white" />
          </div>
          <h1 className="mb-4 text-5xl font-bold text-white">Spaces</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Join the conversation. Discuss movies, series, and anime with passionate fans from around the world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Discussions */}
          <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a]/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-600/50 hover:bg-[#111111]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-violet-600/10">
              <MessageCircle className="h-8 w-8 text-violet-400" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold text-white">Discussions</h3>
            <p className="text-gray-400">
              Start and join conversations about your favorite content. Share theories, reviews, and recommendations.
            </p>
          </div>

          {/* Community */}
          <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a]/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-600/50 hover:bg-[#111111]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-pink-600/10">
              <Users className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold text-white">Community</h3>
            <p className="text-gray-400">
              Connect with like-minded fans, follow users with similar tastes, and build your network.
            </p>
          </div>

          {/* Trending */}
          <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a]/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-600/50 hover:bg-[#111111]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600/10">
              <TrendingUp className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold text-white">Trending Topics</h3>
            <p className="text-gray-400">
              Discover what everyone's talking about. Join trending discussions and popular debates.
            </p>
          </div>
        </div>

        {/* Interaction Features */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-pink-600/10 p-12 backdrop-blur-xl">
            <Heart className="mb-6 h-12 w-12 text-violet-400" />
            <h2 className="mb-4 text-3xl font-bold text-white">Like & Comment</h2>
            <p className="text-gray-300">
              Engage with posts through likes and comments. Share your thoughts and react to discussions in real-time.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-12 backdrop-blur-xl">
            <Sparkles className="mb-6 h-12 w-12 text-blue-400" />
            <h2 className="mb-4 text-3xl font-bold text-white">Create Posts</h2>
            <p className="text-gray-300">
              Share your reviews, start discussions, and create polls. Express yourself with rich text, images, and spoiler tags.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Spaces;
