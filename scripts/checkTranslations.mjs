import { readFile } from 'fs/promises'
import { exit } from 'process'

const isObject = (x) => typeof x === 'object' && x !== null

const fail = (messages) => {
    for (const message of messages) {
        console.error(message)
    }
    exit(1)
}

const checkTranslation = (base, toCheck) => {
    const keys = Object.keys(toCheck)

    const errors = []

    for (const key of keys) {
        if (!base.hasOwnProperty(key)) {
            errors.push(`🐛 Missing key: ${key}`)
        }

        if (isObject(base[key]) && isObject(toCheck[key])) {
            return checkTranslation(base[key], toCheck[key])
        }

        if ((isObject(base[key]) && !isObject(toCheck[key])) || (!isObject(base[key]) && isObject(toCheck[key]))) {
            errors.push(`🐛 First value is object and second isn't`)
        }
    }

    if (errors.length) {
        fail(['🚨 Keys are not the same.', ...errors])
    }
}

const checkTranslations = async () => {
    console.log('🎉 Checking translations...')

    const cs = JSON.parse(await readFile(new URL('../src/translations/cs.json', import.meta.url)))
    const en = JSON.parse(await readFile(new URL('../src/translations/en.json', import.meta.url)))

    const LANGUAGES = {
        base: cs,
        other: [en],
    }

    for (const other of LANGUAGES.other) {
        checkTranslation(LANGUAGES.base, other)
        checkTranslation(other, LANGUAGES.base)
    }

    console.log('✨ Translations are ok.')
}

checkTranslations()
