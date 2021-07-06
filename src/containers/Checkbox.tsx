import { Input, Label } from 'reactstrap'

type Props = {
    id: string
    label: string
    value: boolean
    setValue: React.Dispatch<React.SetStateAction<boolean>>
    disabled?: boolean
}

const Checkbox: React.FC<Props> = ({ id, label, value, setValue, disabled }) => {
    return (
        <Label check>
            <Input
                type="checkbox"
                name={id}
                id={id}
                checked={value}
                onChange={() => {
                    setValue(!value)
                }}
                disabled={disabled}
            />
            {label}
        </Label>
    )
}

export default Checkbox
