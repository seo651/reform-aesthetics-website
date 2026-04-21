interface SectionBadgeProps {
  text: string;
  variant?: 'light' | 'dark';
}

export function SectionBadge({ text, variant = 'light' }: SectionBadgeProps) {
  const baseClasses = 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-sans font-medium tracking-[0.12em] uppercase border';
  const variantClasses =
    variant === 'dark'
      ? 'bg-black/30 text-white border-white/20'
      : 'bg-white text-gray-800 border-gray-800';

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: '#c5b1a1' }}
      />
      {text}
    </span>
  );
}
