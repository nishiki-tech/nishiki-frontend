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

interface IDeleteFoodDialogContentProps {
  /**
   * If true, close the parent UI component, such as Dialog, DropdownMenu, Drawer, etc., on cancel button click.
   */
  closeParentOnCancel?: boolean;
  /**
   * The function to set the parent UI component's open state.
   */
  setIsParentOpen?: (isOpen: boolean) => void;
  /**
   * The function to set this dialog's open state.
   */
  setIsDialogOpen: (isOpen: boolean) => void;
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
  setIsParentOpen,
  setIsDialogOpen,
  containerId,
  foodId,
}: IDeleteFoodDialogContentProps) => {
  /**
   * Handle the cancel button click.
   * If the parentClose is true, close the parent dialog together with this dialog.
   * If the parentClose is false, close only this dialog.
   * @returns void
   */
  const handleCancel = () => {
    closeParentOnCancel && setIsParentOpen?.(false);
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
      alert('Successfully deleted!');
      setIsParentOpen?.(false);
    }
    setIsDialogOpen(false);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Container</DialogTitle>
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
        <Button variant="error" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
