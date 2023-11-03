import React, { useState } from 'react';
import styles from './index.module.css';

type Product = { category: string; price: string; stocked: boolean; name: string };

const PRODUCTS = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

function Form({
    filterText,
    inStockOnly,
    setFilterText,
    setInStockOnly,
}: {
    filterText: string;
    inStockOnly: boolean;
    setFilterText: (v: string) => void;
    setInStockOnly: (v: boolean) => void;
}) {
    return (
        <form>
            <input
                type='text'
                placeholder='Search...'
                value={filterText}
                onChange={e => setFilterText(e.target.value.toLowerCase().trim())}
            />
            <br />
            <label htmlFor='hasStock'>
                <input
                    type='checkbox'
                    id='hasStock'
                    checked={inStockOnly}
                    onChange={e => setInStockOnly(e.target.checked)}
                />
                Only show products in stock
            </label>
        </form>
    );
}

function RowCateGory({ category }: { category: string }) {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    );
}

function Row({ product }: { product: Product }) {
    return (
        <tr>
            <td style={{ color: product.stocked ? undefined : 'red' }}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function Table({ list, filterText, inStockOnly }: { list: Product[]; filterText: string; inStockOnly: boolean }) {
    const rows: JSX.Element[] = [];
    let lastCategory: string | null = null;

    list.forEach(p => {
        if (filterText && !p.name.toLowerCase().includes(filterText)) return;
        if (inStockOnly && !p.stocked) return;
        if (p.category !== lastCategory) {
            rows.push(<RowCateGory category={p.category} key={p.category} />);
            lastCategory = p.category;
        }

        rows.push(<Row product={p} key={p.name} />);
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

const FilterableProductTable = () => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div className={styles.container}>
            <Form
                filterText={filterText}
                inStockOnly={inStockOnly}
                setFilterText={setFilterText}
                setInStockOnly={setInStockOnly}
            />
            <Table list={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    );
};

export default FilterableProductTable;
