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
import { renameGroup } from '@/features/groups/lib/actions';
import { renameGroupFormSchema, RenameGroupInputs } from '@/features/groups/lib/schemas';
import { IGroup } from '@/types/definition';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

interface IRenameGroupDrawerContent {
  /**
   * An identifier of a group a user is willing to rename
   */
  groupId: IGroup['id'];
  /**
   * The current group name which a user is willing to change
   */
  currentGroupName: IGroup['name'];
  /**
   * The function to close the dialog
   */
  onClose: () => void;
  /**
   * The state of a drawer if true, opened, and close if false
   */
  isDrawerOpen: boolean;
  /**
   * The function to close the parent component
   */
  onParentClose?: () => void;
}

export const RenameGroupDrawerContent = ({
  groupId,
  currentGroupName,
  onClose,
  isDrawerOpen,
  onParentClose,
}: IRenameGroupDrawerContent) => {
  const form = useForm<z.infer<typeof renameGroupFormSchema>>({
    resolver: zodResolver(renameGroupFormSchema),
    defaultValues: {
      groupName: currentGroupName,
    },
  });

  /**
   * Process the form submission
   * @param values The form values
   */
  const processSubmit: SubmitHandler<RenameGroupInputs> = async (values: RenameGroupInputs) => {
    const { groupName } = values;
    if (groupName === currentGroupName) return;

    const result = await renameGroup(groupId, values);

    if (!result.ok) {
      alert('Something went wrong. Please try again.');
    } else {
      alert('Successfully renamed the group');
      form.reset();
      onParentClose?.();
      onClose();
    }
  };

  /**
   * Reset the form when the drawer is closed
   */
  useEffect(() => {
    !isDrawerOpen && form.reset();
  }, [isDrawerOpen, form]);

  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Rename Group</DrawerTitle>
      </DrawerHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(processSubmit)}>
          <DrawerBody>
            <FormField
              control={form.control}
              name="groupName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Group Name</FormLabel>
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
              <Button type="button" variant="cancel" size="md">
                Cancel
              </Button>
            </DrawerClose>
            <Button type="submit" variant="primary" size="md">
              Rename
            </Button>
          </DrawerFooter>
        </form>
      </Form>
    </DrawerContent>
  );
};
