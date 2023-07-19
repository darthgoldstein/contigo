const handleResponse = <T = any>(res: Response): Promise<T> => {
  if (!res.ok) {
    throw new Error(String(res.status), { cause: res.statusText });
  }

  return res.json();
};

export const getRequest = async <T = any>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  options = {
    method: 'GET',
    ...(options ?? {}),
  };

  const response = await fetch(url, options);
  const responseBody = await handleResponse(response);
  return responseBody;
};

export const deleteRequest = async <T = any>(
  url: string,
  body?: any,
  options?: RequestInit
): Promise<T> => {
  body = body ?? {};

  options = {
    method: 'DELETE',
    body: JSON.stringify(body),
    ...(options ?? {}),
  };

  const response = await fetch(url, options);
  const responseBody = await handleResponse(response);
  return responseBody;
};

export const putRequest = async <T = any>(
  url: string,
  body?: any,
  options?: RequestInit
): Promise<T> => {
  body = body ?? {};

  options = {
    method: 'PUT',
    body: JSON.stringify(body),
    ...(options ?? {}),
  };

  const response = await fetch(url, options);
  const responseBody = await handleResponse(response);
  return responseBody;
};

export const postRequest = async <T = any>(
  url: string,
  body?: any,
  options?: RequestInit
): Promise<T> => {
  body = body ?? {};

  options = {
    method: 'POST',
    body: JSON.stringify(body),
    ...(options ?? {}),
  };

  const response = await fetch(url, options);
  const responseBody = await handleResponse(response);
  return responseBody;
};

export const request = {
  get: getRequest,
  delete: deleteRequest,
  put: putRequest,
  postRequest,
};
