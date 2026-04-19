"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";

const categories: ProjectCategory[] = ["전체", "서비스기획", "이벤트기획", "UX분석", "운영·콘텐츠"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("전체");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    activeCategory === "전체"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#F5F1E8]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-[#4A7C59] uppercase tracking-widest mb-3">
            Projects
          </p>
          <h2 className="text-4xl font-black text-[#1C1C1C] mb-4">작업물</h2>
          <p className="text-[#6B6B6B] text-lg">
            나열하지 않습니다. 무엇을 해결했는지 보여드립니다.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#4A7C59] text-white shadow-sm"
                  : "bg-white border border-[#D8CEB8] text-[#6B6B6B] hover:border-[#4A7C59] hover:text-[#4A7C59]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid gap-5">
          {filtered.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className="bg-white border border-[#D8CEB8] rounded-2xl overflow-hidden hover:border-[#4A7C59] hover:shadow-md transition-all duration-200"
              >
                {/* Card header — always visible */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                  className="w-full text-left p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      {/* Category + period */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="bg-[#4A7C59]/10 text-[#4A7C59] text-xs font-semibold px-2.5 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-[#6B6B6B] text-xs">{project.period}</span>
                        <span className="text-[#6B6B6B] text-xs">·</span>
                        <span className="text-[#6B6B6B] text-xs">{project.organization}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#1C1C1C] mb-2 group-hover:text-[#4A7C59]">
                        {project.title}
                      </h3>

                      {/* Role */}
                      <p className="text-[#6B6B6B] text-sm mb-3">{project.role}</p>

                      {/* Highlight */}
                      {project.highlight && (
                        <div className="inline-flex items-center gap-1.5 bg-[#F5F1E8] border border-[#D8CEB8] rounded-lg px-3 py-1.5">
                          <span className="text-[#4A7C59] text-xs">✦</span>
                          <span className="text-[#2D5016] text-xs font-semibold">{project.highlight}</span>
                        </div>
                      )}
                    </div>

                    {/* Expand indicator */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full border border-[#D8CEB8] flex items-center justify-center text-[#4A7C59] transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        ↓
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-6 md:px-8 pb-8 border-t border-[#EEE8D8]">
                    <div className="pt-6 grid md:grid-cols-2 gap-8">
                      {/* Summary */}
                      <div>
                        <h4 className="text-sm font-bold text-[#1C1C1C] mb-3 uppercase tracking-wide">
                          무엇을 했나요
                        </h4>
                        <p className="text-[#6B6B6B] text-sm leading-relaxed">{project.summary}</p>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h4 className="text-sm font-bold text-[#1C1C1C] mb-3 uppercase tracking-wide">
                          어떤 성과가 있었나요
                        </h4>
                        <ul className="space-y-2">
                          {project.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#6B6B6B]">
                              <span className="text-[#4A7C59] mt-0.5 flex-shrink-0">✓</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#F5F1E8] text-[#6B6B6B] text-xs px-3 py-1 rounded-full border border-[#D8CEB8]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
