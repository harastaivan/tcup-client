export type Sponsor = {
    name: string
    image: string
    url?: string
}

const getSponsors = (): Sponsor[] => {
    return [
        {
            name: 'GRADIENT a.s.',
            image: 'assets/img/sponsors/gradient.jpeg',
            url: 'http://www.gradient.cc/',
        },
        {
            name: 'Národní sportovní agentura',
            image: 'assets/img/sponsors/nsa.png',
            url: 'https://agenturasport.cz/',
        },
        {
            name: 'BLAŽEJ JAROSLAV - výroba strojů a zařízení s.r.o.',
            image: 'assets/img/sponsors/jaroslav_blazej.png',
        },
    ]
}

export const useSponsors = (): Sponsor[] => {
    const sponsors = getSponsors()

    return sponsors
}
