export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        {/* Gradient blobs */}
        <div className="animate-blob absolute left-1/3 -top-32 h-72 w-72 rounded-full bg-purple-200 opacity-70 mix-blend-multiply blur-xl dark:bg-purple-900/30 dark:mix-blend-overlay" />
        <div className="animate-blob animation-delay-2000 absolute -right-4 top-48 h-72 w-72 rounded-full bg-yellow-200 opacity-70 mix-blend-multiply blur-xl dark:bg-yellow-900/30 dark:mix-blend-overlay" />
        <div className="animate-blob animation-delay-4000 absolute bottom-24 left-48 h-72 w-72 rounded-full bg-pink-200 opacity-70 mix-blend-multiply blur-xl dark:bg-pink-900/30 dark:mix-blend-overlay" />
      </div>
    </div>
  )
}

