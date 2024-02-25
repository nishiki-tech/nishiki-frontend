import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

export const MemberCardDeleteDialog = () => {
  const handleCancel = () => {
    console.log('cancel clicked');
  };

  const handleDelete = () => {
    console.log('delete clicked');
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Member</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <p>Are you sure you want to delete the member?</p>
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
