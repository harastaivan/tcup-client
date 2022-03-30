import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import {
    useGetFormDataQuery,
    useGetRegistrationAsAdminQuery,
    useUpdateRegistrationAsAdminMutation,
} from 'modules/registration/services/api'
import Spinner from 'components/Spinner'
import { transformAdminFormValuesToRequest } from 'modules/registration/utils/transform'

import { RegistrationFormAsAdminForm } from './RegistrationFormAsAdminForm'
import type { AdminFormValues } from './FormFields'

export const RegistrationFormAsAdmin = () => {
    const { data: formData, isLoading: isFormDataLoading } = useGetFormDataQuery()
    const { t } = useTranslation()

    const { registrationId } = useParams<{ registrationId: string }>()
    const { data: registrationData, isLoading: isRegistrationLoading } = useGetRegistrationAsAdminQuery({
        id: registrationId,
    })

    const [updateRegistrationAsAdmin] = useUpdateRegistrationAsAdminMutation()

    const submitData = async (data: AdminFormValues) => {
        const body = transformAdminFormValuesToRequest(data)

        console.log(body)
        await updateRegistrationAsAdmin({ id: registrationId, body })
    }

    const loading = isFormDataLoading || isRegistrationLoading

    return (
        <>
            <h1>{t('registration.admin.title')}</h1>
            {loading && <Spinner />}
            {!loading && formData && registrationData && (
                <RegistrationFormAsAdminForm
                    defaultValues={registrationData}
                    selectData={formData}
                    submitData={submitData}
                />
            )}
        </>
    )
}
