import {
  Button,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui';
import { Form } from '@/components/ui/Form';
import { renameGroupFormSchema } from '@/features/groups/lib/schemas';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const RenameGroupDrawerContent = () => {
  const form = useForm<z.infer<typeof renameGroupFormSchema>>({
    resolver: zodResolver(renameGroupFormSchema),
    defaultValues: {
      groupName: '',
    },
  });

  return (
    <DrawerContent side="bottom">
      <DrawerHeader>
        <DrawerTitle>Rename Group</DrawerTitle>
      </DrawerHeader>
      <Form {...form}>
        <form>
          <DrawerBody>
            {/* <FormField 
            control={form.control}
            groupName="name"
            render={({ field}) =>(
              <FormItem>
                <FormLabel required> Group Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            /> */}
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
