import BaseSkeleton, { SkeletonTheme } from 'react-loading-skeleton'

interface Props {
  width?: string | number
  height?: string | number
  count?: number
  circle?: boolean
  className?: string
  borderRadius?: string | number
  enableAnimation?: boolean
}

const Skeleton = ({ 
  width, 
  height, 
  count = 1, 
  circle = false, 
  className,
  borderRadius = '8px',
  enableAnimation = true
}: Props) => {
  return (
    <SkeletonTheme
      baseColor="#f1f5f9"
      highlightColor="#ffffff"
      enableAnimation={enableAnimation}
    >
      <BaseSkeleton
        width={width}
        height={height}
        count={count}
        circle={circle}
        className={className}
        borderRadius={borderRadius}
      />
    </SkeletonTheme>
  )
}

export default Skeleton