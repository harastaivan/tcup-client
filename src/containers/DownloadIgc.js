import React, { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, FormGroup, Label, Input, Button, Row, Col, Table } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import Moment from 'react-moment'

import { getCompetitionDay } from 'utils/getCompetitionDay'
import { getCompetitionDays } from 'store/competitionDay/actions'
import { formatCompetitionDay } from 'utils/formatCompetitionDay'
import { getIgcFiles, resetIgcFiles, updateIgcFile } from 'store/igc/actions'

const DownloadIgc = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const competitionDays = useSelector((state) => state.competitionDay.competitionDaysUntilToday)
    const { files } = useSelector((state) => state.igc)

    const [day, setDay] = useState('')

    useEffect(() => {
        dispatch(getCompetitionDays())
    }, [dispatch])

    useEffect(() => {
        const today = getCompetitionDay(competitionDays)
        if (!today) {
            return
        }
        setDay(today._id)
    }, [competitionDays])

    useEffect(() => {
        if (!day) {
            return
        }
        dispatch(resetIgcFiles())
        dispatch(getIgcFiles(day))
    }, [dispatch, day])

    return (
        <div style={{ marginTop: '2rem' }}>
            <h3>{t('Stáhnout IGC')}</h3>
            <Form>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={'competitionDay'}>{t('Vyber den')}</Label>
                            <Input
                                type={'select'}
                                name={'competitionDay'}
                                id={'competitionDay'}
                                value={day}
                                onChange={(e) => {
                                    setDay(e.target.value)
                                }}
                                disabled={competitionDays.length === 0}>
                                <option value="">{t('Vyber den')}</option>
                                {competitionDays.map((day) => {
                                    return (
                                        <option key={day._id} value={day._id}>
                                            {formatCompetitionDay(day, t)}
                                        </option>
                                    )
                                })}
                            </Input>
                        </FormGroup>
                        <Button
                            onClick={() => {
                                dispatch(resetIgcFiles())
                                dispatch(getIgcFiles(day))
                            }}
                            color={'primary'}
                            className="mb-3"
                            size="md"
                            disabled={!day}>
                            {t('obnovit')}
                        </Button>
                    </Col>
                </Row>
            </Form>
            {files.map((compClass) => (
                <Fragment key={compClass._id}>
                    <h4>{t(compClass.name)}</h4>
                    <Table striped responsive>
                        <thead>
                            <tr>
                                <th>{t('jméno')}</th>
                                <th>{t('příjmení')}</th>
                                <th>{t('startovní číslo')}</th>
                                <th>{t('igc')}</th>
                                <th>{t('nahráno')}</th>
                                <th>{t('upraveno')}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {compClass.igcFiles.map((igcFile) => (
                                <tr key={igcFile._id}>
                                    <td>{igcFile.user.name}</td>
                                    <td>{igcFile.user.surname}</td>
                                    <td>{igcFile.startNumber}</td>
                                    <td>
                                        <a href={igcFile.path}>{igcFile.name}</a>
                                    </td>
                                    <td>
                                        <Moment format={'DD. MM. HH:mm'} locale="cs">
                                            {igcFile.createdAt}
                                        </Moment>
                                    </td>
                                    <td>
                                        <Moment format={'HH:mm'} locale="cs">
                                            {igcFile.updatedAt}
                                        </Moment>
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() => {
                                                igcFile.downloaded = !igcFile.downloaded
                                                dispatch(updateIgcFile(igcFile))
                                            }}
                                            color={igcFile.downloaded ? 'success' : 'danger'}
                                            className="mb-1"
                                            size="sm">
                                            {t('staženo')}
                                        </Button>{' '}
                                        <Button
                                            onClick={() => {
                                                igcFile.processed = !igcFile.processed
                                                dispatch(updateIgcFile(igcFile))
                                            }}
                                            color={igcFile.processed ? 'success' : 'danger'}
                                            className="mb-1"
                                            size="sm">
                                            {t('zpracováno')}
                                        </Button>{' '}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Fragment>
            ))}
        </div>
    )
}

export default DownloadIgc
