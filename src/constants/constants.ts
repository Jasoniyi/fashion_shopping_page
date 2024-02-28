import { productImages } from "./imagePaths";

interface BannerPdctsShape {
  src: string;
  alt?: any;
}

interface PaymentOptionsShape {
  src: string;
  alt: string;
  title: string;
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

export const paymentOptions: PaymentOptionsShape[] = [
  {
    src: `${productImages.dollar}`,
    alt: "dollar",
    title: "Cash on Delivery",
  },
  {
    src: `${productImages.venmo}`,
    alt: "venmo",
    title: "Venmo",
  },
  {
    src: `${productImages.paypal}`,
    alt: "paypal",
    title: "Paypal",
  },
  {
    src: `${productImages.amazon}`,
    alt: "amazon",
    title: "Amazon Pay",
  },
  {
    src: `${productImages.card}`,
    alt: "creditCard",
    title: "Debit/Credit Card",
  },
];
