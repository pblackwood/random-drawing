import React, { PropTypes } from "react";
import { find, findIndex } from "lodash";
import * as sort from "sortabular";
import AttendeeList from "./AttendeeList";

const AttendanceEditor = ({club, view, editorEvents}) => {

    const editorActions = {
        togglePlayerAttendance: editorEvents.onTogglePlayer,
        selectEvent: editorEvents.onSelectEvent,
        sort: editorEvents.onColumnClick
    }

    const activeEvent = view.activeEvent ? find(club.events, {id: view.activeEvent}) : {}

    return (
        <div className="attendance-editor">
            <AttendeeList
                rows={club.players}
                columns={columnModel(editorActions, club, view, activeEvent)}
                sortingColumns={view.attendanceSortingColumns}
                activeEvent={activeEvent}
            />
        </div>
    )
};

const columnModel = (editorActions, club, view, activeEvent) => {

    const sortable =
        sort.sort({
            getSortingColumns: () => view.attendanceSortingColumns,
            onSort: (selectedColumn) => {
                sort.byColumns({
                    sortingColumns: view.attendanceSortingColumns,
                    selectedColumn
                })
                editorActions.sort(selectedColumn)
            },
            strategy: sort.strategies.byProperty
        });

    return (
        [
            {
                property: 'first',
                header: {
                    label: 'First Name',
                    transforms: [
                        sortable
                    ]
                },
                cell: {
                    property: 'first'
                }
            },
            {
                property: 'last',
                header: {
                    label: 'Last Name',
                    transforms: [
                        sortable
                    ]
                },
                cell: {
                    property: 'last'
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
                            <input type="checkbox"
                                   className="toggle-player"
                                   title="Attended"
                                   defaultChecked={findIndex(activeEvent.attendees, (p) => (p === rowData.id)) >= 0}
                                   onClick={(e) => editorActions.togglePlayerAttendance(e.target, activeEvent.id, rowData.id)}>
                            </input>
                        )
                    ]
                }
            }
        ]
    )
}

export default AttendanceEditor;

