import { ISbRichtext } from "storyblok-js-client";

interface AppProjectsItem {
  title: string;
  url: string;
  description: ISbRichtext;

  techs: string[];

  image: {
    filename: string;
    alt: string;
  };
}
