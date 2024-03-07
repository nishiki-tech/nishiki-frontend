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
import { renameGroupFormSchema, RenameGroupInputs } from '@/features/groups/lib/schemas';
import { IGroup } from '@/types/definition';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const RenameGroupDrawerContent = ({
  currentGroupName,
}: {
  currentGroupName: IGroup['name'];
}) => {
  const form = useForm<z.infer<typeof renameGroupFormSchema>>({
    resolver: zodResolver(renameGroupFormSchema),
    defaultValues: {
      groupName: currentGroupName,
    },
  });
  const processSubmit: SubmitHandler<RenameGroupInputs> = (values) => {
    console.log({ values });
    alert('Submitted!');
    form.reset();
  };

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
