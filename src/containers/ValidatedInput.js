import React, { useState, Fragment } from 'react';
import { Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import isEmpty from '../utils/isEmpty';

export const TRANSLATED = 'TRANSLATED';
export const GLIDER_TYPE = 'GLIDER_TYPE';

export default function ValidatedInput(props) {
    const { t } = useTranslation();

    const [valid, setValid] = useState(false);
    const [visited, setVisited] = useState(false);

    const isValid = (value) => {
        if (!props.required) {
            return true;
        }
        return !isEmpty(value);
    };

    const getSelectData = (type, data) => {
        switch (type) {
            case TRANSLATED:
                return t(data.name);
            case GLIDER_TYPE:
                return `${data.name} (${data.index})`;
            default:
                return data.name;
        }
    };

    const id = props.id || props.name;
    const placeholder = props.placeholder || props.label;

    return (
        <div>
            <Label for={id}>{props.label}</Label>
            <Input
                type={props.type}
                name={props.name}
                id={id}
                placeholder={placeholder}
                value={props.value}
                onChange={(e) => {
                    setValid(isValid(e.target.value));
                    setVisited(true);
                    props.setValue(e.target.value);
                }}
                disabled={props.disabled}
                required={props.required}
                onBlur={() => {
                    setValid(isValid(props.value));
                    setVisited(true);
                }}
                // valid={valid && visited}
                invalid={!valid && visited}
            >
                {props.select && (
                    <Fragment>
                        <option value="">{placeholder}</option>
                        {props.selectData.map((one) => {
                            return (
                                <option key={one._id} value={one._id}>
                                    {getSelectData(props.selectDataType, one)}
                                </option>
                            );
                        })}
                    </Fragment>
                )}
            </Input>
        </div>
    );
}

ValidatedInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired,
    select: PropTypes.bool,
    selectData: PropTypes.array,
    selectDataType: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool
};
