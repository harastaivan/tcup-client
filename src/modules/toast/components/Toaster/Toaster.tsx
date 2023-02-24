import { ToastBar, Toaster as HotToaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import type { TKey } from 'translations'

export const Toaster = () => {
    const { t } = useTranslation()

    return (
        <HotToaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                // Define default options
                className: '',
                duration: 5000,
                style: {
                    background: '#363636',
                    color: '#fff',
                },
                // Default options for specific types
                success: {
                    duration: 3000,
                    // @ts-expect-error
                    theme: {
                        primary: 'green',
                        secondary: 'black',
                    },
                    className: 'toast-success',
                },
                error: {
                    className: 'toast-error',
                },
            }}>
            {(toast) => {
                toast.message = t(toast.message as TKey)
                return <ToastBar toast={toast} />
            }}
        </HotToaster>
    )
}
