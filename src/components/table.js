"use client";

import { useState } from "react";
import TablePage from "./tablePage";
import Pagination from "./pagination";
import MultiSelectDropdown from "./multiSelectDropdown";

export default function Table({data}) {
    const fields = [
        {
            key: 'id',
            displayName: 'Numéro de license',
        },
        {
            key: 'first_name',
            displayName: 'Prénom',
        },
        {
            key: 'last_name',
            displayName: 'Nom',
        },
        {
            key: 'birth_date',
            displayName: 'Date de naissance',
        },
        {
            key: 'gender',
            displayName: 'genre',
        },
        {
            key: 'ranking',
            displayName: 'Classement',
        },
        {
            key: 'Open_2',
            displayName: 'Points Open/2',
        },
        {
            key: 'Open_4',
            displayName: 'Points Open/4',
        },
        {
            key: 'Mixte_2',
            displayName: 'Points Mixte/2',
        },
        {
            key: 'Mixte_4',
            displayName: 'Points Mixte/4',
        },
        {
            key: 'Interclub',
            displayName: 'Points Interclub',
        },
        {
            key: 'CDF',
            displayName: 'Points CDF',
        },
        {
            key: 'Dames_4',
            displayName: 'Points Dames/4',
        },
        {
            key: 'Dames_2',
            displayName: 'Points Dames/2',
        },
        {
            key: 'U31_2',
            displayName: 'Points U31/2',
        },
        {
            key: 'U31_4',
            displayName: 'Points U31/4',
        },
        {
            key: 'Senior_2',
            displayName: 'Points Senior/2',
        },
        {
            key: 'Senior_4',
            displayName: 'Points Senior/4',
        },
        {
            key: 'Senior_Mixte_4',
            displayName: 'Points Senior Mixte /4',
        },
        {
            key: 'Senior_Mixte_2',
            displayName: 'Points Senior Mixte /2'
        },

        /* ### COMPUTED FIELDS ### */

        {
            key: 'Total',
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
    ]

    const initialDisplayedFields = [
        'first_name',
        'last_name',
        'gender',
        'ranking',
        'Total'
    ]

    const [rowsPerPage, setRowsPerPage] = useState(20);
    const [page, setPage] = useState(1);
    // array of true/false whether corresponding field is displayed
    const [displayedCols, setDisplayedCols] = useState(fields.map((field) => initialDisplayedFields.includes(field.key)));

    return (
        <div>
            <MultiSelectDropdown options={fields.map(field => field.displayName)} placeholder="Plus de paramètres..." selected={displayedCols} onSelectChange={setDisplayedCols} />
            <TablePage data={data.slice(rowsPerPage * (page - 1), rowsPerPage * page)} columns={fields.filter((_field, index) => displayedCols[index])} />
            <Pagination currentPage={page} totalPages={Math.ceil(data.length / rowsPerPage)} onPageChange={setPage} />
        </div>
    )
}