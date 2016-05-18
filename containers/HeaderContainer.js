import {connect} from "react-redux";
import Header from "../components/Header";
import {changeQuarter, changeYear} from "../actions";

const mapStateToProps = (state) => {
    return {
        club: state.club
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onQuarterChange: (e) => {
            dispatch(changeQuarter(parseInt(e.target.value)));
        },
        onYearChange: (e) => {
            dispatch(changeYear(parseInt(e.target.value)));
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer
