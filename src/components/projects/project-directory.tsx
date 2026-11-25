"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import type { ProjectMetadata } from "@/types/project";

export function ProjectDirectory({
  projects,
}: {
  projects: ProjectMetadata[];
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [technology, setTechnology] = useState("");

  const categories = useMemo(
    () =>
      [...new Set(projects.flatMap((project) => project.category ?? []))].sort(
        (a, b) => a.localeCompare(b),
      ),
    [projects],
  );
  const technologies = useMemo(
    () =>
      [...new Set(projects.flatMap((project) => project.technologies))].sort(
        (a, b) => a.localeCompare(b),
      ),
    [projects],
  );

  const filteredProjects = projects.filter((project) => {
    const searchText = [
      project.title,
      project.description,
      project.category,
      ...project.technologies,
    ]
      .filter(Boolean)
      .join(" ")
      .toLocaleLowerCase();

    return (
      (!search || searchText.includes(search.trim().toLocaleLowerCase())) &&
      (!category || project.category === category) &&
      (!technology || project.technologies.includes(technology))
    );
  });
  const hasActiveFilters = Boolean(search.trim() || category || technology);
  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setTechnology("");
  };

  if (projects.length === 0) {
    return (
      <div className="space-y-4">
        <p aria-live="polite" className="text-sm text-muted-foreground">
          0 published projects
        </p>
        <div
          className="space-y-2 rounded-lg border border-border bg-card p-5"
          role="status"
        >
          <h2 className="font-heading text-lg font-semibold">
            No published projects yet
          </h2>
          <p className="text-muted-foreground">
            Project details will appear here when they are ready to share.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <label className="grid gap-2 text-sm font-medium">
        Search projects
        <input
          autoComplete="off"
          className="h-10 rounded-md border border-input bg-background px-3 text-base font-normal text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by name, category, or technology"
          type="search"
          value={search}
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row">
        <label className="grid flex-1 gap-2 text-sm font-medium">
          Category
          <select
            className="h-10 rounded-md border border-input bg-background px-3 text-foreground focus-visible:outline-2 focus-visible:outline-ring"
            onChange={(event) => setCategory(event.target.value)}
            value={category}
          >
            <option value="">All categories</option>
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="grid flex-1 gap-2 text-sm font-medium">
          Technology
          <select
            className="h-10 rounded-md border border-input bg-background px-3 text-foreground focus-visible:outline-2 focus-visible:outline-ring"
            onChange={(event) => setTechnology(event.target.value)}
            value={technology}
          >
            <option value="">All technologies</option>
            {technologies.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p aria-live="polite" className="text-sm text-muted-foreground">
          {hasActiveFilters
            ? `Showing ${filteredProjects.length} of ${projects.length} projects`
            : `${projects.length} published ${projects.length === 1 ? "project" : "projects"}`}
        </p>
        {hasActiveFilters ? (
          <Button onClick={clearFilters} type="button" variant="outline">
            Clear filters
          </Button>
        ) : null}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant={project.image ? "illustrated" : "compact"}
            />
          ))}
        </div>
      ) : (
        <div
          aria-live="polite"
          className="space-y-2 rounded-lg border border-border bg-card p-5"
          role="status"
        >
          <h2 className="font-heading text-lg font-semibold">
            No matching projects
          </h2>
          <p className="text-muted-foreground">
            Try a different search or clear the selected filters.
          </p>
        </div>
      )}
    </div>
  );
}
