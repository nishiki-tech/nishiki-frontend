import { ContainerIcon, HomeIcon_Off } from '@/assets/images/icons';
import { foodCategories } from '@/const/foodCategory';
import { cn } from '@/lib/tailwind/utils';

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { IdNameMapType } from '../types/FoodTypes';
import { FilterBadge } from '.';

export const BadgeList = ({
  group,
  container,
  categoryList,
  groupIdMap,
  containerIdMap,
  setCategoryList,
}: {
  group: string;
  container: string;
  categoryList: string[];
  groupIdMap: IdNameMapType;
  containerIdMap: IdNameMapType;
  setCategoryList: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const updateUrlParams = (key: string, value?: string | string[]) => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      params.delete(key);
    } else {
      params.set(key, Array.isArray(value) ? value.join(',') : value);
    }
    replace(`${pathname}?${params.toString()}` as Route);
  };

  const removeCategoryFilter = (key: string) => {
    const updatedCategoryList = categoryList.filter((category) => category !== key);
    setCategoryList(updatedCategoryList);
    updateUrlParams('category', updatedCategoryList);
  };

  return (
    <div
      className={cn(
        'flex',
        (group || container || categoryList.length > 0) &&
          'gap-1.5 mt-4 pb-1.5 overflow-x-auto margin-right: -16px; margin-right: -16px; padding-left: 16px; padding-right: 16px; padding-bottom: 4px;',
      )}
    >
      {group ? (
        <FilterBadge
          icon={HomeIcon_Off}
          text={groupIdMap[group]}
          onCrossClick={() => updateUrlParams('group')}
        />
      ) : null}
      {container ? (
        <FilterBadge
          icon={ContainerIcon}
          text={containerIdMap[container]}
          onCrossClick={() => updateUrlParams('container')}
        />
      ) : null}
      {categoryList.map((key) => {
        return (
          <FilterBadge
            key={key}
            emoji={foodCategories[key]?.emoji}
            text={foodCategories[key]?.name}
            onCrossClick={() => removeCategoryFilter(key)}
          />
        );
      })}
    </div>
  );
};
