export interface MarkdownFileType<T = Record<string, string>> {
  frontmatter: T;
  file: string;
  url?: string;
  Content: any;
}
