import Image from 'next/image';

import { logo } from '@/app/data/site';

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({ className = '', priority = false, sizes = '64px' }: BrandLogoProps) {
  return (
    <Image
      className={className}
      src={logo.src}
      alt={logo.alt}
      width={800}
      height={600}
      priority={priority}
      sizes={sizes}
    />
  );
}