import { Input } from '@/components/ui';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC, useEffect, useRef } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const formSchema = z.object({
    groupName: z.string().min(1, { message: 'Name has to have at least 1 character' }),
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
    /**Replace console.log with rename api method in here, after it's implemented */
    console.log({ groupName });
    form.reset();
    onClose();
  };

  /**
   * Reset the form when the drawer is closed.
   */
  useEffect(() => {
    if (!isOpen) form.reset();
  }, [isOpen, form]);

  /**
   * Focus the input when the form is opened.
   */
  useEffect(() => {
    if (isOpen) {
      /**
       * Needed 350 ms delay to focus the input,
       * because the focus will be set to the radix dropdownMenu trigger on closing the dropdownMenu.
       * Radix dropdownMenu trigger focus will happen at around 300 ms after the dropdownMenu is closed.
       */
      setTimeout(() => {
        console.log('focus');
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
                  <Input
                    variant="square"
                    {...field}
                    h={'sm'}
                    className="text-lg"
                    ref={inputRef}
                    onBlur={onClose}
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
  );
};
