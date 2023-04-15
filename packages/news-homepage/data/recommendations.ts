import type { PostRecommendation } from "types/PostRecommendation";

export const data: PostRecommendation[] = [
  {
    title: "Reviving retro pc's",
    subtitle: "Tempor nostrud sit consectetur aliquip et occaecat minim eu.",
    image: {
      alt: "Old white pc",
      src: `${process.env.IMAGES_BASE_PATH}/image-retro-pcs.jpg`,
    },
  },
  {
    title: "Top 10 laptops of 2022",
    subtitle: "Tempor nostrud sit consectetur aliquip et occaecat minim eu.",
    image: {
      alt: "Some keys of a keyboard with red light",
      src: `${process.env.IMAGES_BASE_PATH}/image-top-laptops.jpg`,
    },
  },
  {
    title: "The Growth of Gaming",
    subtitle: "Tempor nostrud sit consectetur aliquip et occaecat minim eu.",
    image: {
      alt: "A hand below a white floating controller",
      src: `${process.env.IMAGES_BASE_PATH}/image-gaming-growth.jpg`,
    },
  },
];
