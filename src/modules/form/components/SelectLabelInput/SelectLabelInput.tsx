import { LabelInput, LabelInputProps } from '../LabelInput'

interface BaseSelect {
    _id: string
}

interface SelectLabelInputProps<S, T> extends LabelInputProps<T> {
    selectData: S[]
    translate: (s: S) => string
}

export const SelectLabelInput = <Select extends BaseSelect, FieldValues extends {}>({
    selectData,
    translate,
    ...props
}: SelectLabelInputProps<Select, FieldValues>) => {
    return (
        <LabelInput {...props}>
            <>
                <option value="">{props.label}</option>
                {selectData.map((data) => (
                    <option key={data._id} value={data._id}>
                        {translate(data)}
                    </option>
                ))}
            </>
        </LabelInput>
    )
}
