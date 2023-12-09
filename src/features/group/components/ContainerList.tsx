import { Container } from '../types/definition';

export default function ContainerList({ containers }: { containers: Container[] }) {
  return (
    <div>
      Container
      {/* <MenuMeatBall /> */}
      {/* <MenuPlus /> */}
      {containers.map((container) => (
        <div key={container.id}>{container.name},</div>
      ))}
    </div>
  );
}
