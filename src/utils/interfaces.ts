export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { name: string; url: string };
    title: string;
    url: string;
    urlToImage: string;
}

export interface Source {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}
