import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import UsersListPage, {loadData} from './pages/UsersListPage';
import App from './App';
import AdminsListPage from './pages/AdminsListPage';

// export default () => {
// //     return (
// //         <div>
// //             <Route exact path="/" component={Home}/>
// //             <Route path="/users" component={usersList}/>
// //         </div>
// //     );
// // };

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: "/",
                exact: true
            },
            {
                ...UsersListPage,
                path: "/users",
            },
            {
                ...AdminsListPage,
                path: "/admins",
            },
            {
                ...NotFoundPage
            }
        ]
    }

];


