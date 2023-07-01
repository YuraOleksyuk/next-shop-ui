export const loadFromLocalStorage = (key: string) => {
  try {
    if (typeof window === 'undefined') return
    const storageData: string | null = localStorage.getItem(key);

    if (storageData) {
      return JSON.parse(storageData)
    }
  } catch (err) {
    console.warn(err)
  }
}

export const saveToLocalStorage = (key: string, data: object) => {
  try {
    if (typeof window === 'undefined') return
    localStorage.setItem(key, JSON.stringify(data))
  } catch (err) {
    console.warn(err)
  }
}
