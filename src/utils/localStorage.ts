export const setItem = (key: string, data: any): void => {
  window.localStorage.setItem(key, JSON.stringify(data))
}

export const getItem = (key: string, defaultValue: any = []): any => {
  const data = window.localStorage.getItem(key)

  if (data === null) {
    return defaultValue
  }

  try {
    return JSON.parse(data)
  } catch (_) {
    return defaultValue
  }
}

export const removeItem = (key: string): void => {
  window.localStorage.removeItem(key)
}

export const LocalStorage = (
  key: string
): { set: Function; get: Function; remove: Function } => ({
  set: setItem.bind(this, key),
  get: getItem.bind(this, key),
  remove: removeItem.bind(this, key),
})

export default LocalStorage
