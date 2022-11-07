import { useCallback, useState } from 'react'
import { setItem, getItem } from 'utils/localStorage.js'

export const useLocalStorage = (key: string, defaultValue: any = []) => {
  const [state, setState] = useState(() => getItem(key, defaultValue))

  const setValue = useCallback(
    (value: any) => {
      setItem(key, value)
      setState(() => value)
    },
    [key]
  )

  return [state, setValue]
}

export default useLocalStorage
