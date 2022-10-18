import { Img } from "./Hero.styles";

export function Hero(props: React.HTMLAttributes<HTMLImageElement>) {
  return (
    <Img
      {...props}
      src={`${process.env.PUBLIC_URL}/images/image-hero-mobile.png`}
      srcSet={`${process.env.PUBLIC_URL}/images/image-hero-desktop.png 960w, 
      ${process.env.PUBLIC_URL}/images/image-hero-mobile.png 750w`}
      sizes="100vw"
      alt="Geometric forms with man holding a laptop"
    />
  );
}
