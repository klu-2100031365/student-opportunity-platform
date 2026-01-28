'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit';
    disabled?: boolean;
    className?: string;
}

export default function Button({
    children,
    onClick,
    variant = 'primary',
    type = 'button',
    disabled = false,
    className = '',
}: ButtonProps) {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;

        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples([...ripples, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
        }, 600);

        onClick?.();
    };

    const baseStyles = 'relative overflow-hidden px-8 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
        primary: 'bg-primary-blue text-white hover:bg-primary-cyan hover:shadow-lg hover:shadow-primary-blue/50',
        secondary: 'bg-white text-primary-blue border-2 border-primary-blue hover:bg-primary-blue hover:text-white',
    };

    return (
        <motion.button
            type={type}
            onClick={handleClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
        >
            {/* Ripple Effect */}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute bg-white/30 rounded-full pointer-events-none animate-ping"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 20,
                        height: 20,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}
            {children}
        </motion.button>
    );
}
