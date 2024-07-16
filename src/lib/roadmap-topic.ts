import type { RoadmapFrontmatter } from "./roadmap";
import type { MarkdownFileType } from "./type";

export interface RoadmapTopicFileType {
  url: string;
  heading: string;
  file: MarkdownFileType;
  roadmap: RoadmapFrontmatter;
  roadmapId: string;
}

export const getRoadmapTopicFiles = async () => {
  const contentFiles = import.meta.glob<string>(
    "/src/data/roadmaps/*/content/**/*.md",
    {
      eager: true,
    }
  );

  const mapping: Record<string, RoadmapTopicFileType> = {};

  for (let filePath of Object.keys(contentFiles)) {
    const fileContent: MarkdownFileType = contentFiles[filePath] as any;
    const fileHeadings = fileContent.getHeadings();
    const firstHeading = fileHeadings[0];

    const [, roadmapId] =
      filePath.match(/^\/src\/data\/roadmaps\/(.+)?\/content\/(.+)?$/) || [];
    const topicUrl = generateTopicUrl(filePath);

    const currentRoadmap = await import(
      `../data/roadmaps/${roadmapId}/${roadmapId}.md`
    );

    mapping[topicUrl] = {
      url: topicUrl,
      heading: firstHeading?.text,
      file: fileContent,
      roadmap: currentRoadmap.frontmatter,
      roadmapId: roadmapId,
    };
  }

  return mapping;
};

function generateTopicUrl(filePath: string) {
  let result = filePath
    .replace("/src/data/roadmaps/", "/") // Remove the base `/src/data/roadmaps` from path
    .replace("/content", ""); // Remove the `/[roadmapId]/content`

  if (result.match(/\/\d+-/g)) {
    result = result.replace(/\/\d+-/g, "/"); // Remove ordering info `/101-ecosystem`
  }
  result = result
    .replace(/\/index\.md$/, "") // Make the `/index.md` to become the parent folder only
    .replace(/\.md$/, ""); // Remove `.md` from the end of file

  return result;
}
