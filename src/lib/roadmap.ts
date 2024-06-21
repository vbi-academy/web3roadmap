import type { MarkdownFileType } from "./type";

export type RoadmapFrontmatter = {
  title: string;
  briefTitle: string;
  description: string;
  tags: string[];
  order: number;
  isHidden: boolean;
};

export type RoadmapFileType = MarkdownFileType<RoadmapFrontmatter> & {
  id: string;
};

function roadmapPathToId(filePath: string): string {
  const fileName = filePath.split("/").pop() || "";

  return fileName.replace(".md", "");
}

export async function getRoadmapIds() {
  const roadmapFiles = import.meta.glob<RoadmapFileType>(
    "/src/data/roadmaps/*/*.md",
    {
      eager: true,
    }
  );

  return Object.keys(roadmapFiles).map(roadmapPathToId);
}

export async function getRoadmapsByTag(
  tag: string
): Promise<RoadmapFileType[]> {
  const roadmapFilesMap = import.meta.glob<RoadmapFileType>(
    "/src/data/roadmaps/*/*.md",
    {
      eager: true,
    }
  );

  const roadmapFiles: RoadmapFileType[] = Object.values(roadmapFilesMap);

  const filteredRoadmaps = roadmapFiles
    .filter((roadmapFile) => roadmapFile.frontmatter.tags.includes(tag))
    .map((roadmapFile) => ({
      ...roadmapFile,
      id: roadmapPathToId(roadmapFile.file),
    }));

  return filteredRoadmaps.sort(
    (a, b) => a.frontmatter.order - b.frontmatter.order
  );
}
