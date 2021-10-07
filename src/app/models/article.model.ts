import { Source } from './source.model';

export class Article {
  title       : string;
  urlToImage  : string;
  description : string;
  author      : string;
  url         : string;
  source      : Source[];
  publishedAt : string;
  country     : string;

  constructor(
    title       : string,
    urlToImage  : string,
    description : string,
    author      : string,
    url         : string,
    source      : Source[],
    publishedAt : string,
    country     : string
  ) {
    this.title       = title;
    this.urlToImage  = urlToImage;
    this.description = description;
    this.author      = author;
    this.url         = url;
    this.source      = source;
    this.publishedAt = publishedAt;
    this.country     = country;
  }
}
