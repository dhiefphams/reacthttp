import {ReadyState, RequestMethod, ResponseContentType, ResponseType} from "./enums";
import {Headers} from "./headers";
import {Request} from "./static_request";
import {URLSearchParams} from "./url_search_params";

/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @experimental
 */
export interface ConnectionBackend {
  createConnection(request: any): Connection;
}

/**
 * Abstract class from which real connections are derived.
 *
 * @experimental
 */
export interface Connection {
  readyState: ReadyState;
  request: Request;
  response: any;  // TODO: generic of <Response>;
}

/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @experimental
 */
export interface XSRFStrategy {
  configureRequest(req: Request): void;
}

/**
 * Interface for options to construct a RequestOptions, based on
 * [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
 *
 * @experimental
 */
export interface RequestOptionsArgs {
  url?: string;
  method?: string|RequestMethod;
  search?: string|URLSearchParams;
  headers?: Headers;
  body?: any;
  withCredentials?: boolean;
  responseType?: ResponseContentType;
}

/**
 * Required structure when constructing new Request();
 */
export interface RequestArgs extends RequestOptionsArgs { url: string; }

/**
 * Interface for options to construct a Response, based on
 * [ResponseInit](https://fetch.spec.whatwg.org/#responseinit) from the Fetch spec.
 *
 * @experimental
 */
export type ResponseOptionsArgs = {
  body?: string | Object | FormData | ArrayBuffer | Blob; status?: number; statusText?: string;
  headers?: Headers;
  type?: ResponseType;
  url?: string;
};
