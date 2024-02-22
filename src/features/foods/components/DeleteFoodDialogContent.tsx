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
  setIsParentOpen?: (isOpen: boolean) => void;
  setIsDialogOpen: (isOpen: boolean) => void;
  containerId?: IContainer['id'];
  foodId?: IFood['id'];
}

export const DeleteFoodDialogContent = ({
  setIsParentOpen,
  setIsDialogOpen,
  containerId,
  foodId,
}: IDeleteFoodDialogContentProps) => {
  const handleDelete = async () => {
    if (!containerId || !foodId) return;
    const result = await removeFood(containerId, foodId);
    if (!result.ok) {
      alert('Something went wrong. Please try again.');
    } else {
      alert('Successfully deleted!');
    }
    setIsDialogOpen(false);
    setIsParentOpen && setIsParentOpen(false);
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
          <Button type="button" variant="cancel" size="sm">
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
