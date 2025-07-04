import moment from 'moment'
import { getConfig } from './domainConfig'

export const API_ENDPOINT = getConfig().apiEndpoint
export const TEST_MODE = false
export const SOARING_SPOT_URL = getConfig().soaringSpotUrl
export const SPINNER_TIMEOUT = 500

export const APP_TITLE = getConfig().title
export const APP_VERSION = process.env.REACT_APP_VERSION
export const SIGNUP_DISABLED = moment(getConfig().competition.signupSince).isAfter(moment())
