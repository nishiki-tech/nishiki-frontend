interface IFoodCategory {
  name: string;
  emoji: string;
}

interface IFoodCategories {
  [key: string]: IFoodCategory;
}

export const foodCategories: IFoodCategories = {
  unselected: {
    name: 'Unselected',
    emoji: '🥣',
  },
  beverage: {
    name: 'Beverage',
    emoji: '☕️',
  },
  dairy: {
    name: 'Dairy',
    emoji: '🥛',
  },
  eggs: {
    name: 'Eggs',
    emoji: '🥚',
  },
  fats: {
    name: 'Fats',
    emoji: '🫒',
  },
  fruits: {
    name: 'Fruits',
    emoji: '🍎',
  },
  vegetables: {
    name: 'Vegetables',
    emoji: '🥗',
  },
  legumes: {
    name: 'Legumes',
    emoji: '🫘',
  },
  nutsAndSeeds: {
    name: 'Nuts & Seeds',
    emoji: '🥜',
  },
  meat: {
    name: 'Meat',
    emoji: '🥩',
  },
  desserts: {
    name: 'Desserts',
    emoji: '🍰',
  },
  soup: {
    name: 'Soup',
    emoji: '🍜',
  },
  seafood: {
    name: 'Seafood',
    emoji: '🍣',
  },
  convenience: {
    name: 'Convenience',
    emoji: '🥡',
  },
  other: {
    name: 'Other',
    emoji: '🍽️',
  },
};
