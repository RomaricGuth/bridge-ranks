import 'server-only';
import Papa from 'papaparse';
import { readFileSync } from 'node:fs';

export function getData() {
    return new Promise(async (resolve, reject) => {
        const csvData = readFileSync('public/data/results_2022-2023.csv', 'utf-8');
        Papa.parse(csvData, {
            header: true,
            dynamicTyping: true, // keep numbers typed as number in resulting JSON
            complete(results, _file) {
                resolve(results.data);
            },
            error(error, _file) {
                reject(error);
            }
        })
    });
}