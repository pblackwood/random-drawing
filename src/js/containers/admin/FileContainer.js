import { connect } from "react-redux";
import * as actions from "../../actions";
import FileEditor from "../../components/admin/FileEditor";

const mapStateToProps = (state) => ({
    club: state.club,
    view: state.view,
    stats: state.stats
});

const mapDispatchToProps = (dispatch) => ({
    events: {
        onChangeJsonFilePath: (path) => {
            dispatch(actions.editJsonFilePath(path))
        },
        onChangeJsonFileName: (name) => {
            dispatch(actions.editJsonFileName(name))
        },
        onSave: () => {
            dispatch(actions.saveJsonFile())
        },
        onChangeVersion: () => {
            dispatch(actions.updateMetadataVersion())
        }
    },
});

const FileContainer = connect(mapStateToProps, mapDispatchToProps)(FileEditor);

export default FileContainer

