export class Blog {

  constructor(text: string, title: string, summary: string, links: [string], pictures: [[string, string]]) {
    this.text = text;
    this.summary = summary;
    this.title = title;
    this.links = links;
    this.pictures = pictures;
  }

  text: string;
  title: string;
  summary: string;
  links: [string];
  pictures: [[string, string]];
}
