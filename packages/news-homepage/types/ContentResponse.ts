import type { Menu } from "./Menu";
import type { PostRecommendation } from "./PostRecommendation";
import type { PublishedMainNew } from "./PublishedMainNew";
import type { RelatedPost } from "./RelatedPost";

export type ContentResponse = {
  menus?: Menu[];
  "posts-recommendations"?: PostRecommendation[];
  "related-posts"?: RelatedPost[];
  "main-new"?: PublishedMainNew;
};
