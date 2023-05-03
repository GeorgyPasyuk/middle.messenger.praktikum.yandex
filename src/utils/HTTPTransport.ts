
type Options = {
  data?: {
    [key: string]: any;
  };
  headers?: {
    [key: string]: string;
  };
  timeout?: number;
  retries?: number;
};


const METHODS: Record<string, string> = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
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

export class HTTPTransport {
  get = (url: string, options: Options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  post = (url:string, options: Options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };

  put = (url:string, options: Options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };

  delete = (url:string, options: Options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  };

  request = (url: string, options = {}, timeout: number = 5000) => {
    const { headers = {}, method, data } = options as
      {headers: Record<string, string>, method: string, data: string};

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject("No method");
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onerror = function () {
        reject(xhr);
      };

      xhr.onabort = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
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



