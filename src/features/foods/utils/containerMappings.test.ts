import {
  createContainerIdGroupIdMap,
  createContainerIdNameMap,
  createGroupIdNameMap,
  groupContainersByGroupId,
} from '@/features/foods/utils/containerMapping';
import { IContainer } from '@/types/definition';

// Mock IContainer array object
const mockContainers: IContainer[] = [
  { id: 'c1', name: 'Shared-house Fridge', group: { id: 'g1', name: 'Shared-house' }, foods: [] },
  { id: 'c2', name: 'Family Fridge', group: { id: 'g2', name: 'Toms family' }, foods: [] },
  { id: 'c3', name: 'Camping Fridge', group: { id: 'g2', name: 'Toms family' }, foods: [] },
];

describe('Container and Group Utility Functions', () => {
  describe('groupContainersByGroupId', () => {
    it('should group container ids by group id', () => {
      const result = groupContainersByGroupId(mockContainers);
      expect(result).toEqual({
        g1: ['c1'],
        g2: ['c2', 'c3'],
      });
    });
  });

  describe('createContainerIdNameMap', () => {
    it('should create a map of container id to container name', () => {
      const result = createContainerIdNameMap(mockContainers);
      expect(result).toEqual({
        c1: 'Shared-house Fridge',
        c2: 'Family Fridge',
        c3: 'Camping Fridge',
      });
    });
  });

  describe('createGroupIdNameMap', () => {
    it('should create a map of group id to group name', () => {
      const result = createGroupIdNameMap(mockContainers);
      expect(result).toEqual({
        g1: 'Shared-house',
        g2: 'Toms family',
      });
    });
  });

  describe('createContainerIdGroupIdMap', () => {
    it('should map container id to group id', () => {
      const result = createContainerIdGroupIdMap(mockContainers);
      expect(result).toEqual({
        c1: 'g1',
        c2: 'g2',
        c3: 'g2',
      });
    });
  });
});
