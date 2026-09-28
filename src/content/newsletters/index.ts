export type NewsletterBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string };

export type NewsletterIssue = {
  slug: string;
  title: string;
  excerpt: string;
  content: NewsletterBlock[];
};

const markdownFiles = import.meta.glob<string>("./*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function parseContent(markdown: string): NewsletterBlock[] {
  const blocks: NewsletterBlock[] = [];
  let paragraph: string[] = [];

  function flushParagraph() {
    if (paragraph.length) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  }

  for (const line of markdown.split(/\r?\n/)) {
    const heading = line.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (heading) {
      flushParagraph();
      blocks.push({ type: "heading", level: heading[1].length, text: heading[2] });
    } else if (line.trim()) {
      paragraph.push(line.trim());
    } else {
      flushParagraph();
    }
  }

  flushParagraph();
  return blocks;
}

function parseNewsletter(path: string, markdown: string): NewsletterIssue {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`Newsletter is missing frontmatter: ${path}`);

  const metadata = Object.fromEntries(
    match[1].split(/\r?\n/).map((line) => {
      const separator = line.indexOf(":");
      if (separator < 1) throw new Error(`Invalid newsletter frontmatter in ${path}`);
      return [line.slice(0, separator).trim(), line.slice(separator + 1).trim()];
    }),
  );
  const slug = path.slice(path.lastIndexOf("/") + 1, -3);
  const title = metadata.title;
  const excerpt = metadata.excerpt;

  if (!title || !excerpt) throw new Error(`Newsletter needs a title and excerpt: ${path}`);

  return { slug, title, excerpt, content: parseContent(match[2]) };
}

export const newsletterIssues = Object.entries(markdownFiles)
  .map(([path, content]) => parseNewsletter(path, content))
  .sort((left, right) => left.slug.localeCompare(right.slug));
