import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { seasonsData } from "../../data/layout";

export default function SeasonDetails() {
  const [openSeason, setOpenSeason] = useState("Season 02");

  const toggleSeason = (season) => {
    setOpenSeason((prev) => (prev === season ? null : season));
  };

  return (
    <div className="w-full rounded-2xl p-4 ">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Seasons and Episodes</h2>
      </div>

      {/* Seasons */}
      <div className="space-y-3">
        {seasonsData.map((season) => {
          const isOpen = openSeason === season.season;

          return (
            <div
              key={season.season}
              className="overflow-hidden rounded-xl border border-white/5"
            >
              {/* Season Header */}
              <button
                onClick={() => toggleSeason(season.season)}
                className="flex w-full items-center justify-between px-4 py-4 transition hover:bg-white/5"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">{season.season}</span>

                  <span className="text-sm text-zinc-500">
                    {season.episodesCount} Episodes
                  </span>
                </div>

                <div className="rounded-full bg-white/5 p-1">
                  {isOpen ? (
                    <Icon
                      icon="mdi:chevron-up"
                      width={16}
                      className="text-zinc-400"
                    />
                  ) : (
                    <Icon
                      icon="mdi:chevron-down"
                      width={16}
                      className="text-zinc-400"
                    />
                  )}
                </div>
              </button>

              {/* Episodes */}
              {isOpen && (
                <div className="space-y-4 border-t border-white/5 p-4">
                  {season.episodes.map((episode) => (
                    <div
                      key={episode.id}
                      className="flex gap-3 rounded-xl p-2 transition hover:bg-white/[0.03]"
                    >
                      {/* Episode Number */}
                      <div className="pt-2 text-lg font-semibold text-zinc-500">
                        {episode.id}
                      </div>

                      {/* Thumbnail */}
                      <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={episode.image}
                          alt={episode.title}
                          className="h-full w-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30" />

                        {/* Play Button */}
                        <button className="absolute inset-0 flex items-center justify-center">
                          <Icon
                            icon="mdi:play-circle"
                            width={40}
                            className="text-white/90 transition hover:scale-105"
                          />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="line-clamp-1 text-sm font-semibold">
                            {episode.title}
                          </h3>

                          <div className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[11px] text-zinc-400">
                            <Icon
                              icon="mdi:clock-outline"
                              width={12}
                              className="text-zinc-400"
                            />
                            {episode.duration}
                          </div>
                        </div>

                        <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-zinc-400">
                          {episode.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
