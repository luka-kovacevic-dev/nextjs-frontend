import { cn } from '@/lib/utils';

interface SolidDashedLineProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const SolidDashedLine = ({
  orientation = 'horizontal',
  className,
}: SolidDashedLineProps) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      className={cn(
        'text-muted-foreground relative',
        isHorizontal ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                'h-px w-full',
                'bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]',
                // Removed the mask-image property to eliminate the fade effect
              ]
            : [
                'h-full w-px',
                'bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]',
                // Removed the mask-image property to eliminate the fade effect
              ],
        )}
      />
    </div>
  );
};
