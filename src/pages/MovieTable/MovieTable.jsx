import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

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
                {rowData.title}
            </React.Fragment>
        );
    }

    const yearBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                {rowData.releaseDate}
            </React.Fragment>
        );
    }

    const durationBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                {rowData.length}
            </React.Fragment>
        );
    }

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
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{option}</span>
            </div>
        );
    }

    const onDirectorFilterChange = (event) => {
        myRef.current.filter(event.value, 'director', 'in');
        setSelectedDirectors(event.value);
    }

    const renderDirectorFilter = () => {
        return (
            <MultiSelect className="p-column-filter" value={selectedDirectors} options={directors}
                onChange={onDirectorFilterChange} itemTemplate={directorItemTemplate} placeholder="All" />
        );
    }

    const certificationBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className={classNames('customer-badge', 'status-' + rowData.certification)}>{rowData.certification}</span>
            </React.Fragment>
        );
    }

    const renderCertificationFilter = () => {
        return (
            <Dropdown value={selectedCertifications} options={certifications} onChange={onCertificationFilterChange}
                        itemTemplate={certificationItemTemplate} showClear placeholder="Select a Certification" className="p-column-filter"/>
        );
    }

    const certificationItemTemplate = (option) => {
        return (
            <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>
        );
    }

    const onCertificationFilterChange = (event) => {
        myRef.current.filter(event.value, 'certification', 'equals');
        setSelectedCertifications(event.value);
    }

    const ratingBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                {rowData.rating}
            </React.Fragment>
        );
    }

    const directorFilterElement = renderDirectorFilter();
    const certificationFilterElement = renderCertificationFilter();


    return (
        <div className="movie-table">
            <div className="card">
                <DataTable ref={myRef} value={movieData}
                    className="p-datatable-customers" dataKey="_id" rowHover
                    selection={selectedMovies} onSelectionChange={e => setSelectedMovies(e.value)}
                    paginator rows={10} emptyMessage="No movies found"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink">
                    <Column selectionMode="single" style={{width:'3em'}}/>
                    <Column field="title" header="Title" body={titleBodyTemplate} filter filterPlaceholder="Search by title" />
                    <Column field="releaseDate" header="Year" body={yearBodyTemplate} filter filterPlaceholder="Search by year" />
                    <Column field="length" header="Running Time" body={durationBodyTemplate} filter filterPlaceholder="Search by time" />
                    <Column sortField="director" filterField="director" header="Director" body={directorBodyTemplate} filter filterElement={directorFilterElement} />
                    <Column field="certification" header="Certification" body={certificationBodyTemplate} filter filterElement={certificationFilterElement} />
                    <Column field="rating" header="Rating" body={ratingBodyTemplate} filter filterPlaceholder="Search by rating" />
                </DataTable>
            </div>        
        </div>
    );
}

export default MovieTable;
