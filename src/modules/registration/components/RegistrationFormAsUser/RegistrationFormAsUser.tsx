import { useTranslation } from 'react-i18next'
import {
    useCreateRegistrationMutation,
    useGetFormDataQuery,
    useGetRegistrationQuery,
    useUpdateRegistrationMutation,
} from 'modules/registration/services/api'
import { Spinner } from 'modules/ui'
import { transformFormValuesToRequest } from 'modules/registration/utils/transform'
import type { User } from 'store/auth/types'

import { RegistrationFormAsUserForm } from './RegistrationFormAsUserForm'
import type { FormValues } from './FormFields'

interface RegistrationFormAsUserProps {
    user: User
}

export const RegistrationFormAsUser = ({ user }: RegistrationFormAsUserProps) => {
    const { data: formData, isLoading: isFormDataLoading } = useGetFormDataQuery()
    const { t } = useTranslation()

    const { data: registrationData, isLoading: isRegistrationLoading } = useGetRegistrationQuery()

    const [updateRegistration] = useUpdateRegistrationMutation()
    const [createRegistration] = useCreateRegistrationMutation()

    const submitData = async (data: FormValues) => {
        const body = transformFormValuesToRequest(data)
        if (registrationData?._id) {
            await updateRegistration({ body })
            return
        }

        await createRegistration({ body })
    }

    const loading = isFormDataLoading || isRegistrationLoading

    return (
        <>
            <h1 data-testid="registration-as-user-title">{t('registration.title')}</h1>
            {loading && <Spinner />}
            {!loading && user && formData && (
                <RegistrationFormAsUserForm
                    defaultValues={{ hasEngine: false, ...user, ...registrationData }}
                    selectData={formData}
                    submitData={submitData}
                />
            )}
        </>
    )
}
