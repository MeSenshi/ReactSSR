import React from 'react';
import {connect} from "react-redux";
import {fetchAdmins} from "../actions";
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends React.Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderUsers() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        })
    }

    render() {
        return (
            <div>
                <h3>Protected list of admins</h3>
                <ul> {this.renderUsers()}</ul>
            </div>
        )
    }
}


function mapSTateToProps(state) {
    return {admins: state.admins}
}

function loadData(store) {
    return store.dispatch(fetchAdmins());
}

export {loadData};

export default {
    loadData,
    component:connect(mapSTateToProps, {fetchAdmins})(requireAuth(AdminsListPage))
}