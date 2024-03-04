import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  SquareTextInput,
} from '@/components/ui';
import { renameUserFormSchema, RenameUserInputs } from '@/features/profile/lib/schemas';
import { IUser } from '@/types/definition';

import { zodResolver } from '@hookform/resolvers/zod';
import { KeyboardEvent, useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

interface IRenameUserFormProps {
  /**
   * The id of the user to rename.
   */
  userId: IUser['id'];
  /**
   * The current name of the user to rename.
   */
  currentUserName: IUser['name'];
  /**
   * The state to handle if the form is open or not.
   */
  isOpen: boolean;

  /**
   * The function to close the form.
   */
  onClose: () => void;
}

export const RenameUserForm = ({ currentUserName, isOpen, onClose }: IRenameUserFormProps) => {
  // input ref
  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof renameUserFormSchema>>({
    resolver: zodResolver(renameUserFormSchema),
    defaultValues: {
      userName: currentUserName,
    },
  });

  /**
   * Process the form submission.
   * @param values - The form values
   */
  const processSubmit: SubmitHandler<RenameUserInputs> = async (values: RenameUserInputs) => {
    const { userName } = values;
    if (userName === currentUserName) return;
    alert('Successfully renamed the group');
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
   * Clear the input value.
   */
  const handleClearInput = () => {
    form.setValue('userName', '');
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(processSubmit)}>
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <SquareTextInput
                  {...field}
                  ref={inputRef}
                  onKeyDown={handleKeyDown}
                  handleClearInput={handleClearInput}
                  handleOutsideClick={handleOutsideClick}
                  className={form.formState.errors.userName && 'border-danger'}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  );
};
