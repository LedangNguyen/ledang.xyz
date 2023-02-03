import { ISbRichtext } from "storyblok-js-client";

interface AppPathItem {
  title: string;
  subtitle: string;
  start_date: string;
  end_date: string;
  end_date_present: boolean;
  description: ISbRichtext;
}
