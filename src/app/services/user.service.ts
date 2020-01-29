import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
    private users: User[] = [
        new User(1, 'Will', 'Alexander', 'will@will.com')
    ];
    userSubject = new Subject<User[]>();


    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }

    deleteUser(user: User) {
        console.log('UserService - deleteUser');
        const userIndexToRemove = this.users.findIndex(
            (userEl) => {
                if (userEl === user) {
                    return true;
                }
            }
        );
        console.log('userIndexToRemove' + userIndexToRemove);
        this.users.splice(userIndexToRemove, 1);
        //this.saveRoutines();
        this.emitUsers();
    }
}