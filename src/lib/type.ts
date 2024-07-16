export interface MarkdownFileType<T = Record<string, string>> {
  frontmatter: T;
  file: string;
  url?: string;
  Content: any;
  getHeadings: () => {
    depth: number;
    slug: string;
    text: string;
  }[];
}

export interface Subtopic {
  subtopic_id: number;
  subtopic_name: string;
}

export interface Topic {
  topic_id: number;
  topic_name: string;
  subtopics?: Subtopic[];
}

export interface Phase {
  phase_id: number;
  phase_name: string;
  topics: Topic[];
}
