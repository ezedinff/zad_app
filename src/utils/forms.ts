import { GridSize } from '@material-ui/core';

export interface FormElement {
  name: string;
  type:
    | 'text'
    | 'password'
    | 'number'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'date'
    | 'multi'
    | 'login-checkbox';
  placeholder: string;
  data?: {
    from: 'array' | 'remote';
    url?: string;
    options: { value: string; label: string }[];
  };
  size: { xs: GridSize; md: GridSize };
}

const loginForm: FormElement[] = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'keepMeLoggedIn',
    type: 'login-checkbox',
    placeholder: 'Keep me logged in',
    size: { xs: 12, md: 12 },
  },
];

const productRegistrationForm: FormElement[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Product Name',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'price',
    type: 'text',
    placeholder: 'Product Unit Price',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'ingredients',
    type: 'text',
    placeholder: 'Product Ingredients',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'expiresAfterDays',
    type: 'text',
    placeholder: 'Expires After',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'availableQuantity',
    type: 'text',
    placeholder: 'Amount Of Backed in number',
    size: { xs: 12, md: 12 },
  },
];
const productIngredientRegistrationForm: FormElement[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Product Ingredient Name',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'availableInStock',
    type: 'text',
    placeholder: 'Available Amount In Stock',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'measurementUnit',
    type: 'select',
    placeholder: 'Measurement Unit',
    data: {
      from: 'array',
      options: [
        { label: 'Kilo Gram', value: 'KG' },
        { label: 'Gram', value: 'GRAM' },
        { label: 'Liter', value: 'LITER' },
      ],
    },
    size: { xs: 12, md: 12 },
  },
  {
    name: 'unitPrice',
    type: 'text',
    placeholder: 'Unit Price',
    size: { xs: 12, md: 12 },
  },
];
const expenseRegistrationForm: FormElement[] = [
  {
    name: 'amount',
    type: 'text',
    placeholder: 'Amount in birr',
    size: { xs: 12, md: 12 },
  },
  {
    name: 'reason',
    type: 'select',
    placeholder: 'Reason for the expense',
    data: {
      from: 'array',
      options: [
        { value: 'Labour - የጉልበት ሥራ', label: 'Labour - የጉልበት ሥራ' },
        { value: 'Cleaning - ማጽዳት ሥራ', label: 'Cleaning - ማጽዳት ሥራ' },
      ],
    },
    size: { xs: 12, md: 12 },
  },
];
export default {
  expenses: expenseRegistrationForm,
  login: loginForm,
  'product-ingredients': productIngredientRegistrationForm,
  products: productRegistrationForm,
};
