import { cn } from '@/lib/utils'

interface CardProps {
    className?: string
    children: React.ReactNode
}

export function Card({ className, children }: CardProps) {
    return (
        <div
            className={cn(
                'bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-100 overflow-hidden',
                className
            )}
        >
            {children}
        </div>
    )
}

interface CardHeaderProps {
    className?: string
    children: React.ReactNode
}

export function CardHeader({ className, children }: CardHeaderProps) {
    return (
        <div className={cn('px-6 py-5 border-b border-slate-100', className)}>
            {children}
        </div>
    )
}

interface CardContentProps {
    className?: string
    children: React.ReactNode
}

export function CardContent({ className, children }: CardContentProps) {
    return (
        <div className={cn('p-6', className)}>
            {children}
        </div>
    )
}

interface CardFooterProps {
    className?: string
    children: React.ReactNode
}

export function CardFooter({ className, children }: CardFooterProps) {
    return (
        <div className={cn('px-6 py-4 bg-slate-50 border-t border-slate-100', className)}>
            {children}
        </div>
    )
}
