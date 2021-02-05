import moment from 'moment'

export const getCompetitionDay = (competitionDays, dayToFind = new Date()) => {
    const dates = competitionDays.map((d) => moment(d.date))

    const min = moment.min(dates)
    const max = moment.max(dates)
    const today = moment(dayToFind)

    if (today.isBefore(min)) {
        return competitionDays.find((d) => moment(d.date).isSame(min, 'day'))
    }

    if (today.isAfter(max)) {
        return competitionDays.find((d) => moment(d.date).isSame(max, 'day'))
    }

    return competitionDays.find((d) => moment(d.date).isSame(today, 'day'))
}

export const getCompetitionDaysUntilToday = (competitionDays, dayToFind = new Date()) => {
    const competitionDay = getCompetitionDay(competitionDays, dayToFind)
    if (!competitionDay) {
        return []
    }
    const today = moment(competitionDay.date)

    return competitionDays.filter((d) => moment(d.date).isBefore(today) || moment(d.date).isSame(today, 'day'))
}
