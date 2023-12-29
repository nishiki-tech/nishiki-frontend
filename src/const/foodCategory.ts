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
    name: 'Egg',
    emoji: '🥚',
  },
  fatsAndOils: {
    name: 'Fat & Oil',
    emoji: '🫒',
  },
  fruits: {
    name: 'Fruit',
    emoji: '🍎',
  },
  vegetables: {
    name: 'Vegetable',
    emoji: '🥗',
  },
  legumes: {
    name: 'Legume',
    emoji: '🫘',
  },
  nutsAndSeeds: {
    name: 'Nut & Seed',
    emoji: '🥜',
  },
  meat: {
    name: 'Meat',
    emoji: '🥩',
  },
  desserts: {
    name: 'Dessert',
    emoji: '🍰',
  },
  soup: {
    name: 'Soup',
    emoji: '🍜',
  },
  seafoods: {
    name: 'Seafood',
    emoji: '🍣',
  },
  convenienceMeals: {
    name: 'Convenience Meal',
    emoji: '🥡',
  },
  seasoning: {
    name: 'Seasoning',
    emoji: '🧂',
  },
  alcohol: {
    name: 'Alcohol',
    emoji: '🍺',
  },
  other: {
    name: 'Other',
    emoji: '🍽️',
  },
};
