import {notFound} from "next/navigation";

export const getCategories = async () => {
  const categories = await fetch(`${process.env.SERVER_URL}/api/category`)

  return categories.json()
}

export const getProducts = async (categorySlug: string = '') => {
  let endpointUrl = `${process.env.SERVER_URL}/api/product`;

  if (categorySlug) {
    endpointUrl = endpointUrl + `?categorySlug=${categorySlug}`
  }

  const res = await fetch(endpointUrl)

  console.log(res.status)

  if (!res.ok) {
    if (res.status == 404) {
      notFound()
    } else {
      throw new Error('Failed to fetch data');
    }
  }

  return res.json()
}
