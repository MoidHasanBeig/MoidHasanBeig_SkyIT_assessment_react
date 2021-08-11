import React, { useState, useRef } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { directorBodyTemplate, renderDirectorFilter } from '../../components/DirectorField/DirectorField';
import { certificationBodyTemplate, renderCertificationFilter } from '../../components/CertificationField/CertificationField';
import { textBodyTemplate } from '../../components/TextField/TextField';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './MovieTable.scss';

const MovieTable = ({ movieData }) => {
    const [selectedMovies, setSelectedMovies] = useState(null);
    const [selectedDirectors, setSelectedDirectors] = useState(null);
    const [selectedCertifications, setSelectedCertifications] = useState(null);

    const myRef = useRef(null);

    const directorFilterElement = renderDirectorFilter(selectedDirectors, setSelectedDirectors, myRef);
    const certificationFilterElement = renderCertificationFilter(selectedCertifications, setSelectedCertifications, myRef);

    return (
        <div className="movie-table">
            <div className="card">
                <DataTable ref={myRef} value={movieData}
                    className="p-datatable-customers" dataKey="_id" rowHover
                    selection={selectedMovies} onSelectionChange={e => setSelectedMovies(e.value)}
                    paginator rows={10} emptyMessage="No movies found"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink">
                    <Column selectionMode="single" style={{ width: '3em' }} />
                    <Column field="title" header="Title" body={(data) => textBodyTemplate(data.title)} filter filterPlaceholder="Search by title" />
                    <Column field="releaseDate" header="Year" body={(data) => textBodyTemplate(data.releaseDate)} filter filterPlaceholder="Search by year" />
                    <Column field="length" header="Running Time" body={(data) => textBodyTemplate(data.length)} filter filterPlaceholder="Search by time" />
                    <Column sortField="director" filterField="director" header="Director" body={directorBodyTemplate} filter filterElement={directorFilterElement} />
                    <Column field="certification" header="Certification" body={certificationBodyTemplate} filter filterElement={certificationFilterElement} />
                    <Column field="rating" header="Rating" body={(data) => textBodyTemplate(data.rating)} filter filterPlaceholder="Search by rating" />
                </DataTable>
            </div>
        </div>
    );
}

export default MovieTable;
