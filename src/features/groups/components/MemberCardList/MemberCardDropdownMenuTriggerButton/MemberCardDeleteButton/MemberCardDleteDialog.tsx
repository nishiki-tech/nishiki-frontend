import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import { IGroup, IUser } from '@/types/definition';

interface IMemberCardDeleteDialogProps {
  /**
   * The funtion to close the parent UI component which is dropdown menu
   */
  onParentClose: () => void;
  /**
   * The function to close the dalog
   */
  onDialogClose: () => void;
  /**
   * An identifier of a user for which this dropdown menu is.
   */
  userId: IUser['id'];
  /**
   * An identifier of a group which a user belongs to.
   */
  groupId: IGroup['id'];
}
export const MemberCardDeleteDialog = ({
  onParentClose,
  onDialogClose,
  userId,
  groupId,
}: IMemberCardDeleteDialogProps) => {
  /**
   * the Handling function when cancel clicked
   * when clicked, not only the dialog but also dropdown Menu closed
   */
  const handleCancel = () => {
    console.log('cancel clicked');
    onParentClose();
  };

  const handleDelete = () => {
    console.log('delete clicked', userId, groupId);
    onDialogClose();
    onParentClose();
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
