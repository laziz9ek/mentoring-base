import { UsersApiService } from './../users-api.service';
import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';

// const consoleResponse = (response: unknown) => console.log(response)

export interface Users {
    id:         number;
    name:       string;
    username:   string;
    email:      string;
    address:    {
        street:     string;
        suite:      string;
        city:       string;
        zipcode:    string;
        geo:        {
            lat:    string;
            lng:    string;
        };
    };
    phone:      string;
    website:    string;
    company:    {
        name:           string;
        catchPhrase:    string;
        bs:             string;
    };
}


@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [NgFor, NgIf, UserCardComponent],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
    readonly usersApiService = inject(UsersApiService);
    users: Users[] = [];

    constructor () {
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.users = response;
                console.log('USERS: ', this.users) 
            }
        )
        //this.apiService.get('https://dummyjson.com/users').subscribe(consoleResponse)
    }

    deleteUser(id: number) {
        this.users = this.users.filter(
            // @ts-ignore
            //item => item.id !== id
            item => {
                if (id === item.id) {
                    return false
                } else {
                    return true
                }
            }
        )
    }
}




