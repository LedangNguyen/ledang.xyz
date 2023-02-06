import { ISbRichtext } from "storyblok-js-client";

interface AppProjectsItem {
  title: string;
  url: {
    rel: string;
    target: string;
    url: string;
  };
  description: ISbRichtext;

  techs: string[];

  image: {
    filename: string;
    alt: string;
  };
}
