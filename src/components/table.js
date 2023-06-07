"use client";

import { useState } from "react";
import TablePage from "./tablePage";
import Pagination from "./pagination";
import MultiSelectDropdown from "./multiSelectDropdown";

export default function Table({data}) {
    const fields = [
        'id',
        'first_name',
        'last_name',
        'birth_date',
        'gender',
        'ranking',
        'Open_2',
        'Open_4',
        'Mixte_2',
        'Mixte_4',
        'Interclub',
        'CDF',
        'Dames_4',
        'Dames_2',
        'U31_2',
        'U31_4',
        'Senior_2',
        'Senior_4',
        'Senior_Mixte_4',
        'Senior_Mixte_2'
    ]

    const initialDisplayedFields = [
        'first_name',
        'last_name',
        'gender',
        'ranking',
    ]

    const [rowsPerPage, setRowsPerPage] = useState(20);
    const [page, setPage] = useState(1);
    // array of true/false whether corresponding field is displayed
    const [displayedCols, setDisplayedCols] = useState(fields.map((field) => initialDisplayedFields.includes(field)));

    return (
        <div>
            <MultiSelectDropdown options={fields} placeholder="Plus de paramètres..." selected={displayedCols} onSelectChange={setDisplayedCols} />
            <TablePage data={data.slice(rowsPerPage * (page - 1), rowsPerPage * page)} columns={fields.filter((_field, index) => displayedCols[index])} />
            <Pagination currentPage={page} totalPages={Math.ceil(data.length / rowsPerPage)} onPageChange={setPage} />
        </div>
    )
}