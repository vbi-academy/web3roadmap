type HttpOptionsType = RequestInit | { headers: Record<string, any> };

type AppResponse = Record<string, any>;

export type FetchError = {
  status: number;
  message: string;
};

export type AppError = {
  status: number;
  message: string;
  errors?: { message: string; location: string }[];
};

type ApiReturn<ResponseType, ErrorType> = {
  response?: ResponseType;
  error?: ErrorType | FetchError;
};

export async function httpCall<
  ResponseType = AppResponse,
  ErrorType = AppError
>(
  url: string,
  options?: HttpOptionsType
): Promise<ApiReturn<ResponseType, ErrorType>> {
  let statusCode: number = 0;
  try {
    const response = await fetch(url, {
      credentials: "include",
      ...options,
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(options?.headers ?? {}),
      }),
    });
    statusCode = response.status;

    // @ts-ignore
    const doesAcceptHtml = options?.headers?.["Accept"] === "text/html";

    const data = doesAcceptHtml ? await response.text() : await response.json();

    if (response.ok) {
      return {
        response: data as ResponseType,
        error: undefined,
      };
    }

    if (data.status === 403) {
      // window.location.href = '/account'; // @fixme redirect option should be configurable
      return { response: undefined, error: data as ErrorType };
    }

    return {
      response: undefined,
      error: data as ErrorType,
    };
  } catch (error: any) {
    return {
      response: undefined,
      error: {
        status: statusCode,
        message: error.message,
      },
    };
  }
}

export async function httpGet<ResponseType = AppResponse, ErrorType = AppError>(
  url: string,
  queryParams?: Record<string, any>,
  options?: HttpOptionsType
): Promise<ApiReturn<ResponseType, ErrorType>> {
  const searchParams = new URLSearchParams(queryParams).toString();
  const queryUrl = searchParams ? `${url}?${searchParams}` : url;

  return httpCall<ResponseType, ErrorType>(queryUrl, {
    credentials: "include",
    method: "GET",
    ...options,
  });
}
