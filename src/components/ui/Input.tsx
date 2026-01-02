'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    icon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, icon, type = 'text', ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        {label}
                    </label>
                )}
                <div className="relative">
                    {icon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            {icon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        type={type}
                        className={cn(
                            'w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3.5 text-slate-900 transition-all duration-200',
                            'placeholder:text-slate-400',
                            'focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10',
                            'hover:border-slate-300',
                            'disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed',
                            icon ? 'pl-11' : '',
                            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : '',
                            className
                        )}
                        {...props}
                    />
                </div>
                {error && (
                    <p className="mt-1 text-sm text-red-500">{error}</p>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'

export { Input }
