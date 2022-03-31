import {
    ADD_IGC,
    GET_IGC_FORM_DATA,
    ADD_IGC_SUCCESS,
    ADD_IGC_ERROR,
    GET_IGC_FILES,
    RESET_IGC_FILES,
    UPDATE_IGC_FILE,
} from 'actions/types'

const initialState = {
    pilots: [],
    files: [],
    loading: false,
}

const igcReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IGC:
            return {
                ...state,
                loading: true,
            }
        case ADD_IGC_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case ADD_IGC_ERROR:
            return {
                ...state,
                loading: false,
            }
        case GET_IGC_FORM_DATA:
            return {
                ...state,
                pilots: action.payload,
            }
        case GET_IGC_FILES:
            return {
                ...state,
                files: action.payload,
            }
        case RESET_IGC_FILES:
            return {
                ...state,
                files: [],
            }
        case UPDATE_IGC_FILE:
            return {
                ...state,
                files: state.files.map((compClass) => ({
                    ...compClass,
                    igcFiles: compClass.igcFiles.map((igcFile) =>
                        igcFile._id === action.payload._id
                            ? {
                                  ...igcFile,
                                  downloaded: action.payload.downloaded,
                                  processed: action.payload.processed,
                                  updatedAt: action.payload.updatedAt,
                              }
                            : igcFile
                    ),
                })),
            }
        default:
            return state
    }
}

export default igcReducer
