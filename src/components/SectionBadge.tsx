interface SectionBadgeProps {
  text: string;
  variant?: 'light' | 'dark';
}

export function SectionBadge({ text, variant = 'light' }: SectionBadgeProps) {
  const baseClasses = 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase border';
  const variantClasses = variant === 'dark'
    ? 'bg-black text-white border-black'
    : 'bg-transparent text-gray-700 border-gray-300';

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {text}
    </span>
  );
}
