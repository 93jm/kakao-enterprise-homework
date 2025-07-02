import { Skeleton } from '@/shared/ui'

const DetailSkeleton = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <Skeleton width={150} height={32} />
        <Skeleton width={40} height={40} circle />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
          <Skeleton width={120} height={16} />
          <Skeleton width={100} height={16} />
        </div>
        <Skeleton width="80%" height={28} />
      </div>

      <div>
        <Skeleton width={80} height={40} borderRadius="6px" />
      </div>
    </>
  )
}

export default DetailSkeleton 