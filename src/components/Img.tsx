import NextImage, { type ImageProps } from 'next/image';

type ImgFillProps = Omit<ImageProps, 'alt' | 'width' | 'height'> & {
  alt: string;
  fill: true;
  width?: never;
  height?: never;
};

type ImgSizedProps = Omit<ImageProps, 'alt' | 'fill'> & {
  alt: string;
  width: number;
  height: number;
  fill?: false;
};

type ImgProps = ImgFillProps | ImgSizedProps;

export function Img({ alt, quality = 90, ...props }: ImgProps) {
  return <NextImage alt={alt} quality={quality} {...props} />;
}
