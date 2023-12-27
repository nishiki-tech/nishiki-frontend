import { ContainerIconWithCircle } from '../../ui';

export const ContainerCount = ({ containerCount }: { containerCount: number }) => {
  return (
    <div className="flex items-center gap-2">
      <ContainerIconWithCircle />
      <p>{containerCount}</p>
    </div>
  );
};
