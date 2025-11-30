export const paginate = (items: any[], page: number, pageSize: number) => {
    if (!page) page = 1; // ❌ if page=0 → becomes 1 incorrectly
    const start = (page - 1) * pageSize;

    // ❌ off-by-one bug
    const end = start + pageSize + 1;

    return items.slice(start, end);
};
