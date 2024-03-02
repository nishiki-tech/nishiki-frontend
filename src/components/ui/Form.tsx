import { IconExclamation } from '@/assets/images/icons';
import { Icon, Label } from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import { Root as LabelPrimitiveRoot } from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  useContext,
  useId,
} from 'react';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={className} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = 'FormItem';

const FormLabel = forwardRef<
  ElementRef<typeof LabelPrimitiveRoot>,
  ComponentPropsWithoutRef<typeof LabelPrimitiveRoot> & {
    required?: boolean;
  }
>(({ className, children, required, ...props }, ref) => {
  const { formItemId } = useFormField();

  return (
    <Label ref={ref} className={cn('mb-2', className)} htmlFor={formItemId} {...props}>
      {children}
      {required && <span className="text-danger">*</span>}
    </Label>
  );
});
FormLabel.displayName = 'FormLabel';

const FormControl = forwardRef<ElementRef<typeof Slot>, ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formMessageId } = useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={error && formMessageId}
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = 'FormControl';

const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <div className="mt-1 flex items-start gap-1.5">
        {/* The heights of this <div> must be match the line-height of the following <p>. */}
        <div className="h-5 flex items-center">
          <Icon icon={IconExclamation} size={3.5} color="danger" />
        </div>
        <p
          ref={ref}
          id={formMessageId}
          className={cn('text-danger leading-5', className)}
          {...props}
        >
          {body}
        </p>
      </div>
    );
  },
);
FormMessage.displayName = 'FormMessage';

export { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useFormField };
