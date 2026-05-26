import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export const dashboardLink = {
  name: "Dashboard",
  path: "/admin/dashboard",
  icon: DashboardOutlinedIcon,
};

export const sidebarLinks = [
  {
    section: "MANAGE CONTENT",

    items: [
      {
        name: "Movies",
        path: "/admin/movies",
        icon: MovieOutlinedIcon,
      },

      {
        name: "Series",
        path: "/admin/series",
        icon: LiveTvOutlinedIcon,
      },
      {
        name: "Anime",
        path: "/admin/anime",
        icon: LiveTvOutlinedIcon,
      },

      {
        name: "Reviews",
        path: "/admin/reviews",
        icon: ReviewsOutlinedIcon,
      },

      {
        name: "Genres",
        path: "/admin/genres",
        icon: CategoryOutlinedIcon,
      },

      {
        name: "Cast & Crew",
        path: "/admin/cast",
        icon: GroupsOutlinedIcon,
      },
    ],
  },

  {
    section: "USER MANAGEMENT",

    items: [
      {
        name: "Users",
        path: "/admin/users",
        icon: PersonOutlineOutlinedIcon,
      },
    ],
  },

  {
    section: "SYSTEM",

    items: [
      {
        name: "Settings",
        path: "/admin/settings",
        icon: SettingsOutlinedIcon,
      },
    ],
  },
];
