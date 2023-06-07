"use client";

import { useState } from "react";
import TablePage from "./tablePage";

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

    const [rowsPerPage, setRowsPerPage] = useState(20);
    const [page, setPage] = useState(1);
    const [displayedCols, setDisplayedCols] = useState([
        'first_name',
        'last_name',
        'gender',
        'ranking',
    ])

    return (
        <TablePage data={data.slice(rowsPerPage * (page - 1), rowsPerPage)} columns={displayedCols} />
    )
}