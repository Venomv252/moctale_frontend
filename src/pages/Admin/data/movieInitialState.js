const movieInitialState = {
  title: "",
  slug: "",
  description: "",
  tagline: "",
  poster: "",
  banner: "",
  trailerUrl: "",
  releaseDate: "",
  duration: "",
  primaryLanguage: "",
  country: "",
  latestUpdate: "",

  whatsNew: "",

  status: "released",
  ageRating: "U/A 13+",
  genres: "",
  keywords: "",
  screenshots: "",
  availableLanguages: "",
  isTrending: false,
  isFeatured: false,
  isPremium: false,
  isPublished: true,

  cast: [
    {
      person: "",
      roleName: "",
      characterImage: "",
      order: 0,
    },
  ],
};
export default movieInitialState;