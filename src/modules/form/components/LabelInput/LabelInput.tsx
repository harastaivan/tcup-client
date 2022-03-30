import type { ReactNode } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'
import { Label, Input, FormFeedback, FormGroup } from 'reactstrap'
import type { InputType } from 'reactstrap/es/Input'

export interface LabelInputProps<T> extends UseControllerProps<T> {
    label: string
    type?: InputType
    children?: ReactNode
    required?: boolean
    disabled?: boolean
}

export const LabelInput = <FieldValues extends {}>({
    label,
    type = 'text',
    required = false,
    disabled = false,
    children = null,
    ...props
}: LabelInputProps<FieldValues>) => {
    const {
        field: { onChange, onBlur, name, value, ref },
        fieldState: { error },
    } = useController<FieldValues>({ ...props, rules: { ...props.rules, required } })

    const id = name
    const showInvalid = Boolean(error?.message)

    return (
        <FormGroup style={{ width: '100%' }}>
            <Label for={id}>{label}</Label>
            <Input
                id={id}
                label={label}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                type={type}
                value={value as string}
                ref={ref}
                invalid={showInvalid}
                disabled={disabled}
                children={children}
            />
            {showInvalid && <FormFeedback>{error?.message}</FormFeedback>}
        </FormGroup>
    )
}
