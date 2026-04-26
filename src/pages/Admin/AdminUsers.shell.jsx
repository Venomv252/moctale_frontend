import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const USERS_PER_PAGE = 10;
const placeholderRows = Array.from(
  { length: USERS_PER_PAGE },
  (_, index) => index,
);

const summaryCards = [
  {
    label: "Total users",
    value: "--",
    helper: "connect your backend count here",
  },
  {
    label: "Active users",
    value: "--",
    helper: "show live accounts from database",
  },
  {
    label: "Pending review",
    value: "--",
    helper: "show verification or approval queue",
  },
];

const AdminUsers = () => {
  return (
    <section className="w-full">
      <div className="space-y-6">
        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.8fr]">
          <div className="rounded-[32px] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(59,130,246,0.1),rgba(255,255,255,0.04))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
            <span className="text-xs uppercase tracking-[0.35em] text-cyan-100/70">
              Admin / Users
            </span>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">
              User directory shell for database-driven pagination.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              This page is designed as a frontend-only shell. Plug in your
              backend data later to load users, handle search, and move between
              pages 10 records at a time.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/12 bg-black/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-white/70">
                10 user slots per page
              </div>
              <div className="rounded-full border border-white/12 bg-black/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-white/70">
                Search by username, email, or phone
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {summaryCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                  {card.label}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                    <PeopleAltOutlinedIcon fontSize="small" />
                  </span>
                  <div>
                    <p className="text-3xl font-semibold text-white">
                      {card.value}
                    </p>
                    <p className="text-sm text-white/55">{card.helper}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_65px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Directory controls
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Search and browse users
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
                The layout is ready for your API integration. Connect the search
                input, table rows, and pagination buttons to your backend when
                you are ready.
              </p>
            </div>

            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100">
              Hollow shell only
            </div>
          </div>

          <div className="mt-6 grid gap-3 rounded-[26px] border border-white/10 bg-black/20 p-4 sm:grid-cols-[minmax(0,1fr)_auto_auto]">
            <label className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3 text-white/70 focus-within:border-cyan-300/35">
              <SearchRoundedIcon fontSize="small" />
              <input
                type="text"
                placeholder="Search username, phone, or email"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
              />
            </label>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[20px] bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Search
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[20px] border border-white/12 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/10"
            >
              Reset
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-2 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>Waiting for backend data</p>
            <p>0 users loaded</p>
          </div>

          <div className="mt-6 hidden overflow-hidden rounded-[26px] border border-white/10 lg:block">
            <table className="w-full border-collapse">
              <thead className="bg-white/[0.04] text-left text-xs uppercase tracking-[0.24em] text-white/40">
                <tr>
                  <th className="px-6 py-4 font-medium">User</th>
                  <th className="px-6 py-4 font-medium">Contact</th>
                  <th className="px-6 py-4 font-medium">Role</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Joined</th>
                </tr>
              </thead>
              <tbody>
                {placeholderRows.map((row) => (
                  <tr
                    key={row}
                    className="border-t border-white/[0.06] bg-black/[0.14]"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="h-11 w-11 rounded-2xl bg-white/[0.08]" />
                        <div className="space-y-2">
                          <div className="h-4 w-32 rounded-full bg-white/[0.08]" />
                          <div className="h-3 w-24 rounded-full bg-white/[0.05]" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="space-y-2">
                        <div className="h-4 w-44 rounded-full bg-white/[0.08]" />
                        <div className="h-4 w-32 rounded-full bg-white/[0.05]" />
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="h-4 w-20 rounded-full bg-white/[0.08]" />
                    </td>
                    <td className="px-6 py-5">
                      <div className="h-8 w-24 rounded-full bg-white/[0.08]" />
                    </td>
                    <td className="px-6 py-5">
                      <div className="h-4 w-24 rounded-full bg-white/[0.05]" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 lg:hidden">
            {placeholderRows.slice(0, 4).map((row) => (
              <article
                key={row}
                className="rounded-[24px] border border-white/10 bg-black/20 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-white/[0.08]" />
                    <div className="space-y-2">
                      <div className="h-4 w-28 rounded-full bg-white/[0.08]" />
                      <div className="h-3 w-20 rounded-full bg-white/[0.05]" />
                    </div>
                  </div>

                  <div className="h-7 w-20 rounded-full bg-white/[0.08]" />
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="h-4 w-full rounded-full bg-white/[0.06]" />
                  <div className="h-4 w-2/3 rounded-full bg-white/[0.05]" />
                  <div className="h-12 rounded-[18px] border border-white/[0.08] bg-white/[0.03]" />
                  <div className="h-12 rounded-[18px] border border-white/[0.08] bg-white/[0.03]" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[26px] border border-dashed border-white/12 bg-black/20 px-6 py-8 text-center">
            <h3 className="text-xl font-semibold text-white">
              Connect your user API here
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/55">
              Replace the placeholder rows with your real database response,
              then wire the search button and pagination controls to your
              backend.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/55">Showing 0-0 of 0 users</p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/40"
              >
                <ChevronLeftRoundedIcon fontSize="small" />
                Previous
              </button>

              <div className="rounded-full border border-cyan-300/[0.16] bg-cyan-300/[0.08] px-4 py-2 text-sm text-cyan-100">
                Page -- of --
              </div>

              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-cyan-400/40 px-4 py-2 text-sm font-semibold text-slate-900/70"
              >
                Next
                <ChevronRightRoundedIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminUsers;
