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
          <Button
            type="button"
            variant="cancel"
            size="sm"
            onClick={() => {
              console.log('cancel');
            }}
          >
            Cancel
          </Button>
        </DialogClose>
        <Button
          variant="error"
          size="sm"
          onClick={() => {
            console.log('delete');
          }}
        >
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
