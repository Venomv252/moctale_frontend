import React from "react";
import Navbar from "../../components/User/Navbar";
import HeroBanner from "../../components/User/HeroBanner";
import ContentCarousel from "../../components/User/ContentCarousel";
import ContentCard from "../../components/User/ContentCard";
import TalkCard from "../../components/User/TalkCard";
import InterestCard from "../../components/User/InterestCard";
import ReviewCard from "../../components/User/ReviewCard";
import SectionHeader from "../../components/User/SectionHeader";
import Footer from "../../components/User/Footer";

import {
  heroContent,
  talkOfTheTown,
  mostInterested,
  trendingThisWeek,
  nowShowing,
  popularMovies,
  popularSeries,
  popularAnime,
  topRated,
  recentlyReviewed,
} from "../../data/mockData";

const Home = () => {
  const handleContentClick = (content) => {
    console.log("Content clicked:", content);
    // TODO: Navigate to content detail page
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner content={heroContent} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        {/* Talk Of The Town */}
        <section className="mb-16">
          <SectionHeader
            title="Talk Of The Town"
            subtitle="Most discussed content this month"
            viewAllLink="/talk"
          />
          <ContentCarousel>
            {talkOfTheTown.map((content) => (
              <TalkCard
                key={content.id}
                content={content}
                onClick={() => handleContentClick(content)}
              />
            ))}
          </ContentCarousel>
        </section>

        {/* Most Interested */}
        <section className="mb-16">
          <SectionHeader
            title="Most Interested"
            subtitle="Content that everyone wants to watch"
            viewAllLink="/interested"
          />
          <ContentCarousel>
            {mostInterested.map((content) => (
              <InterestCard
                key={content.id}
                content={content}
                onClick={() => handleContentClick(content)}
              />
            ))}
          </ContentCarousel>
        </section>

        {/* Trending This Week */}
        <section className="mb-16">
          <SectionHeader
            title="Trending This Week"
            subtitle="What's hot right now"
            viewAllLink="/trending"
          />
          <ContentCarousel>
            {trendingThisWeek.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                onClick={() => handleContentClick(content)}
              />
            ))}
          </ContentCarousel>
        </section>

        {/* Now Showing */}
        <section className="mb-16">
          <SectionHeader
            title="Now Showing"
            subtitle="Currently playing in theaters"
            viewAllLink="/now-showing"
          />
          <ContentCarousel>
            {nowShowing.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                onClick={() => handleContentClick(content)}
              />
            ))}
          </ContentCarousel>
        </section>

        {/* Popular Movies */}
        <section className="mb-16">
          <SectionHeader
            title="Popular Movies"
            subtitle="Fan favorites and classics"
            viewAllLink="/movies/popular"
          />
          <ContentCarousel>
            {popularMovies.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                onClick={() => handleContentClick(content)}
              />
            ))}
          </ContentCarousel>
        </section>

        {/* Popular Series */}
        <section className="mb-16">
          <SectionHeader
            title="Popular Series"
            subtitle="Binge-worthy shows"
            viewAllLink="/series/popular"
          />
          <ContentCarousel>
            {popularSeries.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                onClick={() => handleContentClick(content)}
              />
            ))}
          </ContentCarousel>
        </section>

        {/* Popular Anime */}
        <section className="mb-16">
          <SectionHeader
            title="Popular Anime"
            subtitle="Top picks from the anime world"
            viewAllLink="/anime/popular"
          />
          <ContentCarousel>
            {popularAnime.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                onClick={() => handleContentClick(content)}
              />
            ))}
          </ContentCarousel>
        </section>

        {/* Top Rated */}
        <section className="mb-16">
          <SectionHeader
            title="Top Rated"
            subtitle="Highest rated by our community"
            viewAllLink="/top-rated"
          />
          <ContentCarousel>
            {topRated.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                onClick={() => handleContentClick(content)}
              />
            ))}
          </ContentCarousel>
        </section>

        {/* Recently Reviewed */}
        <section className="mb-16">
          <SectionHeader
            title="Recently Reviewed"
            subtitle="Latest reviews from our community"
            viewAllLink="/reviews"
          />
          <ContentCarousel>
            {recentlyReviewed.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                onClick={() => handleContentClick(review)}
              />
            ))}
          </ContentCarousel>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
