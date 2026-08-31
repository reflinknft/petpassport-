/** 通用 Skeleton 元件 */
export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-brand-lilac/60 rounded-xl ${className}`} />;
}

/** 卡片 Skeleton */
export function CardSkeleton() {
  return (
    <div className="paper-card p-4 space-y-3">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
      <Skeleton className="h-3 w-full" />
    </div>
  );
}

/** 列表 Skeleton */
export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

/** 首頁 Skeleton */
export function HomeSkeleton() {
  return (
    <div className="px-5 pt-5 space-y-6">
      <div className="paper-card p-5">
        <div className="flex items-center gap-4">
          <Skeleton className="w-16 h-16 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Skeleton className="h-24 rounded-2xl" />
        <Skeleton className="h-24 rounded-2xl" />
      </div>
      <Skeleton className="h-5 w-1/3" />
      <ListSkeleton count={3} />
    </div>
  );
}
