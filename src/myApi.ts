export interface Address {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;
  country?: string | null;
  state?: string | null;
}

export interface ErrorModel {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string | null;
}

export interface AddressResponseModel {
  data?: Address;
  succeeded?: boolean;
  errors?: ErrorModel;
  message?: string | null;
}

export interface OfficeHours {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;

  /** @format date-time */
  workStartTime?: string;

  /** @format date-time */
  closureDate?: string;

  /** @format date-time */
  workDate?: string;

  /** @format int32 */
  branchId?: number;
}

export interface Branchs {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;
  name?: string | null;
  phone?: string | null;

  /** @format int32 */
  status?: number;
  officeHours?: OfficeHours;
  mainOffice?: string | null;
}

export interface BranchsCreateDataResponse {
  success?: boolean;
  error?: ErrorModel;
  data?: Branchs;
}

export interface Category {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;
}

export interface Client {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  cellPhone?: string | null;
  email?: string | null;

  /** @format date-time */
  lastBuyDate?: string | null;
  currentStatus?: boolean;
  category?: Category;
}

export interface ClinicalHistory {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;

  /** @format int32 */
  petId?: number;

  /** @format int32 */
  productId?: number;

  /** @format int32 */
  serviceId?: number | null;

  /** @format int32 */
  dosis?: number;

  /** @format date-time */
  serviceDate?: string;

  /** @format date-time */
  serviceTime?: string;

  /** @format date-time */
  nextSchedule?: string;
  observations?: string | null;
  diseaseTreat?: string | null;
}

export interface DashboardDataModel {
  /** @format int32 */
  clientCount?: number;

  /** @format int32 */
  productCount?: number;

  /** @format int32 */
  petsCount?: number;

  /** @format int32 */
  branchCount?: number;

  /** @format int32 */
  usersCount?: number;

  /** @format date-time */
  currentDate?: string;

  /** @format double */
  currentCurrency?: number;
}

export interface Supplier {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;
  commercialName?: string | null;
  businnessName?: string | null;
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
}

export interface Purchase {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;

  /** @format int32 */
  product?: number;

  /** @format int32 */
  branchId?: number;

  /** @format date-time */
  expirationDate?: string;

  /** @format int32 */
  existance?: number;
  supplier?: Supplier;

  /** @format int32 */
  quantity?: number;

  /** @format double */
  unitPrice?: number;

  /** @format double */
  totalPrice?: number;

  /** @format uuid */
  receiverEmployee?: string;

  /** @format int32 */
  paymentMethod?: number;

  /** @format double */
  subTotal?: number;

  /** @format double */
  tax?: number;

  /** @format double */
  grandTotal?: number;

  /** @format double */
  discount?: number;
}

export interface Debt {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;
  purchase?: Purchase;

  /** @format int32 */
  amount?: number;

  /** @format int32 */
  amountPaid?: number;

  /** @format int32 */
  amountToBePaid?: number;

  /** @format date-time */
  timeToPay?: string;

  /** @format date-time */
  subscriptionDate?: string;

  /** @format int32 */
  status?: number;
}

export interface Employee {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  gender?: string | null;
  photoUrl?: string | null;

  /** @format date-time */
  dateOfBirth?: string;

  /** @format date-time */
  hireDate?: string;
  address?: Address;

  /** @format int32 */
  branchId?: number;

  /** @format int32 */
  role?: number;

  /** @format int32 */
  status?: number;
  phone?: string | null;
  email?: string | null;
  veterinarianId?: string | null;
}

export interface QueryStringParameters {
  /** @format int32 */
  pageNumber?: number;

  /** @format int32 */
  pageSize?: number;
}

export interface LookUpData {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;

  /** @format int32 */
  lookupTypeId?: number;
  name?: string | null;
  value?: string | null;
}

export interface LookUpDataResponseModel {
  data?: LookUpData;
  succeeded?: boolean;
  errors?: ErrorModel;
  message?: string | null;
}

export interface LookUpType {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;
  name?: string | null;
  value?: string | null;
}

export interface LookUpTypeResponseModel {
  data?: LookUpType;
  succeeded?: boolean;
  errors?: ErrorModel;
  message?: string | null;
}

export interface OfficeHoursResponseModel {
  data?: OfficeHours;
  succeeded?: boolean;
  errors?: ErrorModel;
  message?: string | null;
}

export interface Pet {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;
  spiece?: string | null;
  breedOfPet?: string | null;
  name?: string | null;
  owner?: string | null;
  petId?: string | null;

  /** @format date-time */
  birthDate?: string;
  photo?: string | null;

  /** @format date-time */
  lastVisit?: string;
}

export interface Product {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;
  name?: string | null;
  barCode?: string | null;

  /** @format int32 */
  productCategory?: number;
  description?: string | null;
  image?: string | null;
  unitOfMeasurement?: string | null;

  /** @format int32 */
  brandId?: number;

  /** @format double */
  price?: number;
  status?: boolean;

  /** @format int32 */
  discount?: number;
}

export interface ProductResponseModel {
  data?: Product;
  succeeded?: boolean;
  errors?: ErrorModel;
  message?: string | null;
}

export interface Recievable {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;

  /** @format int32 */
  saleId?: number;

  /** @format double */
  intialDebt?: number;

  /** @format int32 */
  paymentFrequency?: number;

  /** @format double */
  amountLeft?: number;

  /** @format date-time */
  debtTime?: string;

  /** @format int32 */
  status?: number;
}

export interface RoleViewModel {
  id?: string | null;
  name?: string | null;
  normalizedName?: string | null;
  concurrencyStamp?: string | null;
}

export interface Sale {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;

  /** @format int32 */
  clientId?: number;

  /** @format int32 */
  userId?: number;

  /** @format int32 */
  paymentMethod?: number;

  /** @format double */
  exchangeRate?: number;
  description?: string | null;

  /** @format double */
  subTotal?: number;

  /** @format double */
  discount?: number;

  /** @format double */
  tax?: number;

  /** @format double */
  grandTotal?: number;

  /** @format double */
  change?: number;

  /** @format int32 */
  status?: number;
  sales?: Sale[] | null;
}

export interface SupplierResponseModel {
  data?: Supplier;
  succeeded?: boolean;
  errors?: ErrorModel;
  message?: string | null;
}

export interface SupplierContact {
  /** @format uuid */
  createdBy?: string;

  /** @format uuid */
  updatedBy?: string;

  /** @format date-time */
  createdDate?: string;

  /** @format date-time */
  updatedDate?: string;

  /** @format int32 */
  isActive?: number | null;

  /** @format int32 */
  isDeleted?: number | null;

  /** @format int32 */
  id?: number;

  /** @format int32 */
  contactId: number;
  phone?: string | null;
  cellphone?: string | null;
  email?: string | null;
}

export interface SupplierContactResponseModel {
  data?: SupplierContact;
  succeeded?: boolean;
  errors?: ErrorModel;
  message?: string | null;
}

export interface UserViewModel {
  userId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  userName?: string | null;
  email?: string | null;
  roles?: string[] | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`,
    )}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      key => 'undefined' !== typeof query[key],
    );
    return keys
      .map(key =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
          ...(requestParams.headers || {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async response => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch(e => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title API
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<
  SecurityDataType
> {
  address = {
    /**
     * No description
     *
     * @tags Address
     * @name AddressList
     * @request GET:/Address
     */
    addressList: (query?: { id?: number | null }, params: RequestParams = {}) =>
      this.request<Address[], any>({
        path: `/Address`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Address
     * @name AddressCreate
     * @request POST:/Address
     */
    addressCreate: (data: Address, params: RequestParams = {}) =>
      this.request<AddressResponseModel, any>({
        path: `/Address`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Address
     * @name AddressUpdate
     * @request PUT:/Address
     */
    addressUpdate: (data: Address, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Address`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Address
     * @name AddressDelete
     * @request DELETE:/Address
     */
    addressDelete: (query?: { id?: number }, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Address`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  branchs = {
    /**
     * No description
     *
     * @tags Branchs
     * @name BranchsList
     * @request GET:/Branchs
     */
    branchsList: (
      query?: { PageNumber?: number; PageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<Branchs[], any>({
        path: `/Branchs`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branchs
     * @name BranchsCreate
     * @request POST:/Branchs
     */
    branchsCreate: (data: Branchs, params: RequestParams = {}) =>
      this.request<BranchsCreateDataResponse, any>({
        path: `/Branchs`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branchs
     * @name BranchsUpdate
     * @request PUT:/Branchs
     */
    branchsUpdate: (
      data: Branchs,
      query?: { id?: number },
      params: RequestParams = {},
    ) =>
      this.request<number, any>({
        path: `/Branchs`,
        method: 'PUT',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branchs
     * @name BranchsDelete
     * @request DELETE:/Branchs
     */
    branchsDelete: (query?: { id?: number }, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Branchs`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  client = {
    /**
     * No description
     *
     * @tags Client
     * @name ClientList
     * @request GET:/Client
     */
    clientList: (
      query?: { id?: number | null; PageNumber?: number; PageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<Client[], any>({
        path: `/Client`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ClientCreate
     * @request POST:/Client
     */
    clientCreate: (data: Client, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Client`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ClientUpdate
     * @request PUT:/Client
     */
    clientUpdate: (
      data: Client,
      query?: { id?: number },
      params: RequestParams = {},
    ) =>
      this.request<number, any>({
        path: `/Client`,
        method: 'PUT',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client
     * @name ClientDelete
     * @request DELETE:/Client
     */
    clientDelete: (query?: { id?: number }, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/Client`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  clinicalHistory = {
    /**
     * No description
     *
     * @tags ClinicalHistory
     * @name ClinicalHistoryList
     * @request GET:/ClinicalHistory
     */
    clinicalHistoryList: (params: RequestParams = {}) =>
      this.request<ClinicalHistory[], any>({
        path: `/ClinicalHistory`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ClinicalHistory
     * @name ClinicalHistoryCreate
     * @request POST:/ClinicalHistory
     */
    clinicalHistoryCreate: (
      data: ClinicalHistory,
      params: RequestParams = {},
    ) =>
      this.request<number, any>({
        path: `/ClinicalHistory`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ClinicalHistory
     * @name ClinicalHistoryUpdate
     * @request PUT:/ClinicalHistory
     */
    clinicalHistoryUpdate: (
      data: ClinicalHistory,
      query?: { id?: number },
      params: RequestParams = {},
    ) =>
      this.request<number, any>({
        path: `/ClinicalHistory`,
        method: 'PUT',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ClinicalHistory
     * @name ClinicalHistoryDelete
     * @request DELETE:/ClinicalHistory
     */
    clinicalHistoryDelete: (
      query?: { id?: number },
      params: RequestParams = {},
    ) =>
      this.request<number, any>({
        path: `/ClinicalHistory`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  dashboard = {
    /**
     * No description
     *
     * @tags Dashboard
     * @name DashboardList
     * @request GET:/Dashboard
     */
    dashboardList: (params: RequestParams = {}) =>
      this.request<DashboardDataModel, any>({
        path: `/Dashboard`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  debt = {
    /**
     * No description
     *
     * @tags Debt
     * @name DebtList
     * @request GET:/Debt
     */
    debtList: (query?: { id?: number | null }, params: RequestParams = {}) =>
      this.request<Debt[], any>({
        path: `/Debt`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Debt
     * @name DebtCreate
     * @request POST:/Debt
     */
    debtCreate: (data: Debt, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Debt`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Debt
     * @name DebtUpdate
     * @request PUT:/Debt
     */
    debtUpdate: (
      data: Debt,
      query?: { id?: number },
      params: RequestParams = {},
    ) =>
      this.request<number, any>({
        path: `/Debt`,
        method: 'PUT',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Debt
     * @name DebtDelete
     * @request DELETE:/Debt
     */
    debtDelete: (query?: { id?: number }, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/Debt`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  employee = {
    /**
     * No description
     *
     * @tags Employee
     * @name GetAllList
     * @request GET:/Employee/GetAll
     */
    getAllList: (
      query?: { PageNumber?: number; PageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<Employee[], any>({
        path: `/Employee/GetAll`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeDetail
     * @request GET:/Employee/{branchId}
     */
    employeeDetail: (
      branchId: number,
      data: QueryStringParameters,
      params: RequestParams = {},
    ) =>
      this.request<Employee[], any>({
        path: `/Employee/${branchId}`,
        method: 'GET',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeDetail2
     * @request GET:/Employee/{branchId}/{empId}
     * @originalName employeeDetail
     * @duplicate
     */
    employeeDetail2: (
      branchId: number,
      empId: number,
      params: RequestParams = {},
    ) =>
      this.request<Employee, any>({
        path: `/Employee/${branchId}/${empId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeCreate
     * @request POST:/Employee
     */
    employeeCreate: (data: Employee, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Employee`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeUpdate
     * @request PUT:/Employee
     */
    employeeUpdate: (data: Employee, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Employee`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeDelete
     * @request DELETE:/Employee
     */
    employeeDelete: (
      query?: { branchId?: number; empId?: number },
      params: RequestParams = {},
    ) =>
      this.request<number, any>({
        path: `/Employee`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  lookUp = {
    /**
     * No description
     *
     * @tags LookUp
     * @name LookUpDetail
     * @request GET:/LookUp/{id}
     */
    lookUpDetail: (id: number, params: RequestParams = {}) =>
      this.request<LookUpData, any>({
        path: `/LookUp/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LookUp
     * @name LookUpCreate
     * @request POST:/LookUp
     */
    lookUpCreate: (data: LookUpData, params: RequestParams = {}) =>
      this.request<LookUpDataResponseModel, any>({
        path: `/LookUp`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LookUp
     * @name LookUpList
     * @request GET:/LookUp
     */
    lookUpList: (
      query?: { PageNumber?: number; PageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<LookUpData[], any>({
        path: `/LookUp`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LookUp
     * @name LookUpUpdate
     * @request PUT:/LookUp
     */
    lookUpUpdate: (
      data: LookUpData,
      query?: { id?: number },
      params: RequestParams = {},
    ) =>
      this.request<boolean, any>({
        path: `/LookUp`,
        method: 'PUT',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LookUp
     * @name LookUpDelete
     * @request DELETE:/LookUp
     */
    lookUpDelete: (query?: { id?: number }, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/LookUp`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  lookupType = {
    /**
     * No description
     *
     * @tags LookupType
     * @name LookupTypeList
     * @request GET:/LookupType
     */
    lookupTypeList: (
      query?: { PageNumber?: number; PageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<LookUpType[], any>({
        path: `/LookupType`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LookupType
     * @name LookupTypeUpdate
     * @request PUT:/LookupType
     */
    lookupTypeUpdate: (
      data: LookUpType,
      query?: { id?: number },
      params: RequestParams = {},
    ) =>
      this.request<number, any>({
        path: `/LookupType`,
        method: 'PUT',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LookupType
     * @name LookupTypeCreate
     * @request POST:/LookupType
     */
    lookupTypeCreate: (data: LookUpType, params: RequestParams = {}) =>
      this.request<LookUpTypeResponseModel, any>({
        path: `/LookupType`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LookupType
     * @name LookupTypeDelete
     * @request DELETE:/LookupType
     */
    lookupTypeDelete: (query?: { id?: number }, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/LookupType`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LookupType
     * @name LookupTypeDetail
     * @request GET:/LookupType/{id}
     */
    lookupTypeDetail: (id: number, params: RequestParams = {}) =>
      this.request<LookUpType, any>({
        path: `/LookupType/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  officeHour = {
    /**
     * No description
     *
     * @tags OfficeHour
     * @name OfficeHourList
     * @request GET:/OfficeHour
     */
    officeHourList: (
      query?: { branchId?: number; PageNumber?: number; PageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<OfficeHours[], any>({
        path: `/OfficeHour`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags OfficeHour
     * @name OfficeHourCreate
     * @request POST:/OfficeHour
     */
    officeHourCreate: (data: OfficeHours, params: RequestParams = {}) =>
      this.request<OfficeHoursResponseModel, any>({
        path: `/OfficeHour`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags OfficeHour
     * @name OfficeHourUpdate
     * @request PUT:/OfficeHour
     */
    officeHourUpdate: (
      data: OfficeHours,
      query?: { id?: number },
      params: RequestParams = {},
    ) =>
      this.request<number, any>({
        path: `/OfficeHour`,
        method: 'PUT',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags OfficeHour
     * @name OfficeHourDelete
     * @request DELETE:/OfficeHour
     */
    officeHourDelete: (query?: { id?: number }, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/OfficeHour`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags OfficeHour
     * @name OfficeHourDetail
     * @request GET:/OfficeHour/{branchId}
     */
    officeHourDetail: (branchId: number, params: RequestParams = {}) =>
      this.request<OfficeHours[], any>({
        path: `/OfficeHour/${branchId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  pet = {
    /**
     * No description
     *
     * @tags Pet
     * @name GetPet
     * @request GET:/Pet
     */
    getPet: (query?: { id?: number | null }, params: RequestParams = {}) =>
      this.request<Pet[], any>({
        path: `/Pet`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pet
     * @name PostPet
     * @request POST:/Pet
     */
    postPet: (data: Pet, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Pet`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pet
     * @name PutPet
     * @request PUT:/Pet
     */
    putPet: (data: Pet, query?: { id?: number }, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Pet`,
        method: 'PUT',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pet
     * @name DeletePet
     * @request DELETE:/Pet
     */
    deletePet: (query?: { id?: number }, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/Pet`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  product = {
    /**
     * No description
     *
     * @tags Product
     * @name ProductList
     * @request GET:/Product
     */
    productList: (data: QueryStringParameters, params: RequestParams = {}) =>
      this.request<Product[], any>({
        path: `/Product`,
        method: 'GET',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductCreate
     * @request POST:/Product
     */
    productCreate: (data: Product, params: RequestParams = {}) =>
      this.request<ProductResponseModel, any>({
        path: `/Product`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductUpdate
     * @request PUT:/Product
     */
    productUpdate: (
      data: Product,
      query?: { id?: number },
      params: RequestParams = {},
    ) =>
      this.request<number, any>({
        path: `/Product`,
        method: 'PUT',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductDelete
     * @request DELETE:/Product
     */
    productDelete: (query?: { id?: number }, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/Product`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  purchase = {
    /**
     * No description
     *
     * @tags Purchase
     * @name PurchaseDetail
     * @request GET:/Purchase/{id}
     */
    purchaseDetail: (id: number, params: RequestParams = {}) =>
      this.request<Purchase, any>({
        path: `/Purchase/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Purchase
     * @name PurchaseList
     * @request GET:/Purchase
     */
    purchaseList: (
      query?: { PageNumber?: number; PageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<Purchase[], any>({
        path: `/Purchase`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Purchase
     * @name PurchaseCreate
     * @request POST:/Purchase
     */
    purchaseCreate: (data: Purchase, params: RequestParams = {}) =>
      this.request<Purchase, any>({
        path: `/Purchase`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Purchase
     * @name PurchaseUpdate
     * @request PUT:/Purchase
     */
    purchaseUpdate: (
      data: Purchase,
      query?: { id?: number },
      params: RequestParams = {},
    ) =>
      this.request<Purchase, any>({
        path: `/Purchase`,
        method: 'PUT',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Purchase
     * @name PurchaseDelete
     * @request DELETE:/Purchase
     */
    purchaseDelete: (query?: { id?: number }, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/Purchase`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  recievable = {
    /**
     * No description
     *
     * @tags Recievable
     * @name RecievableList
     * @request GET:/Recievable
     */
    recievableList: (params: RequestParams = {}) =>
      this.request<Recievable[], any>({
        path: `/Recievable`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recievable
     * @name RecievableCreate
     * @request POST:/Recievable
     */
    recievableCreate: (data: Recievable, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/Recievable`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recievable
     * @name RecievableUpdate
     * @request PUT:/Recievable
     */
    recievableUpdate: (
      data: Recievable,
      query?: { id?: number },
      params: RequestParams = {},
    ) =>
      this.request<boolean, any>({
        path: `/Recievable`,
        method: 'PUT',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recievable
     * @name RecievableDelete
     * @request DELETE:/Recievable
     */
    recievableDelete: (query?: { id?: number }, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/Recievable`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  roleManager = {
    /**
     * No description
     *
     * @tags RoleManager
     * @name RoleManagerList
     * @request GET:/RoleManager
     */
    roleManagerList: (params: RequestParams = {}) =>
      this.request<RoleViewModel[], any>({
        path: `/RoleManager`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RoleManager
     * @name RoleManagerCreate
     * @request POST:/RoleManager
     */
    roleManagerCreate: (
      query?: { roleName?: string | null },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/RoleManager`,
        method: 'POST',
        query: query,
        ...params,
      }),
  };
  sale = {
    /**
     * No description
     *
     * @tags Sale
     * @name SaleList
     * @request GET:/Sale
     */
    saleList: (query?: { id?: number | null }, params: RequestParams = {}) =>
      this.request<Sale[], any>({
        path: `/Sale`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sale
     * @name SaleCreate
     * @request POST:/Sale
     */
    saleCreate: (data: Sale, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Sale`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sale
     * @name SaleUpdate
     * @request PUT:/Sale
     */
    saleUpdate: (
      data: Sale,
      query?: { id?: number },
      params: RequestParams = {},
    ) =>
      this.request<number, any>({
        path: `/Sale`,
        method: 'PUT',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sale
     * @name SaleDelete
     * @request DELETE:/Sale
     */
    saleDelete: (query?: { id?: number }, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Sale`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  supplier = {
    /**
     * No description
     *
     * @tags Supplier
     * @name SupplierList
     * @request GET:/Supplier
     */
    supplierList: (
      query?: { PageNumber?: number; PageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<Supplier[], any>({
        path: `/Supplier`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Supplier
     * @name SupplierCreate
     * @request POST:/Supplier
     */
    supplierCreate: (data: Supplier, params: RequestParams = {}) =>
      this.request<SupplierResponseModel, any>({
        path: `/Supplier`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  supplierContact = {
    /**
     * No description
     *
     * @tags SupplierContact
     * @name SupplierContactList
     * @request GET:/SupplierContact
     */
    supplierContactList: (
      query?: { PageNumber?: number; PageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<SupplierContact[], any>({
        path: `/SupplierContact`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SupplierContact
     * @name SupplierContactCreate
     * @request POST:/SupplierContact
     */
    supplierContactCreate: (
      data: SupplierContact,
      params: RequestParams = {},
    ) =>
      this.request<SupplierContactResponseModel, any>({
        path: `/SupplierContact`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags User
     * @name UserList
     * @request GET:/User
     */
    userList: (params: RequestParams = {}) =>
      this.request<UserViewModel[], any>({
        path: `/User`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
}
