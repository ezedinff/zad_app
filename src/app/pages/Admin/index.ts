import { Api } from 'api/api';

// import { selectBranches } from './BranchesPage/slice/selectors';
const api = new Api({
  baseUrl: 'https://localhost:5001',
});
const branches = {
  loadList: api.branchs.branchsList,
  createOne: api.branchs.branchsCreate,
};
const clients = {
  loadList: api.client.clientList,
  createOne: api.client.clientCreate,
  updateOne: api.client.clientUpdate,
  deleteOne: api.client.clientDelete,
};
const pets = {
  loadList: api.pet.getPet,
  createOne: api.pet.postPet,
  updateOne: api.pet.putPet,
  deleteOne: api.pet.deletePet,
};
const suppliers = {
  loadList: api.supplier.supplierList,
  createOne: api.supplier.supplierCreate,
  // updateOne: api.pet.putPet,
  // deleteOne: api.pet.deletePet,
};
const debts = {
  loadList: api.debt.debtList,
  createOne: api.debt.debtCreate,
  updateOne: api.debt.debtUpdate,
  deleteOne: api.debt.debtDelete,
};
const discounts = {
  // loadList: api.d
};
const products = {
  loadList: api.product.productList,
  createOne: api.product.productCreate,
  updateOne: api.product.productUpdate,
  deleteOne: api.product.productDelete,
};
const purchases = {
  loadList: api.purchase.purchaseList,
  createOne: api.purchase.purchaseCreate,
  updateOne: api.purchase.purchaseUpdate,
  deleteOne: api.purchase.purchaseDelete,
};
const users = {
  loadList: api.employee.getAllList,
  createOne: api.employee.employeeCreate,
  updateOne: api.employee.employeeUpdate,
  deleteOne: api.employee.employeeDelete,
};
const sales = {
  loadList: api.sale.saleList,
  createOne: api.sale.saleCreate,
  updateOne: api.sale.saleUpdate,
  deleteOne: api.sale.saleDelete,
};
export default {
  branches,
  clients,
  pets,
  debts,
  products,
  users,
  sales,
  suppliers,
  discounts,
  purchases,
};
