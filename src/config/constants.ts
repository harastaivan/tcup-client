export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || ''
export const TEST_MODE = process.env.REACT_APP_TEST_MODE === 'true'
export const SOARING_SPOT_URL = process.env.REACT_APP_SOARING_SPOT_URL
export const SPINNER_TIMEOUT =
    process.env.REACT_APP_SPINNER_TIMEOUT !== undefined ? Number(process.env.REACT_APP_SPINNER_TIMEOUT) : 2000

export const APP_TITLE = process.env.REACT_APP_TITLE
export const SIGNUP_DISABLED = true
