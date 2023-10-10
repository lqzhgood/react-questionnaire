export function parseQueryParams(url: string): Record<string, string> {
    const searchParams = new URLSearchParams(url.split('?')[1]);

    const queryParams: Record<string, any> = {};

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
