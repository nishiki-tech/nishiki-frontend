/**
 * This file is used as an example for the Badge, FilterBadge and CategoryBadge components.
 * Once you're done with the example, you can delete this file.
 */
import { ContainerIcon, HomeIcon_Off } from '@/assets/images/icons';
import { Badge } from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';
import { CategoryBadge, FilterBadge } from '@/features/foods/components';

export const BadgeUsageExample = () => {
  return (
    <div className="p-4 pr-0 bg-white">
      <div className="flex flex-wrap gap-1 mb-1">
        <Badge variant="light">Light</Badge>
        <Badge variant="lightest">Lightest</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex gap-1 mb-1 overflow-x-auto">
        <FilterBadge icon={HomeIcon_Off} text="Group" />
        <FilterBadge icon={ContainerIcon} text="Container" />
        <FilterBadge emoji={foodCategories.vegetables.emoji} text="Vegetables" />
      </div>
      <div className="flex flex-wrap gap-1 mb-1">
        {Object.entries(foodCategories).map(([key, value]) => {
          return <CategoryBadge key={key} emoji={value.emoji} text={value.name}></CategoryBadge>;
        })}
      </div>
      <div className="flex flex-wrap gap-1">
        <Badge variant="outline">3 added</Badge>
      </div>
    </div>
  );
};
