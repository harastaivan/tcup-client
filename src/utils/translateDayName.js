export const translateDayName = (day, t) => {
    return day
        .split(' ')
        .map((s) => t(s))
        .join(' ');
};
