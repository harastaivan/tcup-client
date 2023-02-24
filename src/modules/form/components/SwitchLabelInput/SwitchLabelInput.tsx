import type { ReactNode } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { Label, Input, FormFeedback, FormGroup } from 'reactstrap'
import type { InputType } from 'reactstrap/es/Input'

export interface SwitchLabelInputProps<T extends FieldValues> extends UseControllerProps<T> {
    label: string
    type?: InputType
    children?: ReactNode
    required?: boolean
    disabled?: boolean
}

export const SwitchLabelInput = <FieldValues extends {}>({
    label,
    type = 'text',
    required = false,
    disabled = false,
    children = null,
    ...props
}: SwitchLabelInputProps<FieldValues>) => {
    const {
        field: { onChange, name, value },
        fieldState: { error },
    } = useController<FieldValues>({ ...props, rules: { ...props.rules, required } })

    const id = name
    const showInvalid = Boolean(error?.message)

    return (
        <FormGroup style={{ width: '100%', marginLeft: '1.5em' }}>
            <Label for={id} check>
                <Input
                    type="checkbox"
                    name={name}
                    id={id}
                    checked={value as boolean}
                    onChange={onChange}
                    disabled={disabled}
                />
                {label}
            </Label>
            {showInvalid && <FormFeedback>{error?.message}</FormFeedback>}
        </FormGroup>
    )
}
