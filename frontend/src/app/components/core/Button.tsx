'use client'

import {Button as BaseButton} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

type ButtonColor = 'primary' | 'secondary';

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: ButtonColor;
}

export default function Button({text, onClick, color = "primary"}: ButtonProps) {
    return <BaseButton onPress={onClick} className={twMerge("rounded-md p-4", color === "primary" ? 
        "bg-yellow-200" : "bg-yellow-50",  "text-yellow-900", "font-semibold")}>
        {text}
      </BaseButton>
}