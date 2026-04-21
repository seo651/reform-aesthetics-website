interface SectionBadgeProps {
  text: string;
  variant?: 'light' | 'dark';
}

export function SectionBadge({ text, variant = 'light' }: SectionBadgeProps) {
  const baseClasses = 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-sans font-medium tracking-[0.12em] uppercase border';
  const variantClasses =
    variant === 'dark'
      ? 'bg-black/30 text-white border-white/20'
      : 'bg-transparent text-gray-700 border-gray-300';

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {/* Gold dot per brand — #c4a882 */}
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: variant === 'dark' ? '#c4a882' : '#c4a882' }}
      />
      {text}
    </span>
  );
}
