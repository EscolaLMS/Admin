import React from 'react';
import { Image } from 'antd';
import type { ImageProps } from 'antd';
declare const REACT_APP_API_URL: string;

interface ResponsiveImageProps extends ImageProps {
  path: string;
  size?: number;
  srcSizes?: number[];
  alt?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  path,
  size,
  srcSizes,
  alt = 'LMS Image',
  ...props
}) => {
  const src = `${REACT_APP_API_URL}/api/images/img?path=${path}&w=${srcSizes ? srcSizes[0] : size}`;
  const srcSet =
    srcSizes &&
    srcSizes.map(
      (srcSize) => `${REACT_APP_API_URL}/api/images/img?path=${path}&w=${srcSize} ${srcSize}w`,
    );

  return (
    <div className="escolalms-image">
      <Image src={src} srcSet={srcSet && srcSet.join(',')} alt={alt} {...props} />
    </div>
  );
};

export default ResponsiveImage;
