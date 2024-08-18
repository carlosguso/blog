type Highlight = {
  title: string;
  description: string;
};

type Highlights = {
  thoughts: Highlight[];
  articles: Highlight[];
  projects: Highlight[];
};

const highlights: Highlights = {
  "thoughts": [],
  "articles": [],
  "projects": []
};

export default highlights;
