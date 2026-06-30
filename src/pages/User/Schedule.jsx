import React from "react";
import Navbar from "../../components/User/Navbar";
import Footer from "../../components/User/Footer";
import { Calendar, Clock, Film, Tv, Clapperboard } from "lucide-react";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600">
            <Calendar className="h-10 w-10 text-white" />
          </div>
          <h1 className="mb-4 text-5xl font-bold text-white">Schedule</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Discover upcoming movies, series, and anime releases. Stay updated with the latest entertainment calendar.
          </p>
        </div>

        {/* Coming Soon Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Movies Card */}
          <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a]/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-600/50 hover:bg-[#111111]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-violet-600/10">
              <Film className="h-8 w-8 text-violet-400" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold text-white">Upcoming Movies</h3>
            <p className="text-gray-400">
              Browse theatrical releases, streaming premieres, and exclusive launches coming soon.
            </p>
          </div>

          {/* Series Card */}
          <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a]/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-600/50 hover:bg-[#111111]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-pink-600/10">
              <Tv className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold text-white">Upcoming Series</h3>
            <p className="text-gray-400">
              Track new seasons, episode releases, and series premieres across all platforms.
            </p>
          </div>

          {/* Anime Card */}
          <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a]/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-600/50 hover:bg-[#111111]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600/10">
              <Clapperboard className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold text-white">Upcoming Anime</h3>
            <p className="text-gray-400">
              Stay updated with seasonal anime releases, OVAs, and special episodes.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-pink-600/10 p-12 backdrop-blur-xl">
          <div className="text-center">
            <Clock className="mx-auto mb-6 h-12 w-12 text-violet-400" />
            <h2 className="mb-4 text-3xl font-bold text-white">Release Calendar Features</h2>
            <p className="mx-auto max-w-3xl text-gray-300">
              Get personalized notifications, set reminders for your favorite shows, and explore curated lists of upcoming releases. Filter by genre, platform, and release date to never miss what matters to you.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;
