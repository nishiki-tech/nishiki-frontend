import { Card, SquareTextInput } from '@/components/ui';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form';

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
    // Replace alert with rename api method in here, after it's implemented
    if (groupName !== currentGroupName) alert(`Rename to ${groupName}`);
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
   * When cross button click is completed,
   * set the focus back to the input,
   */
  const handleCrossButtonClick = () => {
    form.setValue('groupName', '');
    inputRef.current?.focus();
  };

  /**
   * Handle the outside click event.
   * process the form submission and close the form.
   */
  const handleOutsideClick = () => {
    // process the form submission
    processSubmit(form.getValues());
    onClose();
  };

  // Reset the form when the form is closed.
  useEffect(() => {
    if (!isOpen) form.reset();
  }, [isOpen, form]);

  // Focus the input when the form is opened.
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <Card asChild>
      <div className="flex flex-col gap-3 px-4 py-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(processSubmit)}>
            <FormField
              control={form.control}
              name="groupName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SquareTextInput
                      {...field}
                      ref={inputRef}
                      onKeyDown={handleKeyDown}
                      handleCrossButtonClick={handleCrossButtonClick}
                      handleOutsideClick={handleOutsideClick}
                      className={form.formState.errors.groupName && 'border-danger'}
                    />
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
    </Card>
  );
};
