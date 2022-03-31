import axios, { AxiosError } from 'axios'
import type { ThunkAction } from 'redux-thunk'

import { API_ENDPOINT } from 'config/constants'
import { tokenConfig } from '../auth/actions'
import { toast } from 'modules/toast'
import type { AppState } from 'store/types'
import type { News, NewsId } from './types'

export enum newsActionTypes {
    GET_NEWS = 'GET_NEWS',
    ADD_NEWS = 'ADD_NEWS',
    DELETE_NEWS = 'DELETE_NEWS',
    NEWS_LOADING = 'NEWS_LOADING',
}

export type GetNewsAction = {
    type: newsActionTypes.GET_NEWS
    payload: News[]
}

export type AddNewsAction = {
    type: newsActionTypes.ADD_NEWS
    payload: {
        news: News
    }
}

export type DeleteNewsAction = {
    type: newsActionTypes.DELETE_NEWS
    payload: NewsId
}

export type NewsLoadingAction = {
    type: newsActionTypes.NEWS_LOADING
}

export type NewsAction = GetNewsAction | AddNewsAction | DeleteNewsAction | NewsLoadingAction

export const getNews = (): ThunkAction<void, AppState, null, GetNewsAction> => async (dispatch) => {
    dispatch(setNewsLoading)
    const res = await axios.get(`${API_ENDPOINT}/api/news`)
    dispatch({
        type: newsActionTypes.GET_NEWS,
        payload: res.data,
    })
}

export const addNews = (news: News): ThunkAction<void, AppState, null, AddNewsAction> => async (dispatch, getState) => {
    try {
        const res = await axios.post(`${API_ENDPOINT}/api/news`, news, tokenConfig(getState))
        dispatch({
            type: newsActionTypes.ADD_NEWS,
            payload: res.data,
        })
    } catch (err) {
        toast.apiError(err as AxiosError)
    }
}

export const deleteNews = (id: NewsId): ThunkAction<void, AppState, null, DeleteNewsAction> => async (
    dispatch,
    getState
) => {
    try {
        await axios.delete(`${API_ENDPOINT}/api/news/${id}`, tokenConfig(getState))
        dispatch({
            type: newsActionTypes.DELETE_NEWS,
            payload: id,
        })
    } catch (err) {
        toast.apiError(err as AxiosError)
    }
}

export const setNewsLoading = (): NewsLoadingAction => {
    return {
        type: newsActionTypes.NEWS_LOADING,
    }
}
