import type { AxiosError } from 'axios'
import { toast as hotToast, Toast } from 'react-hot-toast'
import type { TKey } from 'translations'
import { parseError } from './parseError'

type Options = Partial<
    Pick<Toast, 'id' | 'icon' | 'duration' | 'ariaProps' | 'className' | 'style' | 'position' | 'iconTheme'>
>

const toast = (message: TKey, options?: Options) => hotToast(message, options)
toast.success = (message: TKey, options?: Options) => hotToast.success(message, options)
toast.error = (message: TKey, options?: Options) => hotToast.error(message, options)

toast.apiError = (error: AxiosError) => {
    const { msg } = parseError(error)

    return toast.error(msg as TKey)
}

export { toast }
