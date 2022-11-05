export interface PaginatedResource<T> {
    items: Array<T>,
    metadata: {
        currentPage: number;
        totalPages: number;
        itemCount: number;
        itemsPerPage: number;
        totalItems: number;
    };
}
