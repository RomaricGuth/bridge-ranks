import {fields} from "./fields";

export const sorts = Object.freeze({
    TOTAL: {
        sortingCb(entryA, entryB) {
            return fields.TOTAL.compute(entryA) - fields.TOTAL.compute(entryB);
        }
    }
});


export const orders = Object.freeze({
    ASCENDING: {
        applyOrder(data) {
            // ascending by default
            return data;
        }
    },
    DESCENDING: {
        applyOrder(data) {
            return data.toReversed();
        }
    },
});