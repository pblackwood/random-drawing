import {connect} from "react-redux";
import Header from "../components/Header";

const mapStateToProps = (state) => {
    return {
        club: state.club
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer
