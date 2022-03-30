import { useCallback } from 'react'
import type { ObjectSchema } from 'yup'

export const useYupValidationResolver = (validationSchema: ObjectSchema<{}>) =>
    useCallback(
        async (data) => {
            try {
                const values = await validationSchema.validate(data, {
                    abortEarly: false,
                })

                return {
                    values,
                    errors: {},
                }
            } catch (errors: any) {
                return {
                    values: {},
                    errors: errors.inner.reduce(
                        (allErrors: any, currentError: any) => ({
                            ...allErrors,
                            [currentError.path]: {
                                type: currentError.type ?? 'validation',
                                message: currentError.message,
                            },
                        }),
                        {}
                    ),
                }
            }
        },
        [validationSchema]
    )
