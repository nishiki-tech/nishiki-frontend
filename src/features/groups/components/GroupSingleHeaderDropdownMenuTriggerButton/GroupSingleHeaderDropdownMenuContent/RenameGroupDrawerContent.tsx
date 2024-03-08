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
// import { KeyboardEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const RenameGroupDrawerContent = ({
  groupId,
  currentGroupName,
  onClose,
  isDrawerOpen,
  onParentClose,
}: {
  groupId: IGroup['id'];
  currentGroupName: IGroup['name'];
  onClose: () => void;
  isDrawerOpen: boolean;
  onParentClose: () => void;
}) => {
  const form = useForm<z.infer<typeof renameGroupFormSchema>>({
    resolver: zodResolver(renameGroupFormSchema),
    defaultValues: {
      groupName: currentGroupName,
    },
  });

  const processSubmit: SubmitHandler<RenameGroupInputs> = async (values: RenameGroupInputs) => {
    const { groupName } = values;
    if (groupName === currentGroupName) return;

    const result = await renameGroup(groupId, values);

    if (!result.ok) {
      alert('Something went wrong. Please try again.');
    } else {
      alert('Successfully renamed the group');
      form.reset();
    }
    onParentClose();
    onClose();
  };

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
              <Button variant="cancel" size="md">
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
