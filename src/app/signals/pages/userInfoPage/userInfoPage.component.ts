import { Component, OnInit, inject, signal } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-userInfoPage',
  templateUrl: './userInfoPage.component.html',
  styleUrls: ['./userInfoPage.component.css']
})
export class UserInfoPageComponent  implements OnInit {

  private usersService = inject(UserServiceService);
  public userId = signal(1);

  public currentUser = signal<User|undefined>(undefined);
  public userWasFound = signal(true);

  ngOnInit(): void {
    this.loadUser( this.userId() )
  }

  loadUser( id: number ) {
    if ( id <= 0 ) return;

    this.userId.set(id);
    this.currentUser.set(undefined);

    this.usersService.getUserById( id )
      .subscribe({
        next: (user) => {
         this.currentUser.set( user );

        }
      });


  }

}
