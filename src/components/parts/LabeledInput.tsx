import { Label } from '@/components/ui';

import { ReactNode } from 'react';

interface ILabeledInputProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export const LabeledInput = ({
  label,
  htmlFor,
  required,
  children,
  className,
}: ILabeledInputProps) => {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} className="mb-2">
        {label}
        {required && <span className="text-danger">*</span>}
      </Label>
      {children}
    </div>
  );
};
