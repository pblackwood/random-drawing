import React, { PropTypes } from "react";
import { find } from "lodash";
import * as edit from "react-edit";
import * as sort from "sortabular";
import EventList from "./EventList";

const EventListEditor = ({club, view, events}) => {

    const editorActions = {
        create: events.onCreate,
        edit: events.onEdit,
        save: events.onSave,
        delete: events.onDelete,
        selectEvent: events.onSelectEvent,
        sort: events.onColumnClick
    }

    const locations = club.locations ? club.locations.map((loc) => ({value: loc.id, name: loc.name})) : []

    return (
        <div className="event-list">
            <EventList
                rows={club.events}
                columns={columnModel(editorActions, view, locations)}
                sortingColumns={view.eventSortingColumns}
                createEvent={editorActions.create}
            />
        </div>
    )

}

const columnModel = (editorActions, view, locations) => {

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
            getSortingColumns: () => view.eventSortingColumns,
            onSort: (selectedColumn) => {
                sort.byColumns({
                    sortingColumns: view.eventSortingColumns,
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
                    label: 'What',
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
                property: 'date',
                header: {
                    label: 'When',
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
                property: 'location',
                header: {
                    label: 'Where'
                    // TODO, sorting on the uuid, not the name
                    // transforms: [
                    //     sortable
                    // ]
                },
                cell: {
                    transforms: [
                        editable(edit.dropdown({options: locations}))
                    ],
                    formatters: [
                        (v) => {
                            let loc = find(locations, {value: v});
                            return loc ? loc.name : v
                        }
                    ]
                }
            },
            {
                property: 'attendees',
                header: {
                    label: 'How Many'
                },
                cell: {
                    formatters: [
                        (value, {rowData}) => (
                            <span>{rowData.attendees.length}</span>
                        )
                    ]
                },
            },
            {
                header: {
                    label: 'Edit'
                },
                // props: {
                //     style: {
                //         width: 25
                //     }
                // },
                cell: {
                    formatters: [
                        (value, {rowData}) => (
                            <span
                                className="attendee"
                                title="Add Attendees"
                                onClick={() => editorActions.selectEvent(rowData.id)}
                                style={{cursor: 'pointer'}}
                            >
                        <i className="fa fa-user-plus"></i>
                    </span>
                        )
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
                                title="Delete Event"
                                onClick={() => editorActions.delete(rowData.id)}
                                style={{cursor: 'pointer'}}
                            >
                        <i className="fa fa-trash"></i>
                    </span>
                        )
                    ]
                }
            }
        ]
    )
}

export default EventListEditor;


