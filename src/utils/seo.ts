const BASE_URL = 'https://autom8ionlab.com';

export const getCanonicalUrl = (path: string): string => {
  const cleanPath = path.replace(/\/+$/, '');
  return cleanPath === '' ? `${BASE_URL}/` : `${BASE_URL}${cleanPath}`;
};

export const getOgImageUrl = (path: string): string => {
  return `${BASE_URL}${path}`;
};

export const buildJsonLd = (data: Record<string, unknown>): string => {
  return JSON.stringify(data);
};
