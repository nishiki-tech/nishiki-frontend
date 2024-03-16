import {
  Button,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import { removeMember } from '@/features/groups/lib/actions';
import { IGroup, IUser } from '@/types/definition';

import { useRouter } from 'next/navigation';

interface IMemberCardDeleteDialogProps {
  /**
   * The function to close the parent UI component which is dropdown menu
   */
  onParentClose: () => void;
  /**
   * The function to close the dialog
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
  const router = useRouter();
  /**
   * Handle the delete button click.
   * Being successful DELETE request, the success message is shown, and close dialog and dropdown menu.
   * if fail, an error message is shown, and close dialog and dropdown menu
   * @returns void
   */
  const handleDelete = async () => {
    if (!groupId || !userId) return;
    const result = await removeMember(groupId, userId);
    if (!result.ok) {
      alert('Something went wrong, please try again');
      onDialogClose();
      onParentClose();
    } else {
      alert('Successfully deleted!');
      onDialogClose();
      onParentClose();
      router.refresh();
    }
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
          <Button type="button" variant="cancel" size="sm" onClick={onParentClose}>
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
