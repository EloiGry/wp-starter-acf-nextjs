import qs from 'qs';

interface CustomParams {
  [key: string]: any;
}

export async function fetchAPI(
  path: string,
  slug: string,
  additionalFields: string[] = [],
  customParams: CustomParams = {},
  useSlugInPath: boolean = false // Nouveau paramètre
): Promise<any> {
  // Construction de l'URL de base
  let baseUrl = `http://localhost:8881/wp-json/${path}`;

  // Ajustement de l'URL en fonction de useSlugInPath
  if (useSlugInPath) {
    baseUrl = `${baseUrl}/${slug}`;
  }

  // Gestion des champs supplémentaires et des paramètres personnalisés
  const defaultFields = ['title', 'slug'];
  const fields = [...defaultFields, ...additionalFields];

  const queryParams = useSlugInPath
    ? { _fields: fields.join(','), ...customParams }
    : { slug, acf_format: 'standard', _fields: fields.join(','), ...customParams };

  // Construction de la query string
  const queryString = qs.stringify(queryParams, { encode: true });

  // Construction de l'URL finale
  const url = `${baseUrl}?${queryString}`;

  const mergedOptions = {
    next: { revalidate: 10 },
    headers: {
      "Content-Type": "application/json",
    },
  }

  try {
    const response = await fetch(url, mergedOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
}