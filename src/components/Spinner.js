import React from 'react';
import { Spinner as RSSpinner } from 'reactstrap';
import PropTypes from 'prop-types';

export default function Spinner({ withoutMargin }) {
    return <RSSpinner type="grow" color="secondary" className={withoutMargin ? '' : 'm-3'} />;
}

Spinner.propTypes = {
    withoutMargin: PropTypes.bool
};
