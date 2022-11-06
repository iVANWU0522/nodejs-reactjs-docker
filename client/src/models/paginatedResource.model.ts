export interface PaginatedResource<T> {
    items: Array<T>,
    meta: {
        currentPage: number;
        totalPages: number;
        itemCount: number;
        itemsPerPage: number;
        totalItems: number;
    };
}
