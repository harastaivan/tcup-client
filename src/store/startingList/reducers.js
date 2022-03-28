import { saveAs } from 'file-saver'

import { GET_STARTING_LIST, STARTING_LIST_LOADING, PAY_REGISTRATION, EXPORT_REGISTRATIONS } from 'actions/types'
import formatDate from 'utils/formatDate'

const initialState = {
    classes: [],
    loading: false,
}

const startingListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STARTING_LIST:
            return {
                ...state,
                classes: action.payload,
                loading: false,
            }
        case STARTING_LIST_LOADING:
            return {
                ...state,
                loading: true,
            }
        case PAY_REGISTRATION:
            return {
                ...state,
                classes: state.classes.map((one) => {
                    one.registrations = one.registrations.map((registration) => {
                        if (registration._id === action.payload.registrationId) {
                            registration.paid = action.payload.paid
                        }
                        return registration
                    })
                    return one
                }),
            }
        case EXPORT_REGISTRATIONS: {
            const data = new TextEncoder('utf-8').encode(action.payload.data)
            const filename = `export-${formatDate()}.csv`
            saveAs(new Blob([data], { type: action.payload.headers['content-type'] }), filename, {
                autoBom: true,
            })
            return state
        }
        default:
            return state
    }
}

export default startingListReducer
