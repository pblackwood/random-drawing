import React, { PropTypes } from "react";
import LocationList from "./LocationList";
import * as edit from "react-edit";

const LocationEditor = ({club, editorEvents}) => {

    const editorActions = {
        create: editorEvents.onCreate,
        edit: editorEvents.onEdit,
        save: editorEvents.onSave,
        delete: editorEvents.onDelete
    }

    return (
        <div className="location-list">
            <LocationList
                rows={club.locations}
                columns={columnModel(editorActions)}
                createLocation={editorActions.create}
            />
        </div>
    )
};

const editable = (editorActions) => {
    return edit.edit({
        isEditing: ({columnIndex, rowData}) => columnIndex === rowData.editing,
        onActivate: ({columnIndex, rowData}) => {
            editorActions.edit(rowData.id, columnIndex);
        },
        onValue: ({value, rowData, property}) => {
            editorActions.save(rowData.id, property, value);
        }
    })
}

const columnModel = (editorActions) => (
    [
        {
            property: 'name',
            header: {
                label: 'Name'
            },
            cell: {
                transforms: [
                    editable(editorActions)(edit.input())
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
                    editable(editorActions)(edit.input())
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
                    editable(editorActions)(edit.input())
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
                    editable(editorActions)(edit.input())
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
                    editable(editorActions)(edit.input())
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
                    editable(editorActions)(edit.input())
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
                    editable(editorActions)(edit.input())
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
                    editable(editorActions)(edit.input())
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

export default LocationEditor;


