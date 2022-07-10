export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || ''
export const TEST_MODE = process.env.REACT_APP_TEST_MODE === 'true'
export const SOARING_SPOT_URL = 'https://www.soaringspot.com/en_gb/t-cup-2022-touzim-2022/results'
export const SPINNER_TIMEOUT =
    process.env.REACT_APP_SPINNER_TIMEOUT !== undefined ? Number(process.env.REACT_APP_SPINNER_TIMEOUT) : 500

export const APP_TITLE = process.env.REACT_APP_TITLE
export const APP_VERSION = process.env.REACT_APP_VERSION
export const SIGNUP_DISABLED = false
