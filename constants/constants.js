const screens = {
  main_layout: 'MainLayout',
  home: 'Home',
  search: 'Search',
  cart: 'Cart',
  favourite: 'Favourite',
  notification: 'Notification',
  onboarding: 'Onboarding'
}

const onboarding = [
    {
        id: 0,
        title: "Genuine product",
        sub_title: "Diversified items of products in life, genuine product, safe",
    },
    {
        id: 1,
        title: "Convenient ordering",
        sub_title: "Order multiple items from multiple brands at the same time",
    },
    {
        id: 2,
        title: "Easy search",
        sub_title: "Find products easy with Scanning camera, pay with just one camera scan",
    },
    {
        id: 3,
        title: "Super fast delivery",
        sub_title: "Delivery within the next day including Saturday and Sunday",
    },
]

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.search,
  },
  {
    id: 2,
    label: screens.cart,
  },
  {
    id: 3,
    label: screens.favourite,
  },
  {
    id: 4,
    label: screens.notification,
  },
]

const delivery_time = [
  {
    id: 1,
    label: '10 Mins',
  },
  {
    id: 2,
    label: '20 Mins',
  },
  {
    id: 3,
    label: '30 Mins',
  },
]

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
]

const tags = [
  {
    id: 1,
    label: 'Burger',
  },
  {
    id: 2,
    label: 'Fast Food',
  },
  {
    id: 3,
    label: 'Pizza',
  },
  {
    id: 4,
    label: 'Asian',
  },
  {
    id: 5,
    label: 'Dessert',
  },
  {
    id: 6,
    label: 'Breakfast',
  },
  {
    id: 7,
    label: 'Vegetable',
  },
  {
    id: 8,
    label: 'Taccos',
  },
]

export default {
  screens,
  bottom_tabs,
  delivery_time,
  ratings,
  tags,
  onboarding
}
