import {
  Card,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  SquareTextInput,
} from '@/components/ui';
import { renameGroup } from '@/features/groups/lib/actions';
import { renameGroupFormSchema, RenameGroupInputs } from '@/features/groups/lib/schemas';
import { cn } from '@/lib/tailwind/utils';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { FC, KeyboardEvent, useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { ContainerCount } from './ContainerCount';
import { UserCount } from './UserCount';

interface IRenameGroupFormProps {
  groupId: string;
  currentGroupName: string;
  containerCount: number;
  userCount: number;
  isOpen: boolean;
  onClose: () => void;
}

export const RenameGroupForm: FC<IRenameGroupFormProps> = ({
  groupId,
  currentGroupName,
  isOpen,
  containerCount,
  userCount,
  onClose,
}) => {
  // input ref
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const form = useForm<z.infer<typeof renameGroupFormSchema>>({
    resolver: zodResolver(renameGroupFormSchema),
    defaultValues: {
      groupName: currentGroupName,
    },
  });

  /**
   * Process the form submission.
   * @param values - The form values
   */
  const processSubmit: SubmitHandler<RenameGroupInputs> = async (values: RenameGroupInputs) => {
    const { groupName } = values;
    if (groupName === currentGroupName) return;

    const result = await renameGroup(groupId, values);
    if (!result.ok) {
      alert('Something went wrong. Please try again.');
    } else {
      alert('Successfully renamed the group');
      onClose();
      router.refresh();
    }
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
   * Clear the input value.
   */
  const handleClearInput = () => {
    form.setValue('groupName', '');
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
                      handleClearInput={handleClearInput}
                      handleOutsideClick={handleOutsideClick}
                      className={cn(form.formState.errors.groupName && 'border-danger', 'text-lg')}
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
