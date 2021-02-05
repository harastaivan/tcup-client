import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, FormGroup, Button, Input, Label } from 'reactstrap'

import { addNews } from '../actions/news'
import { useTranslation } from 'react-i18next'

const AddNews = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [email, setEmail] = useState(false)

    const isAdmin = useSelector((state) => state.auth.isAdmin)
    const dispatch = useDispatch()

    const { t } = useTranslation()

    const onSubmit = (e) => {
        e.preventDefault()
        const newNews = {
            title,
            body,
            email,
        }

        dispatch(addNews(newNews))

        setTitle('')
        setBody('')
        setEmail(false)
    }

    return (
        <Fragment>
            {isAdmin ? (
                <Fragment>
                    <h2>{t('Přidat novinku')}</h2>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                placeholder={t('Nadpis')}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                name="body"
                                id="body"
                                value={body}
                                placeholder={t('Novinka')}
                                onChange={(e) => setBody(e.target.value)}
                                style={{ height: '150px' }}
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="checkbox"
                                    name="email"
                                    id="email"
                                    checked={email}
                                    onChange={() => {
                                        setEmail(!email)
                                    }}
                                />
                                {t('Notifikovat emailem')}
                            </Label>
                        </FormGroup>
                        <Button color="dark" style={{ marginTop: '2rem' }} disabled={!title || !body} block>
                            {t('Přidat novinku')}
                        </Button>
                    </Form>
                </Fragment>
            ) : null}
        </Fragment>
    )
}

export default AddNews
