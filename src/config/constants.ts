export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || ''
export const TEST_MODE = process.env.REACT_APP_TEST_MODE === 'true'
export const SOARING_SPOT_URL = process.env.REACT_APP_SOARING_SPOT_URL
export const APP_TITLE = process.env.REACT_APP_TITLE
export const SIGNUP_DISABLED =
    process.env.REACT_APP_SIGNUP_DISABLED !== undefined ? JSON.parse(process.env.REACT_APP_SIGNUP_DISABLED) : true
