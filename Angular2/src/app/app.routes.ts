import { Routes } from '@angular/router';
import { Users } from './components/users/users';
import { User } from './components/user/user';
import { AddUser } from './components/add-user/add-user';

export const routes: Routes = [
    {
        path: "",
        component: Users,
        title: "GithubUsers - HOmepage"
    },
    {
        path: "users/user/:username",
        component: User
    },
    {
        path: "users/addUser",
        component: AddUser
    },
];
