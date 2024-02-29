import { IconContainer } from '@/assets/images/icons';
import { Card, Icon, SquareTextInput } from '@/components/ui';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form';
import { renameContainer } from '@/features/groups/lib/actions';
import { renameContainerFormSchema, RenameContainerInputs } from '@/features/groups/lib/schemas';
import { IContainer } from '@/types/definition';

import { zodResolver } from '@hookform/resolvers/zod';
import { KeyboardEvent, useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

interface IRenameContainerFormProps {
  /**
   * The current container ID whose name the user is willing to change
   */
  containerId: IContainer['id'];
  /**
   * The current container name, which a user willing to change from
   */
  currentContainerName: IContainer['name'];
  /**
   * The state, if true, the rename form is open
   */
  isOpen: boolean;
  /**
   * The function to change the state of form to false (=close the input field)
   */
  onClose: () => void;
}

export const RenameContainerForm = ({
  containerId,
  currentContainerName,
  isOpen,
  onClose,
}: IRenameContainerFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const form = useForm<z.infer<typeof renameContainerFormSchema>>({
    resolver: zodResolver(renameContainerFormSchema),
    defaultValues: {
      containerName: currentContainerName,
    },
  });

  /**
   * Process when the form is submitted
   * @param values - The form values {@link RenameContainerInputs}
   */
  const processSubmit: SubmitHandler<RenameContainerInputs> = async (
    values: RenameContainerInputs,
  ) => {
    const { containerName } = values;
    if (containerName === currentContainerName) return;

    const result = await renameContainer(containerId, values);
    if (!result.ok) {
      alert('Failed to rename the container');
    } else {
      alert('Successfully renamed the container');
      form.reset();
      onClose();
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
    form.setValue('containerName', '');
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

  /**
   * React hook which reset the form when it is closed
   */
  useEffect(() => {
    if (!isOpen) form.reset();
  }, [isOpen, form]);

  /**
   * React hook which focus the input when the form is opened
   */
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <Card asChild>
      <div className="flex gap-2 items-center px-4 py-2">
        <div className="flex items-center justify-center bg-accent rounded-full min-w-11 h-11">
          <Icon icon={IconContainer} color="black" size={6} />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(processSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="containerName"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <SquareTextInput
                      {...field}
                      ref={inputRef}
                      onKeyDown={handleKeyDown}
                      handleClearInput={handleClearInput}
                      handleOutsideClick={handleOutsideClick}
                      className={form.formState.errors.containerName && 'border-danger'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </form>
        </Form>
      </div>
    </Card>
  );
};
