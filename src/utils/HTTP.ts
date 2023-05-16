export enum METHODS {
  Get = 'Get',
  Post = 'Post',
  Put = 'Put',
  Delete = 'Delete'
}

type Options = {
  method: METHODS
  data?: any
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
  static API_URL: "https://ya-praktikum.tech/api/v2"
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTP.API_URL}${endpoint}`
  }

  public get<Response>(path = '/'): Promise<Response> {
    return this.request<Response>(this.endpoint + path);
  }

  public post<Response = void>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(
      this.endpoint + path,
      { method: METHODS.Post,
      data
      },
    );
  };

  public put<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(
      this.endpoint + path,
      { method: METHODS.Put,
      data
      },
    );
  };

  public delete<Response = void>(path: string, data?: unknown): Promise<Response>{
    return this.request(
      this.endpoint + path,
      { method: METHODS.Delete,
      data
      },
    );
  };

  private request<Response>(url: string, options: Options = {method: METHODS.Get},
    timeout: number = 0): Promise<Response> {
  const {method, data} = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject("No method");
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.Get;

      xhr.open(method, isGet && !! data ? `${url}${queryStringify(data)}` : url);


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

      xhr.setRequestHeader("Content-Type", "application/json")

      xhr.withCredentials = true;
      xhr.responseType = "json"

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



