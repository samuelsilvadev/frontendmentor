import type { Menu } from "./Menu";
import type { PostRecommendation } from "./PostRecommendation";
import type { PublishedMainNew } from "./PublishedMainNew";
import type { RelatedNew } from "./RelatedNew";

export type ContentResponse = {
  menus?: Menu[];
  "posts-recommendations"?: PostRecommendation[];
  "related-posts"?: RelatedNew[];
  "main-new"?: PublishedMainNew;
};
