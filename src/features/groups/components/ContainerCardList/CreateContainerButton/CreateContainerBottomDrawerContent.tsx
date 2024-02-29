import {
  Button,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Input,
} from '@/components/ui';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { createContainer } from '@/features/groups/lib/actions';
import { createContainerFormSchema, CreateContainerInputs } from '@/features/groups/lib/schemas';
import { IGroup } from '@/types/definition';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

interface ICreateContainerDrawerContentProps {
  /**
   * Boolean, if true, the state of drawer is open
   */
  isOpen: boolean;
  /**
   * Function to change the state of the drawer to close
   */
  onClose: () => void;
  /**
   * An identifier of a group which a new container will belong to
   */
  groupId: IGroup['id'];
}

export const CreateContainerDrawerContent = ({
  isOpen,
  onClose,
  groupId,
}: ICreateContainerDrawerContentProps) => {
  const form = useForm<z.infer<typeof createContainerFormSchema>>({
    resolver: zodResolver(createContainerFormSchema),
    defaultValues: {
      name: '',
    },
  });

  /**
   * Process the form submission.
   * @param values - The form values
   */
  const processSubmit: SubmitHandler<CreateContainerInputs> = async (
    values: CreateContainerInputs,
  ) => {
    const result = await createContainer(values, groupId);
    if (!result.ok) {
      alert('Something went wrong. Please try again');
    } else {
      alert('Successfully created');
      onClose();
    }
  };

  /**
   * Reset the form when the drawer is closed.
   */
  useEffect(() => {
    if (!isOpen) form.reset();
  }, [isOpen, form]);

  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Create Container</DrawerTitle>
      </DrawerHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processSubmit)}>
          <DrawerBody>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Container name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="cancel" size="md">
                Cancel
              </Button>
            </DrawerClose>
            <Button type="submit" variant="primary" size="md">
              Create
            </Button>
          </DrawerFooter>
        </form>
      </Form>
    </DrawerContent>
  );
};
