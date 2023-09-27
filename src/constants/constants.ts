import { productImages } from "./imagePaths";

interface BannerPdctsShape {
  src: string;
  alt?: any;
}

export const bannerPdctsArray: BannerPdctsShape[] = [
  {
    src: `${productImages.nikeOne}`,
    alt: "Nike One",
  },
  {
    src: `${productImages.nikeTwo}`,
    alt: "Nike Two",
  },
  {
    src: `${productImages.nikeThree}`,
    alt: "Nike Three",
  },
  {
    src: `${productImages.nikeFour}`,
    alt: "Nike Four",
  },
];
