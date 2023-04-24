import type { Menu } from "./Menu";
import type { PostRecommendation } from "./PostRecommendation";

export type ContentResponse = {
  menus: Menu[];
  "posts-recommendations": PostRecommendation[];
};
