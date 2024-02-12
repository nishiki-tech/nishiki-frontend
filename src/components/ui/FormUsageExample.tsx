'use client';

import {
  Button,
  DatePicker,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  Input,
  NumberInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { CategorySelect } from '@/features/foods/components/Form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export const FromUsageExample = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    group: z.string().min(1, { message: 'Group is required' }),
    container: z.string().min(1, { message: 'Container is required' }),
    quantity: z.string().optional(),
    unit: z.string().optional(),
    expiry: z.coerce.date().optional(),
    category: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      group: '',
      container: '',
      quantity: undefined,
      unit: undefined,
      expiry: undefined,
      category: 'unselected',
    },
  });

  /**
   * Reset the form when the drawer is closed.
   */
  useEffect(() => {
    if (!isDrawerOpen) {
      form.reset();
    }
  }, [isDrawerOpen, form]);

  /**
   * The type of the form inputs based on the schema
   */
  type Inputs = z.infer<typeof formSchema>;

  /**
   * Process the form submission.
   * @param values - The form values
   */
  const processSubmit: SubmitHandler<Inputs> = (values) => {
    console.log({ values });
    alert('Submitted!');
    form.reset();
    setIsDrawerOpen(false);
  };

  /**
   * Process when a group is selected.
   * @param group - selected group
   */
  const handleGroupChange = (group: string) => {
    form.setValue('group', group);
    form.setValue('container', '');
  };

  return (
    <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button variant="primary" size="md">
          Open
        </Button>
      </DrawerTrigger>
      <DrawerContent side="bottom">
        <DrawerHeader>
          <DrawerTitle>Form</DrawerTitle>
        </DrawerHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(processSubmit)}>
            <DrawerBody className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="group"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Group</FormLabel>
                    <Select onValueChange={handleGroupChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger variant="rounded">
                          <SelectValue placeholder="Select a group" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ece51b8e-4815-4109-85a8-00dcd3facdb3">
                          Group 1
                        </SelectItem>
                        <SelectItem value="862c0786-2bff-48d2-aeae-f9066141debb">
                          Group 2
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="container"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Container</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger variant="rounded">
                          <SelectValue placeholder="Select a container" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="7c1f0aee-09a9-498a-b8ac-5f64f334008e">
                          Container 1
                        </SelectItem>
                        <SelectItem value="b907ad0e-1691-4027-ab37-e6b87eedd63a">
                          Container 2
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <NumberInput {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="unit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unit</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="expiry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry</FormLabel>
                    <FormControl>
                      <DatePicker id="expiry" date={field.value} onSelect={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <CategorySelect
                        id="category"
                        selectedCategory={field.value}
                        setSelectedCategory={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </DrawerBody>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="cancel" size="sm">
                  Cancel
                </Button>
              </DrawerClose>
              <Button type="submit" variant="primary" size="sm">
                Submit
              </Button>
            </DrawerFooter>
          </form>
        </Form>
      </DrawerContent>
    </DrawerRoot>
  );
};
