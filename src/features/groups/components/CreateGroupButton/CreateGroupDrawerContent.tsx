import {
  Button,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import { createGroup } from '@/features/groups/lib/actions';
import { createGroupFormSchema, CreateGroupInputs } from '@/features/groups/lib/schemas';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

interface ICreateGroupDrawerContentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateGroupDrawerContent = ({ isOpen, onClose }: ICreateGroupDrawerContentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof createGroupFormSchema>>({
    resolver: zodResolver(createGroupFormSchema),
    defaultValues: {
      groupName: '',
    },
  });

  /**
   * Process the form submission.
   * @param values - The form values
   */
  const processSubmit: SubmitHandler<CreateGroupInputs> = async (values: CreateGroupInputs) => {
    if (isLoading) return;
    setIsLoading(true);
    const { groupName } = values;
    const result = await createGroup({ groupName });
    if (!result.ok) {
      alert('Something went wrong. Please try again.');
      setIsLoading(false);
    } else {
      alert('Successfully created the group');
      form.reset();
      onClose();
      setIsLoading(false);
      router.refresh();
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
        <DrawerTitle>Create Group</DrawerTitle>
      </DrawerHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processSubmit)}>
          <DrawerBody>
            <FormField
              control={form.control}
              name="groupName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Group name</FormLabel>
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
            <Button type="submit" variant="primary" size="md" disabled={isLoading}>
              Create
            </Button>
          </DrawerFooter>
        </form>
      </Form>
    </DrawerContent>
  );
};
