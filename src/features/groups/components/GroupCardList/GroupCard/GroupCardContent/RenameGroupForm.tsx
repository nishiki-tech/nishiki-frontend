import { CircleCrossIcon } from '@/assets/images/icons';
import { Button, Icon, Input } from '@/components/ui';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form';
import { cn } from '@/lib/tailwind/utils';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC, KeyboardEvent, useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { ContainerCount } from './ContainerCount';
import { UserCount } from './UserCount';

interface IRenameGroupFormProps {
  currentGroupName: string;
  containerCount: number;
  userCount: number;
  isOpen: boolean;
  onClose: () => void;
}

export const RenameGroupForm: FC<IRenameGroupFormProps> = ({
  currentGroupName,
  isOpen,
  onClose,
  containerCount,
  userCount,
}) => {
  // input ref
  const inputRef = useRef<HTMLInputElement>(null);
  // ref to check if the onBlur event of the input should be handled or not
  const shouldHandleInputBlur = useRef(true);

  const formSchema = z.object({
    groupName: z.string().min(1, { message: 'Name is required' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groupName: currentGroupName,
    },
  });

  /**
   * The type of the form inputs based on the schema
   */
  type Inputs = z.infer<typeof formSchema>;

  /**
   * Process the form submission.
   * @param values - The form values
   */
  const processSubmit: SubmitHandler<Inputs> = async (values) => {
    const { groupName } = values;
    // Replace console.log with rename api method in here, after it's implemented
    alert(`Rename to ${groupName}`);
    form.reset();
    onClose();
  };

  /**
   * Handle the key down event.
   * when the escape key is pressed, close the form without the submission.
   * @param event - The keyboard event
   */
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  /**
   * When the input is blurred,
   * process the form submission and close the form.
   */
  const handleInputBlur = () => {
    // if the input is blurred because of the cross button click, don't process the form submission.
    if (!shouldHandleInputBlur.current) return;
    // process the form submission
    processSubmit(form.getValues());
    onClose();
  };

  /**
   * When cross button is mouse downed,
   * set the shouldHandleBlur to false,
   * and empty the input value.
   */
  const handleCrossButtonMouseDown = () => {
    shouldHandleInputBlur.current = false;
    form.setValue('groupName', '');
  };

  /**
   * When cross button click is completed,
   * set the focus back to the input,
   * and set the shouldHandleBlur to true.
   */
  const handleCrossButtonClick = () => {
    inputRef.current?.focus();
    shouldHandleInputBlur.current = true;
  };

  /**
   * Reset the form when the form is closed.
   */
  useEffect(() => {
    if (!isOpen) form.reset();
  }, [isOpen, form]);

  /**
   * Focus the input when the form is opened.
   */
  useEffect(() => {
    if (isOpen) {
      //Needed 350 ms delay to focus the input
      //because the focus will be set to the radix dropdownMenu trigger on closing the dropdownMenu.
      //Radix dropdownMenu trigger focus will happen around 300 ms after the dropdownMenu is closed.
      setTimeout(() => {
        inputRef.current?.focus();
      }, 350);
    }
  }, [isOpen]);

  return (
    <div className="flex grow flex-col gap-3 pl-4 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processSubmit)}>
          <FormField
            control={form.control}
            name="groupName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      type="text"
                      variant="square"
                      className={cn(
                        'text-lg pr-10',
                        form.formState.errors.groupName && 'border-danger',
                      )}
                      {...field}
                      ref={inputRef}
                      onKeyDown={handleKeyDown}
                      onBlur={handleInputBlur}
                    />
                    <Button
                      variant="ghost"
                      className="absolute right-0 w-10 h-full"
                      onMouseDown={handleCrossButtonMouseDown}
                      onClick={handleCrossButtonClick}
                    >
                      <Icon icon={CircleCrossIcon} size={4} color="gray-dark" />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </form>
      </Form>
      <div className="w-full flex justify-between items-center">
        <ContainerCount containerCount={containerCount} />
        <UserCount userCount={userCount} />
      </div>
    </div>
  );
};
