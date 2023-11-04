

const BASE_URL = ""

let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
    accessToken = token;
};

export const ApiClient = {
    GetApi: async <T>(endpoint: string, queryParams?: Record<string, string>): Promise<T> => {
        const url = buildUrl(endpoint, queryParams);
        const response = await fetch(url, {
            method: 'GET',
            headers: getHeaders(),
        });
        return handleResponse<T>(response);
    },

    PostApi: async <T>(endpoint: string, data: any): Promise<T> => {
        const response = await fetch(buildUrl(endpoint), {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(data),
        });
        return handleResponse<T>(response);
    },

    PutApi: async <T>(endpoint: string, data: any): Promise<T> => {
        const response = await fetch(buildUrl(endpoint), {
            method: 'PUT',
            headers: getHeaders(),
            body: JSON.stringify(data),
        });
        return handleResponse<T>(response);
    },

    DeleteApi: async (endpoint: string): Promise<void> => {
        const response = await fetch(buildUrl(endpoint), {
            method: 'DELETE',
            headers: getHeaders(),
        });
        if (response.status === 204) {
            return;
        } else {
            throw new Error(`Failed to delete resource at ${endpoint}`);
        }
    },
};

const buildUrl = (endpoint: string, queryParams?: Record<string, string>): string => {
    let url = `${BASE_URL}${endpoint}`;
    if (queryParams) {
        const queryString = Object.keys(queryParams)
            .map((key) => `${key}=${queryParams[key]}`)
            .join('&');
        url += `?${queryString}`;
    }
    console.log("Making request to :", url);
    return url;
};

const getHeaders = (): HeadersInit_ => {
    const headers: HeadersInit_ = {
        'Content-Type': 'application/json',
    };

    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return headers;
};

const handleResponse = async <T>(response: Response): Promise<T> => {
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return response.json();
    }
    return response.text() as T;
};