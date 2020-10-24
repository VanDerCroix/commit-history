export default interface Commit {
  sha: string;
  node_id: string;
  url: string;
  html_url: string;
  author: author;
}

interface author {
  login: string;
  id: number;
  node_id: string;
  url: string;
  html_url: string;
}