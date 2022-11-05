import styled from 'styled-components';

export const StyledGrid = styled.div`
    h1,
    p {
        font-family: Lato;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        position: relative;
    }

    thead tr th {
        font-weight: 500;
        text-align: left;
        background-color: #fafafa;
    }

    tbody tr:nth-child(even) {
        background-color: #fafafa;
    }

    th,
    td {
        padding: 8px;
        overflow-wrap: break-word;
    }

    .pagination-bar {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;
