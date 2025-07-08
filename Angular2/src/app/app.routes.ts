import { Routes } from '@angular/router';
import { Users } from './components/users/users';
import { User } from './components/user/user';
import { AddUser } from './components/add-user/add-user';
import { Random1 } from './components/random1/random1';
import { Random2 } from './components/random2/random2';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [
    {
        path: "",
        component: Users,
        title: "GithubUsers - HOmepage"
    },
    // {
    //     path: "users/user/:username",
    //     component: User
    // },
    {
        path: "users/user/:username",
        component: User,
        canActivate: [authGuard],
        // canActivate: [AuthGuard],
        children: [
            {
                path: "random1",
                component: Random1
            },
            {
                path: "random2",
                component: Random2
            }
        ]
    },
    {
        path: "users/addUser",
        component: AddUser
    },

];
