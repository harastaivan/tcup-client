import { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { SubmitButton } from 'modules/form'
import { useTranslation } from 'react-i18next'

import Spinner from 'components/Spinner'
import DownloadIgc from './DownloadIgc'
import { getCompetitionDay } from 'utils/getCompetitionDay'
import { getCompetitionDays } from 'store/competitionDay/actions'
import { formatCompetitionDay } from 'utils/formatCompetitionDay'
import { addIgc, getIgcFormData } from 'store/igc/actions'

const SendIgc = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const competitionDays = useSelector((state) => state.competitionDay.competitionDays)
    const { pilots, loading } = useSelector((state) => state.igc)
    const { isAdmin } = useSelector((state) => state.auth)

    const [file, setFile] = useState('')
    const [pilot, setPilot] = useState('')
    const [today, setToday] = useState('')
    const [todayLoading, setTodayLoading] = useState(false)
    const [fileInputKey, setFileInputKey] = useState(Date.now())

    useEffect(() => {
        dispatch(getCompetitionDays())
        dispatch(getIgcFormData())
    }, [dispatch])

    useEffect(() => {
        setTodayLoading(true)
        const today = getCompetitionDay(competitionDays)
        setTodayLoading(false)
        if (!today) {
            return
        }

        setToday(today)
    }, [competitionDays])

    const onSubmit = (e) => {
        e.preventDefault()
        const igc = {
            igc: file,
            pilot,
            day: today._id,
        }
        dispatch(addIgc(igc))

        setFile(null)
        setFileInputKey(Date.now())
        setPilot('')
    }

    const submitDisabled = () => {
        return !file || !pilot || !today
    }

    return (
        <Fragment>
            <h2>{t('Odeslat IGC')}</h2>
            <Row>
                <Col md={6}>
                    {today && <p>{formatCompetitionDay(today, t)}</p>}
                    {!today && todayLoading && <Spinner />}
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for={'pilot'}>{t('Pilot')}</Label>
                            <Input
                                type={'select'}
                                name={'pilot'}
                                id={'pilot'}
                                value={pilot}
                                onChange={(e) => {
                                    setPilot(e.target.value)
                                }}
                                disabled={pilots.length === 0}>
                                <option value="">{t('Vyber pilota')}</option>
                                {pilots.map((pilot) => {
                                    return (
                                        <option key={pilot._id} value={pilot._id}>
                                            {`${pilot.startNumber} - ${pilot.name} ${pilot.surname}`}
                                        </option>
                                    )
                                })}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="file">{t('IGC soubor')}</Label>
                            <Input
                                key={fileInputKey}
                                type="file"
                                name="file"
                                id="file"
                                accept=".igc"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </FormGroup>
                        <SubmitButton loading={loading} disabled={submitDisabled()}>
                            {t('Nahrát')}
                        </SubmitButton>
                    </Form>
                </Col>
            </Row>
            {isAdmin && <DownloadIgc />}
        </Fragment>
    )
}

export default SendIgc
