import React from "react";

const AdminContent = () => {
  return (
    <section className="w-full">
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
        <div className="rounded-[32px] border border-sky-300/20 bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(255,255,255,0.04))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
          <span className="text-xs uppercase tracking-[0.35em] text-sky-200/70">
            Admin / Content
          </span>
          <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">
            Content workspace
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            This page is ready for your content pipeline. You can add post
            review queues, media management, featured stories, or publishing
            actions here.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Starter modules
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-[22px] border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-medium text-white">Editorial queue</p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Review drafts, approvals, and publishing status.
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-medium text-white">Media library</p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Manage banners, thumbnails, and uploaded assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminContent;
