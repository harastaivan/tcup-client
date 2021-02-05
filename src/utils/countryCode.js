const getCountryCode = (lng) => {
    switch (lng) {
        case 'cs':
            return 'cz'
        case 'en':
            return 'gb'
        default:
            return 'cz'
    }
}

export default getCountryCode
