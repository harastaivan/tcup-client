export enum Domain {
    TCUP_2025 = 'tcup.cz',
    TCUP_2024 = '2024.tcup.cz',
    TCUP_2023 = '2023.tcup.cz',
    TCUP_2022 = '2022.tcup.cz',
    TCUP_2021 = '2021.tcup.cz',
    TCUP_2020 = '2020.tcup.cz',
}

export const domain = Object.values(Domain).find((d) => document.location.hostname === d) ?? Domain.TCUP_2025

export const isLatestYear = domain === Domain.TCUP_2025

console.log(domain)

interface DomainConfig {
    title: string
    apiEndpoint: string
    soaringSpotUrl: string
    competition: {
        from: string
        to: string
        signupSince: string
    }
}

export const config: Record<Domain, DomainConfig> = {
    [Domain.TCUP_2025]: {
        title: 'tcup 2025',
        apiEndpoint: 'https://api.2025.tcup.cz',
        soaringSpotUrl: 'https://www.soaringspot.com/en_gb/tcup2025/results',
        competition: {
            from: '2025-07-12',
            to: '2025-07-20',
            signupSince: '2025-03-01T12:00:00+01:00',
        },
    },
    [Domain.TCUP_2024]: {
        title: 'tcup 2024',
        apiEndpoint: 'https://api.2024.tcup.cz',
        soaringSpotUrl: 'https://www.soaringspot.com/en_gb/tcup2024/results',
        competition: {
            from: '2024-07-05',
            to: '2024-07-13',
            signupSince: '2024-03-01T12:00:00+01:00',
        },
    },
    [Domain.TCUP_2023]: {
        title: 'tcup 2023',
        apiEndpoint: 'https://api.2023.tcup.cz',
        soaringSpotUrl: 'https://www.soaringspot.com/en_gb/tcup2023/results',
        competition: {
            from: '2023-07-08',
            to: '2023-07-16',
            signupSince: '2023-03-01T12:00:00+01:00',
        },
    },
    [Domain.TCUP_2022]: {
        title: 'tcup 2022',
        apiEndpoint: 'https://api.2022.tcup.cz',
        soaringSpotUrl: 'https://www.soaringspot.com/en_gb/t-cup-2022-touzim-2022/results',
        competition: {
            from: '2022-07-09',
            to: '2022-07-17',
            signupSince: '2022-03-01T12:00:00+01:00',
        },
    },
    [Domain.TCUP_2021]: {
        title: 'tcup 2021',
        apiEndpoint: 'https://api.2021.tcup.cz',
        soaringSpotUrl: 'https://www.soaringspot.com/en_gb/tcup2021/results',
        competition: {
            from: '2021-07-10',
            to: '2021-07-18',
            signupSince: '2021-03-01T12:00:00+01:00',
        },
    },
    [Domain.TCUP_2020]: {
        title: 'tcup 2020',
        apiEndpoint: 'https://api.2020.tcup.cz',
        soaringSpotUrl: 'https://www.soaringspot.com/en_gb/tcup2020/results',
        competition: {
            from: '2020-07-11',
            to: '2020-07-19',
            signupSince: '2020-03-01T12:00:00+01:00',
        },
    },
}

export const getConfig = () => config[domain]
