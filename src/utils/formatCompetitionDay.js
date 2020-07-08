import moment from 'moment';

import { translateDayName } from './translateDayName';

export const formatCompetitionDay = (day, t) => {
    return `${translateDayName(day.name, t)} - ${moment(day.date).format('DD. MM. YYYY')}`;
};
