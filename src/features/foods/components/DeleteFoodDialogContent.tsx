import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import { removeFood } from '@/features/foods/lib/actions';
import { IContainer, IFood } from '@/types/definition';

import { useRouter } from 'next/navigation';

interface IDeleteFoodDialogContentProps {
  /**
   * If true, close the parent UI component, such as Dialog, DropdownMenu, Drawer, etc., on cancel button click.
   */
  closeParentOnCancel?: boolean;
  /**
   * The function to close the parent UI component.
   */
  onParentClose?: () => void;
  /**
   * The function to close this delete dialog.
   */
  onDialogClose: () => void;
  /**
   * The ID of the container that the food belongs to.
   */
  containerId?: IContainer['id'];
  /**
   * The ID of the food this dialog is for.
   */
  foodId?: IFood['id'];
}

export const DeleteFoodDialogContent = ({
  closeParentOnCancel = true,
  onParentClose,
  onDialogClose,
  containerId,
  foodId,
}: IDeleteFoodDialogContentProps) => {
  const router = useRouter();
  /**
   * Handle the cancel button click.
   * If the closeParentOnCancel is true, close the parent together with this dialog.
   * If the closeParentOnCancel is false, close only this dialog.
   * @returns void
   */
  const handleCancel = () => {
    closeParentOnCancel && onParentClose?.();
  };

  /**
   * Handle the delete button click.
   * If the DELETE request is successful, show a success message and close the dialog and drawer.
   * If the DELETE request is failed, show an error message and close the dialog.
   * @returns void
   */
  const handleDelete = async () => {
    if (!containerId || !foodId) return;
    const result = await removeFood(containerId, foodId);
    if (!result.ok) {
      alert('Something went wrong. Please try again.');
    } else {
      alert('Successfully deleted');
      onDialogClose();
      onParentClose?.();
      router.refresh();
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Food</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <p>Are you sure you want to delete this food?</p>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="cancel" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
        </DialogClose>
        <Button variant="danger" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
