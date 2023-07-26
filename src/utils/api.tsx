import { notFound } from 'next/navigation';

export const getCategories = async () => {
  const categories = await fetch(`${process.env.SERVER_URL}/api/category`);

  return categories.json();
}

export const getProductBySlug = async (productSlug: string) => {
  const res = await fetch(`${process.env.SERVER_URL}/api/product/slug/${productSlug}`);

  if (!res.ok) {
    if (res.status == 404) {
      notFound();
    } else {
      throw new Error('Failed to fetch data');
    }
  }

  return res.json();
}

export const getProducts = async () => {
  let endpointUrl = `${process.env.SERVER_URL}/api/product`;

  const res = await fetch(endpointUrl);

  if (!res.ok) {
    if (res.status == 404) {
      notFound()
    } else {
      throw new Error('Failed to fetch data');
    }
  }

  return res.json();
}

export const getProductsByCategorySlug = async (slug: string) => {
  const endpointUrl = `${process.env.SERVER_URL}/api/product/category-slug/${slug}`;

  const res = await fetch(endpointUrl);

  if (!res.ok) {
    if (res.status == 404) {
      notFound();
    } else {
      throw new Error('Failed to fetch data');
    }
  }

  return res.json();
}
