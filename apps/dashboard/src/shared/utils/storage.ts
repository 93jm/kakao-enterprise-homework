const isBrowser = (): boolean => {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

export const setStorageItem = (key: string, value: unknown): void => {
  try {
    if (!isBrowser()) {
      return
    }

    const stringValue = typeof value === 'object' ? JSON.stringify(value) : String(value)
    window.localStorage.setItem(key, stringValue)
  } catch (error) {
    console.error('Storage setItem failed:', error)
  }
}

export const getStorageItem = <T>(key: string, defaultValue?: T): T | null => {
  try {
    if (!isBrowser()) {
      return defaultValue || null
    }

    const item = window.localStorage.getItem(key)
    if (item === null) {
      return defaultValue || null
    }

    try {
      return JSON.parse(item)
    } catch {
      return item as unknown as T
    }
  } catch (error) {
    console.error('Storage getItem failed:', error)
    return defaultValue || null
  }
}

export const storage = {
  setItem: setStorageItem,
  getItem: getStorageItem
} as const
