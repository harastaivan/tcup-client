import type { FieldValues } from 'react-hook-form'
import { LabelInput, LabelInputProps } from '../LabelInput'

interface BaseSelect {
    _id: string
}

interface SelectLabelInputProps<S, T extends FieldValues> extends LabelInputProps<T> {
    selectData: S[]
    translate: (s: S) => string
    emptyLabel?: string
}

export const SelectLabelInput = <Select extends BaseSelect, FieldValues extends {}>({
    selectData,
    translate,
    emptyLabel,
    ...props
}: SelectLabelInputProps<Select, FieldValues>) => {
    return (
        <LabelInput {...props}>
            <>
                <option value="">{emptyLabel || props.label}</option>
                {selectData.map((data) => (
                    <option key={data._id} value={data._id}>
                        {translate(data)}
                    </option>
                ))}
            </>
        </LabelInput>
    )
}
