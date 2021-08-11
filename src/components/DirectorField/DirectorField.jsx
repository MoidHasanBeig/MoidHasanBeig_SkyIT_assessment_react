import React from "react";
import { MultiSelect } from 'primereact/multiselect';

const directors = [
    "John Carney",
    "Patty Jenkins",
    "Travis Fine",
    "Amy Poehler",
    "David Ayer",
    "Zack Snyder",
    "Pete Docter",
    "Ryan Coogler",
    "Luc Besson"
];

const directorBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            {rowData.director}
        </React.Fragment>
    );
}

const directorItemTemplate = (option) => {
    return (
        <div className="p-multiselect-director-option">
            <span style={{ verticalAlign: 'middle', marginLeft: '.5em' }}>{option}</span>
        </div>
    );
}

const onDirectorFilterChange = (event, setSelectedDirectors, myRef) => {
    myRef.current.filter(event.value, 'director', 'in');
    setSelectedDirectors(event.value);
}

const renderDirectorFilter = (selectedDirectors, setSelectedDirectors, myRef) => {
    return (
        <MultiSelect className="p-column-filter" value={selectedDirectors} options={directors}
            onChange={(e) => onDirectorFilterChange(e, setSelectedDirectors, myRef)} itemTemplate={directorItemTemplate} placeholder="All" />
    );
}

export {
    directorBodyTemplate,
    renderDirectorFilter
}

