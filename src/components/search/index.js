import React from 'react';
import styles from "./search.module.css";

export default function Search({searchText, onSearchChange }) {
    return (
        <div>
            <input
                type="text"
                value={searchText}
                onChange={onSearchChange}
                placeholder="Example: 'bug', 'feature', 'improvement'"
            />
        </div>
    );
}
