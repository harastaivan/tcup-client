import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap';

import { addDocument } from '../actions/document';
import { useTranslation } from 'react-i18next';

const AddDocument = () => {
    const [file, setFile] = useState(null);

    const isAdmin = useSelector((state) => state.auth.isAdmin);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const onSubmit = (e) => {
        e.preventDefault();
        const newDocument = {
            document: file
        };
        dispatch(addDocument(newDocument));
        setFile(null);
    };

    return (
        <Fragment>
            {isAdmin ? (
                <Fragment>
                    <h2>{t('Nahrát nový soubor')}</h2>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="file">Soubor</Label>
                            <Input type="file" name="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
                        </FormGroup>
                        <Button color="dark" style={{ marginTop: '2rem' }} disabled={!file} block>
                            {t('Nahrát')}
                        </Button>
                    </Form>
                </Fragment>
            ) : null}
        </Fragment>
    );
};

export default AddDocument;
