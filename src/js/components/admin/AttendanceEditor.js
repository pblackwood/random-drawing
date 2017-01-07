import React, { PropTypes } from "react";
import AttendeeList from "./AttendeeList";
import * as edit from "react-edit";
import { find, findIndex } from "lodash";

const AttendanceEditor = ({club, view, editorEvents}) => {

    const editorActions = {
        togglePlayerAttendance: editorEvents.onTogglePlayer,
        selectEvent: editorEvents.onSelectEvent
    }

    const activeEvent = view.activeEvent ? find(club.events, {id: view.activeEvent}) : {}

    return (
        <div className="attendance-editor">
            <div className="attendance-list">
                <AttendeeList
                    rows={club.players}
                    columns={columnModel(club, editorActions, activeEvent)}
                    activeEvent={activeEvent}
                />
            </div>
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

const columnModel = (club, editorActions, activeEvent) => (
    [
        {
            property: 'first',
            header: {
                label: 'First Name'
            },
            cell: {
                property: 'first'
            }
        },
        {
            property: 'last',
            header: {
                label: 'Last Name'
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

export default AttendanceEditor;

