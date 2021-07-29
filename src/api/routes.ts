const routes = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    refreshToken: '/auth/token',
    me: '/auth/me',
  },
  products: {
    findAll: '/products',
    findOne: (id: string) => `/products/${id}`,
    createOne: '/products',
    updateOne: (id: string) => `/products/${id}`,
    deleteOne: (id: string) => `/products/${id}`,
  },
  expenses: {
    findAll: '/expenses',
    findOne: (id: string) => `/expenses/${id}`,
    createOne: '/expenses',
    updateOne: (id: string) => `/expenses/${id}`,
    deleteOne: (id: string) => `/expenses/${id}`,
  },
  'product-ingredients': {
    findAll: '/product-ingredients',
    findOne: (id: string) => `/product-ingredients/${id}`,
    createOne: '/product-ingredients',
    updateOne: (id: string) => `/product-ingredients/${id}`,
    deleteOne: (id: string) => `/product-ingredients/${id}`,
  },
  budget: {
    findOne: '/budget',
    updateOne: '/budget',
  },
  sales: {
    findAll: '/sales',
    findOne: (id: string) => `/sales/${id}`,
    createOne: '/sales',
  },
};

export default routes;
