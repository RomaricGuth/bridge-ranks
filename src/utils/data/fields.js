export const fields = Object.freeze({
    ID: {
        key: 'id',
        displayName: 'Numéro de license',
    },
    FIRST_NAME: {
        key: 'first_name',
        displayName: 'Prénom',
    },
    LAST_NAME: {
        key: 'last_name',
        displayName: 'Nom',
    },
    BIRTH_DATE: {
        key: 'birth_date',
        displayName: 'Date de naissance',
    },
    GENDER: {
        key: 'gender',
        displayName: 'genre',
    },
    RANKING: {
        key: 'ranking',
        displayName: 'Classement',
    },
    OPEN_2: {
        key: 'Open_2',
        displayName: 'Points Open/2',
    },
    OPEN_4: {
        key: 'Open_4',
        displayName: 'Points Open/4',
    },
    MIXTE_2: {
        key: 'Mixte_2',
        displayName: 'Points Mixte/2',
    },
    MIXTE_4: {
        key: 'Mixte_4',
        displayName: 'Points Mixte/4',
    },
    INTERCLUB: {
        key: 'Interclub',
        displayName: 'Points Interclub',
    },
    CDF: {
        key: 'CDF',
        displayName: 'Points CDF',
    },
    DAMES_4: {
        key: 'Dames_4',
        displayName: 'Points Dames/4',
    },
    DAMES_2: {
        key: 'Dames_2',
        displayName: 'Points Dames/2',
    },
    U31_2: {
        key: 'U31_2',
        displayName: 'Points U31/2',
    },
    U31_4: {
        key: 'U31_4',
        displayName: 'Points U31/4',
    },
    SENIOR_2: {
        key: 'Senior_2',
        displayName: 'Points Senior/2',
    },
    SENIOR_4: {
        key: 'Senior_4',
        displayName: 'Points Senior/4',
    },
    SENIOR_MIXTE_4: {
        key: 'Senior_Mixte_4',
        displayName: 'Points Senior Mixte /4',
    },
    SENIOR_MIXTE_2: {
        key: 'Senior_Mixte_2',
        displayName: 'Points Senior Mixte /2'
    },

    /* ### COMPUTED FIELDS ### */

    TOTAL: {
        displayName: 'Points totaux',
        compute(entry) {
            return (entry['Open_2'] ?? 0) +
                (entry['Open_4'] ?? 0) +
                (entry['Mixte_2'] ?? 0) +
                (entry['Mixte_4'] ?? 0) +
                (entry['Interclub'] ?? 0) +
                (entry['CDF'] ?? 0) +
                (entry['Dames_4'] ?? 0) +
                (entry['Dames_2'] ?? 0) +
                (entry['U31_2'] ?? 0) +
                (entry['U31_4'] ?? 0) +
                (entry['Senior_2'] ?? 0) +
                (entry['Senior_4'] ?? 0) +
                (entry['Senior_Mixte_4'] ?? 0) +
                (entry['Senior_Mixte_2'] ?? 0)
        }
    },
})