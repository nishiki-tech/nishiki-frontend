import { ContainerIcon, HomeIcon_Off } from '@/assets/images/icons';
import { foodCategories } from '@/const/foodCategory';

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

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
  groupIdMap: { [key: string]: string };
  containerIdMap: { [key: string]: string };
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
      className={`flex ${
        group || container || categoryList.length > 0
          ? 'gap-1.5 mt-4 pb-1.5 overflow-x-auto margin-right: -16px;'
          : ''
      }`}
    >
      {group ? (
        <FilterBadge
          icon={HomeIcon_Off}
          text={groupIdMap[group]}
          onCrossClick={() => updateUrlParams('group')}
        />
      ) : (
        <></>
      )}
      {container ? (
        <FilterBadge
          icon={ContainerIcon}
          text={containerIdMap[container]}
          onCrossClick={() => updateUrlParams('container')}
        />
      ) : (
        <></>
      )}
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
