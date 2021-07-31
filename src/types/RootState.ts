// import { BranchesState } from 'app/pages/Admin/BranchesPage/slice/types';
// import { ClientsState } from 'app/pages/Admin/ClientsPage/slice/types';
// import { ConsultationState } from 'app/pages/Admin/ConsultationPage/slice/types';
// import { DebtsState } from 'app/pages/Admin/DebtsPage/slice/types';
// import { DiscountsState } from 'app/pages/Admin/DiscountPage/slice/types';
// import { PetsState } from 'app/pages/Admin/PetsPage/slice/types';
// import { ProductsState } from 'app/pages/Admin/ProductPage/slice/types';
// import { PurchasesState } from 'app/pages/Admin/PurchasePage/slice/types';
// import { SalesState } from 'app/pages/Admin/SalesPage/slice/types';
// import { SettingsState } from 'app/pages/Admin/SettingsPage/slice/types';
// import { SuppliersState } from 'app/pages/Admin/SuppliersPage/slice/types';
// import { UsersState } from 'app/pages/Admin/UsersPage/slice/types';
import { AppMessagesState } from 'app/pages/AppMessages/types';
import { AdminState } from 'app/pages/Admin/AdminPage/slice/types';
import { AuthState } from 'app/pages/Auth/slice/types';
import { DashboardState } from 'app/pages/Admin/Dashboard/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  appMessages: AppMessagesState;
  // branches?: BranchesState;
  // clients?: ClientsState;
  // consultation?: ConsultationState;
  // debts?: DebtsState;
  // discounts?: DiscountsState;
  // pets?: PetsState;
  // products?: ProductsState;
  // purchases?: PurchasesState;
  // sales?: SalesState;
  // settings?: SettingsState;
  // suppliers?: SuppliersState;
  // users?: UsersState;
  admin?: AdminState;
  auth?: AuthState;
  dashboard?: DashboardState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
