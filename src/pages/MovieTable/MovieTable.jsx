import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';

const MovieTable = ({movieData}) => {
    console.log(movieData);
    const [selectedMovies, setSelectedMovies] = useState(null);
    const [selectedDirectors, setSelectedDirectors] = useState(null);
    const [selectedCertifications, setSelectedCertifications] = useState(null);

    const certifications = ["General","CA-PG","14 Accompaniment"];
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

    const myRef = useRef(null);

    const titleBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Title</span>
                {rowData.title}
            </React.Fragment>
        );
    }

    const yearBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Year</span>
                {rowData.releaseDate}
            </React.Fragment>
        );
    }

    const durationBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Running Time</span>
                {rowData.length}
            </React.Fragment>
        );
    }

    const directorBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Director</span>
                {rowData.director}
            </React.Fragment>
        );
    }

    const directorItemTemplate = (option) => {
        return (
            <div className="p-multiselect-director-option">
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{option}</span>
            </div>
        );
    }

    const onDirectorFilterChange = (event) => {
        myRef.current.filter(event.value, 'director', 'in');
        setSelectedRepresentatives(event.value);
    }

    const renderDirectorFilter = () => {
        return (
            <MultiSelect className="p-column-filter" value={selectedDirectors} options={directors}
                onChange={onDirectorFilterChange} itemTemplate={directorItemTemplate} placeholder="All" optionLabel="name" optionValue="name" />
        );
    }

    const certificationBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Certification</span>
                <span className={classNames('customer-badge', 'status-' + rowData.certification)}>{rowData.certification}</span>
            </React.Fragment>
        );
    }

    const ratingBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Rating</span>
                {rowData.rating}
            </React.Fragment>
        );
    }


    return (
        <div className="movie-table">

        </div>
    );
}

export default MovieTable;
