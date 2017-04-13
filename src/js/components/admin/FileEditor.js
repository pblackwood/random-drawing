import React, { PropTypes } from "react";
import { find } from "lodash";
import { v4 } from "uuid";

const FileEditor = ({club, stats, view, events}) => {

    const writeFile = () => {
        var json = JSON.stringify({
            club: club,
            stats: stats
            },
            (key, value) => {
                switch (key) {
                    case 'version':
                        return v4();
                    case 'editing':
                    case 'attended':
                        return undefined;
                }
                return value;
            },
            2
        );
        var blob = new Blob([json], {type: "application/json"});
        return URL.createObjectURL(blob);
    }

    return (
        <div className="file-editor">
            <h5>Current JSON file version: {club.version}</h5>
            <br />
            <a href={writeFile()}
               className="pure-button pure-button-primary"
               download={view.jsonFileName}>
                Save JSON
            </a>
        </div>
    )
};

export default FileEditor;


