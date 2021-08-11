import React from 'react';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import './CertificationField.scss';

const certifications = ["General", "CA-PG", "14 Accompaniment"];

const certificationBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <span className={classNames('certificate-badge', 'certification-' + rowData.certification.toLowerCase())}>{rowData.certification}</span>
        </React.Fragment>
    );
}

const renderCertificationFilter = (selectedCertifications, setSelectedCertifications, myRef) => {
    return (
        <Dropdown value={selectedCertifications} options={certifications} onChange={(e) => onCertificationFilterChange(e, setSelectedCertifications, myRef)}
            itemTemplate={certificationItemTemplate} showClear placeholder="Select a Certification" className="p-column-filter" />
    );
}

const certificationItemTemplate = (option) => {
    return (
        <span className={classNames('certificate-badge', 'certification-' + option.toLowerCase())}>{option}</span>
    );
}

const onCertificationFilterChange = (event, setSelectedCertifications, myRef) => {
    myRef.current.filter(event.value, 'certification', 'equals');
    setSelectedCertifications(event.value);
}

export {
    renderCertificationFilter,
    certificationBodyTemplate
}
