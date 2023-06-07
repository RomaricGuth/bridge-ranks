"use client";

import { useEffect, useState } from "react";
import TablePage from "./tablePage";
import Pagination from "./pagination";
import MultiSelectDropdown from "./multiSelectDropdown";
import Dropdown from "./dropdown";
import {fields} from '../utils/data/fields';
import {sorts, orders} from "@/utils/data/sorts";
import { Croissant_One } from "next/font/google";

export default function Table({data}) {
    const initialDisplayedFields = [
        'FIRST_NAME',
        'LAST_NAME',
        'RANKING',
        'TOTAL',
    ]

    const [rowsPerPage, setRowsPerPage] = useState(20);
    const [page, setPage] = useState(1);
    // array of true/false whether corresponding field is displayed
    const [displayedCols, setDisplayedCols] = useState(Object.keys(fields).map((fieldKey) => initialDisplayedFields.includes(fieldKey)));
    const [sort, setSort] = useState('TOTAL');
    const [order, setOrder] = useState('DESCENDING');
    const [sortedData, setSortedData] = useState(data);
    const [orderedData, setOrderedData] = useState(data);
    const [pageData, setPageData] = useState([]);

    useEffect(() => {
        setSortedData(data.sort(sorts[sort].sortingCb));
    }, [data, sort])

    useEffect(() => {
        setOrderedData(orders[order].applyOrder(sortedData))
    }, [sortedData, order])

    useEffect(() => {
        setPageData(orderedData.slice(rowsPerPage * (page - 1), rowsPerPage * page));
    }, [orderedData, page, rowsPerPage])

    return (
        <div>
            <div className="flex flex-col gap-4 mb-8">
                <div className="flex flex-row items-center gap-2">
                    <label>Trier par...</label>
                    <Dropdown options={Object.keys(sorts)} placeholder={sort} onSelect={setSort} />
                    {order === 'ASCENDING' ? (
                        <button onClick={() => setOrder('DESCENDING')}>
                            Croissant
                            <i class="fa-solid fa-arrow-up-long"></i>
                        </button>
                    ) : (
                        <button onClick={() => setOrder('ASCENDING')}>
                            Décroissant
                            <i class="fa-solid fa-arrow-down-long"></i>
                        </button>
                    )}
                </div>
                <MultiSelectDropdown options={Object.values(fields).map(field => field.displayName)} placeholder="Plus de paramètres..." selected={displayedCols} onSelectChange={setDisplayedCols} />
            </div>
            <div className="flex flex-col items-center gap-4">
                <TablePage data={pageData} columns={Object.values(fields).filter((_field, index) => displayedCols[index])} />
                <Pagination currentPage={page} totalPages={Math.ceil(data.length / rowsPerPage)} onPageChange={setPage} />
            </div>
        </div>
    )
}