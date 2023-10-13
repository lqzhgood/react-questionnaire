export function parseQueryParams(url: string): Record<string, string> {
    const searchParams = new URLSearchParams(url.split('?')[1]);

    const queryParams: Record<string, any> = {}; // eslint-disable-line

    searchParams.forEach((value, key) => {
        if (/^.+\[\]$/.test(key)) {
            key = key.slice(0, -2);
            if (!queryParams[key]) {
                queryParams[key] = [];
            }
            queryParams[key].push(value);
        } else {
            queryParams[key] = value;
        }
    });

    return queryParams;
}

export function hasIntersection(array1: any[], array2: any[]) {
    for (const item of array1) {
        if (array2.includes(item)) {
            return true;
        }
    }
    return false;
}
