export enum Domain {
    TCUP_2025 = 'tcup.cz',
    TCUP_2024 = '2024.tcup.cz',
    TCUP_2023 = '2023.tcup.cz',
    TCUP_2022 = '2022.tcup.cz',
    TCUP_2021 = '2021.tcup.cz',
    TCUP_2020 = '2020.tcup.cz',
}

export const domain = Object.values(Domain).find((d) => document.location.hostname === d) ?? Domain.TCUP_2025

console.log(domain)

export const config: Record<Domain, { title: string; apiEndpoint: string; soaringSpotUrl: string }> = {
    [Domain.TCUP_2025]: {
        title: 'tcup 2025',
        apiEndpoint: 'https://api.2025.tcup.cz',
        soaringSpotUrl: 'https://www.soaringspot.com/en_gb/tcup2025/results',
    },
    [Domain.TCUP_2024]: {
        title: 'tcup 2024',
        apiEndpoint: 'https://api.2024.tcup.cz',
        soaringSpotUrl: 'https://www.soaringspot.com/en_gb/tcup2024/results',
    },
    [Domain.TCUP_2023]: {
        title: 'tcup 2023',
        apiEndpoint: 'https://api.2023.tcup.cz',
        soaringSpotUrl: 'https://www.soaringspot.com/en_gb/tcup2023/results',
    },
    [Domain.TCUP_2022]: {
        title: 'tcup 2022',
        apiEndpoint: 'https://api.2022.tcup.cz',
        soaringSpotUrl: 'https://www.soaringspot.com/en_gb/t-cup-2022-touzim-2022/results',
    },
    [Domain.TCUP_2021]: {
        title: 'tcup 2021',
        apiEndpoint: 'https://api.2021.tcup.cz',
        soaringSpotUrl: 'https://www.soaringspot.com/en_gb/tcup2021/results',
    },
    [Domain.TCUP_2020]: {
        title: 'tcup 2020',
        apiEndpoint: 'https://api.2020.tcup.cz',
        soaringSpotUrl: 'https://www.soaringspot.com/en_gb/tcup2020/results',
    },
}

export const getConfig = () => config[domain]
