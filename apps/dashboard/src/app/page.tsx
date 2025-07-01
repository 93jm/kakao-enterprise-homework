'use client'

import { useViewTypeStore } from '@/shared/store/viewType'
import * as styles from './page.css'
import Image from 'next/image'
import { Skeleton } from '@/shared/ui/Skeleton';

interface HomeImage {
  id: number;
  src: string;
  alt: string;
}

const HOME_IMAGES: HomeImage[] = [
  { id: 1, src: '/images/img_homework_1.png', alt: '과제 이미지 1' },
  { id: 2, src: '/images/img_homework_2.png', alt: '과제 이미지 2' },
  { id: 3, src: '/images/img_homework_3.png', alt: '과제 이미지 3' },
  { id: 4, src: '/images/img_homework_4.png', alt: '과제 이미지 4' },
];

const Home = () => {
  const { home, hasHydrated } = useViewTypeStore()

  const displayImages = home === 'card' 
    ? [...HOME_IMAGES].reverse() 
    : HOME_IMAGES

  return (
    <div className={styles.homeContainer}>
      <div className={styles.imageGrid}>
        {!hasHydrated ? (
          Array.from({ length: HOME_IMAGES.length }, (_, index) => (
            <div key={`skeleton-${index}`} className={styles.imageWrapper}>
              <Skeleton height="100%" />
            </div>
          ))
        ) : (
          displayImages.map((image) => (
            <div key={image.id} className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(100vw - 48px) / 2"
              />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Home