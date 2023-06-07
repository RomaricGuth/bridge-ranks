/*
export function getData() {
    return new Promise(async (resolve, reject) => {
        const data = await import('../../public/data/results_2022-2023.csv');
        console.log(data);
        resolve(data);
    });
}
*/

export function getData() {
    return new Promise(async (resolve, reject) => {
        const csv = require('csv-parser')
        const fs = require('fs')
        const results = [];

        fs.createReadStream('public/data/results_2022-2023.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            resolve(results)
        });
    });
}