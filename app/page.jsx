"use client";

import { useState, useEffect } from "react";
import { projects } from "@/data/projects"

function Project({ project }) {
  return (
    <article className="animate-fadeIn border-b border-neutral-200 pb-6">
      <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
      <p className="text-sm text-neutral-700 mb-3">{project.description}</p>
      {project.images && project.images.length > 0 && (
        <div
          className={`grid gap-3 mb-3 ${
            project.images.length === 1
              ? "grid-cols-1"
              : project.images.length === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Project visual"
              className="rounded-lg object-cover w-full h-64"
            />
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-neutral-100 border border-neutral-200 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.slug && (
        <a
          href={`project/${project.slug}`}
          className="text-blue-600 text-sm hover:underline"
        >
          View project →
        </a>
      )}
    </article>
  );
}


export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 flex flex-col max-w-5xl mx-auto p-6 gap-10">
      
      {/* Profile fixed at top center */}
      <header className="flex items-center gap-6 mx-auto mb-10 border-b border-neutral-200 pb-6">
        <img
          src="/bruno.jpg"
          alt="Bruno Nunes"
          className="w-32 h-32 rounded-lg object-cover"
        />
        <div className="text-left">
          <h1 className="text-3xl font-semibold">Bruno Nunes</h1>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-lg">
            Software Engineer with 15 years of experience, currently focusing on Data Science, Machine Learning and creative
            technology projects that combine data and visual storytelling.
          </p>
          <div className="mt-3 flex gap-3 text-sm">
            <a href="https://www.linkedin.com/in/brunodev/" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
            <a href="https://github.com/nunesdev" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
      </header>

      {/* Coluna direita (Feed) */}
      <section
        className="flex flex-col gap-10 animate-fadeIn mx-auto w-full md:w-[650px]"
   
      >
        <h1 className="text-2xl font-semibold mb-4 border-b border-neutral-200 pb-2">
          Selected Projects in Data Science & Machine Learning
        </h1>
        {projects.map((proj, i) => (
          <Project key={i} project={proj} />
        ))}
      </section>
      {/* Coluna esquerda (Perfil) */}
      
    </main>
  );
}
