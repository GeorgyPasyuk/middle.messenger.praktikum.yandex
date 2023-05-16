export enum METHODS {
  Get = 'Get',
  Post = 'Post',
  Put = 'Put',
  Delete = 'Delete'
}

type Options = {
  method?: METHODS
  data?: any
  headers?: {
    [key: string]: string;
  };
  timeout?: number;
  retries?: number;
};




function queryStringify(data:string) {
  if (typeof data !== "object") {
    throw new Error("Data must be object");
  }
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`;
  }, "?");
}

export class HTTP {
  static API_URL: "http://ya-praktikum/api/v1"
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTP.API_URL}${endpoint}`
  }

  public get<Response>(path = '/'): Promise<Response> {
    return this.request<Response>(this.endpoint + path);
  }

  public post<Response = void>(path: string, options: Options = {}): Promise<Response> {
    return this.request<Response>(
      this.endpoint + path,
      { ...options, method: METHODS.Post },
      options.timeout
    );
  };

  public put<Response = void>(path: string, options: Options = {}): Promise<Response> {
    return this.request<Response>(
      this.endpoint + path,
      { ...options, method: METHODS.Put },
      options.timeout
    );
  };

  public delete<Response = void>(path: string, options: Options = {}): Promise<Response>{
    return this.request(
      this.endpoint + path,
      { ...options, method: METHODS.Delete },
      options.timeout
    );
  };

  private request<Response>(url: string, options: Options = {method: METHODS.Get},
    timeout: number = 0): Promise<Response> {
  const {headers = {}, method, data} = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject("No method");
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.Get;

      xhr.open(method, isGet && !! data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr.response);
      };

      xhr.onerror = function () {
        reject(xhr.response);
      };

      xhr.onabort = () =>  reject({reason: "abort"});
      xhr.onerror = () => reject({reason: "network error"})
      xhr.ontimeout = () => reject({reason: "timeout"});
      xhr.timeout = timeout;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}



export function fetchWithRetry(url: string, options = {}) {
  const {tries = 1}  = options as {tries: number};

  function onError(err: string): object{
    const triesLeft = tries - 1;
    if (!triesLeft){
      throw err;
    }

    return fetchWithRetry(url, {...options, tries: triesLeft});
  }

  return fetch(url, options).catch(onError);
}



