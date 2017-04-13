import React, { PropTypes } from "react";
import * as edit from "react-edit";
import * as sort from "sortabular";
import LocationList from "./LocationList";

const LocationListEditor = ({club, view, events}) => {

    const editorActions = {
        create: events.onCreate,
        edit: events.onEdit,
        save: events.onSave,
        delete: events.onDelete,
        sort: events.onColumnClick
    }

    return (
        <div className="location-list">
            <LocationList
                rows={club.locations}
                columns={columnModel(editorActions, view)}
                sortingColumns={view.locationSortingColumns}
                createLocation={editorActions.create}
            />
        </div>
    )
};

const columnModel = (editorActions, view) => {

    const editable =
        edit.edit({
            isEditing: ({columnIndex, rowData}) => columnIndex === rowData.editing,
            onActivate: ({columnIndex, rowData}) => {
                editorActions.edit(rowData.id, columnIndex);
            },
            onValue: ({value, rowData, property}) => {
                editorActions.save(rowData.id, property, value);
            }
        });

    const sortable =
        sort.sort({
            getSortingColumns: () => view.locationSortingColumns,
            onSort: (selectedColumn) => {
                sort.byColumns({
                    sortingColumns: view.locationSortingColumns,
                    selectedColumn
                })
                editorActions.sort(selectedColumn)
            },
            strategy: sort.strategies.byProperty
        });

    return (
        [
            {
                property: 'name',
                header: {
                    label: 'Name',
                    transforms: [
                        sortable
                    ]
                },
                cell: {
                    transforms: [
                        editable(edit.input())
                    ]
                }
            },
            {
                property: 'street1',
                header: {
                    label: 'Street'
                },
                cell: {
                    transforms: [
                        editable(edit.input())
                    ]
                }
            },
            {
                property: 'street2',
                header: {
                    label: 'Street 2'
                },
                cell: {
                    transforms: [
                        editable(edit.input())
                    ]
                }
            },
            {
                property: 'city',
                header: {
                    label: 'City'
                },
                cell: {
                    transforms: [
                        editable(edit.input())
                    ]
                }
            },
            {
                property: 'state',
                header: {
                    label: 'State'
                },
                cell: {
                    transforms: [
                        editable(edit.input())
                    ]
                }
            },
            {
                property: 'zip',
                header: {
                    label: 'Zip Code'
                },
                cell: {
                    transforms: [
                        editable(edit.input())
                    ]
                }
            },
            {
                property: 'phone1',
                header: {
                    label: 'Phone'
                },
                cell: {
                    transforms: [
                        editable(edit.input())
                    ]
                }
            },
            {
                property: 'phone2',
                header: {
                    label: 'Phone 2'
                },
                cell: {
                    transforms: [
                        editable(edit.input())
                    ]
                }
            },
            {
                props: {
                    style: {
                        width: 25
                    }
                },
                cell: {
                    formatters: [
                        (value, {rowData}) => (
                            <span
                                className="remove"
                                title="Delete Location"
                                onClick={() => editorActions.delete(rowData.id)}
                                style={{cursor: 'pointer'}}
                            >
                                &#10008;
                            </span>
                        )
                    ]
                }
            }
        ]
    )
}

export default LocationListEditor;


