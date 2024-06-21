import type { MarkdownFileType } from "./type";

export type RoadmapFrontmatter = {
  title: string;
  description: string;
  tags: string[];
};

export type RoadmapFileType = MarkdownFileType<RoadmapFrontmatter> & {
  id: string;
};
