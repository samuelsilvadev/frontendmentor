import { Img } from "./Hero.styles";

export function Hero(props: React.HTMLAttributes<HTMLImageElement>) {
  return (
    <Img
      {...props}
      src={process.env.PUBLIC_URL + "/images/image-hero-mobile.png"}
      alt="Geometric forms with man holding a laptop"
    />
  );
}
