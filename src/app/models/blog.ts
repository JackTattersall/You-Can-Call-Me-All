import * as firebase from 'firebase/app';
import DataSnapshot = firebase.database.DataSnapshot;

export class Blog {

  constructor(text: string, title: string, summary: string, links: [string], pictures: [[string, string]], date: string) {
    this.text = text;
    this.summary = summary;
    this.title = title;
    this.links = links;
    this.pictures = pictures;
    this.date = date;
  }

  date: string;
  text: string;
  title: string;
  summary: string;
  links: [string];
  pictures: [[string, string]];

  // static toBlog(blogSnapshot: DataSnapshot) {
  //   return new Blog(
  //     blogSnapshot.
  //   );
  // }
}
