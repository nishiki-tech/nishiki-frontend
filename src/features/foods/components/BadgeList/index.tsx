import { ContainerIcon, HomeIcon_Off } from '@/assets/images/icons';
import { foodCategories } from '@/const/foodCategory';
import { cn } from '@/lib/tailwind/utils';
import { IContainer, IGroup } from '@/types/definition';

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { FilterBadge } from './FilterBadge';

export const BadgeList = ({
  groupName,
  containerName,
  categoryList,
  setCategoryList,
}: {
  groupName: IGroup['name'];
  containerName: IContainer['name'];
  categoryList: string[];
  setCategoryList: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  /**
   * Update url query parameter
   * @param key - query parameter key
   * @param value - query parameter value (string or string[] for category)
   */
  const updateUrlParams = (key: string, value?: string | string[]) => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      params.delete(key);
    } else {
      params.set(key, Array.isArray(value) ? value.join(',') : value);
    }
    replace(`${pathname}?${params.toString()}` as Route);
  };

  /**
   * Remove the corresponding category from the filter category array
   * @param key - category name
   */
  const removeCategoryFilter = (key: string) => {
    const updatedCategoryList = categoryList.filter((category) => category !== key);
    setCategoryList(updatedCategoryList);
    updateUrlParams('category', updatedCategoryList);
  };

  return (
    <div
      className={cn(
        (groupName || containerName || categoryList.length > 0) &&
          'flex -mx-4 px-4 gap-1.5 mt-4 pb-1 overflow-x-auto whitespace-nowrap',
      )}
    >
      {groupName ? (
        <FilterBadge
          icon={HomeIcon_Off}
          text={groupName}
          onCrossClick={() => updateUrlParams('group')}
        />
      ) : null}
      {containerName ? (
        <FilterBadge
          icon={ContainerIcon}
          text={containerName}
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
