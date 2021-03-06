import { atom, selectorFamily } from "recoil"

export const localStorageCache = atom({
    key: "usersCache",
    default: {}
})

export const stringifyData = (v) => JSON.stringify((() => {
    if (v instanceof Map) {
        return Array.from(v.entries())
    } if (v instanceof Set) {
        return Array.from(v)
    }
    return v
})())

export const cachedLocalStorageValue = selectorFamily({
    key: "userFamilySelector",
    get: (localStorageKey) => ({ get }) => {
        let val = get(localStorageCache)[localStorageKey]
        if (!val) {
            val = localStorage.getItem(localStorageKey)
            if (val) {
                val = JSON.parse(val)
            } else {
                val = undefined
            }
        }
        return val
    },
    set: (localStorageKey) => ({ set, get }, newValue) => {
        set(localStorageCache, { ...get(localStorageCache), [localStorageKey]: newValue })
    }
})
