import { useState } from 'react'
import type { StartingListByClass } from '../types'

const options = [
    {
        label: 'všechny registrace',
        color: 'primary',
    },
    {
        label: 'dokončené',
        color: 'success',
        filter: true,
    },
    {
        label: 'nedokončené',
        color: 'danger',
        filter: false,
    },
]

export const useRegistrationCompletedFilter = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const filterRegistrations = (competitionClass: StartingListByClass) => {
        const { filter } = options[activeIndex]
        if (filter === undefined) {
            return competitionClass
        }

        return {
            ...competitionClass,
            registrations: competitionClass.registrations.filter(
                ({ registrationCompleted }) => registrationCompleted === filter
            ),
        }
    }

    return {
        filterRegistrations,
        buttons: options.map(({ label, color }, index) => ({
            label,
            color,
            isActive: index === activeIndex,
            onClick: () => setActiveIndex(index),
        })),
    }
}
