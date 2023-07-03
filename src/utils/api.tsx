export const getCategories = async () => {
  const categories = await fetch(`${process.env.SERVER_URL}/api/category`)

  return categories.json()
}

export const getProducts = async (categorySlug: string = '') => {
  let endpointUrl = `${process.env.SERVER_URL}/api/product`;

  if (categorySlug) {
    endpointUrl = endpointUrl + `?categorySlug=${categorySlug}`
  }

  const products = await fetch(endpointUrl)

  return products.json()
}
