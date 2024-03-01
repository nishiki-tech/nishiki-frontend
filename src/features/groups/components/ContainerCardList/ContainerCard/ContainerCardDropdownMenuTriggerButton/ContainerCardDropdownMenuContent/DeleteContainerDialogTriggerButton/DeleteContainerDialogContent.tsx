import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

interface IDeleteContainerDialogContentProps {
  onDropdownMenuClose: () => void;
}

export const DeleteContainerDialogContent = ({
  onDropdownMenuClose,
}: IDeleteContainerDialogContentProps) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Container</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <p>Are you sure you want to delete the container?</p>
      </DialogBody>
      <DialogFooter>
        <DialogClose onClick={onDropdownMenuClose}>
          <Button type="button" variant="cancel" size="sm">
            Cancel
          </Button>
        </DialogClose>
        <Button variant="error" size="sm">
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
