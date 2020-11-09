import { Component } from '@angular/core';
import { Match } from './match';
import { MatchdetailsService } from './matchdetails/matchdetails.service';
import { User } from './user';
import { UserdetailsService } from './userdetails/userdetails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studiosAngular';
  showUser: boolean = true;
  showMatch: boolean = false;
  match: Match = new Match();
  user: User = new User();

  constructor(
    private matchdetailsService: MatchdetailsService,
    private userdetailsService: UserdetailsService
  ) { }

  getMatchDetails(matchId: number) {
    this.matchdetailsService.getMatchDetails(matchId).subscribe(
      r => {
        console.log(r);
        const matchDetails: Match = new Match();
        if (r !== null) {
          matchDetails.matchId = r.matchId;
          matchDetails.user1 = r.user1;
          matchDetails.user2 = r.user2;
          matchDetails.matchStartTime = r.matchstarttime;
        }
        this.match = matchDetails;
      })
  }

  getUserDetails(userId: number) {
    this.userdetailsService.getUserDetails(userId).subscribe(
      r => {
        console.log(r);
        const user: User = new User();
        if (r !== null) {
          user.userId = r.userId;
          user.name = r.name;
          user.gamesPlayed = r.gamesPlayed;
          user.gamesWon = r.gamesWon;
          user.lastGameId = r.lastGameId;
        }
        this.user = user;
      }
    )
  }

  toggleMatchUserDetailsWindow(isUserClicked: boolean) {
    if (isUserClicked) {
      this.showUser = true;
      this.showMatch = false;
    } else {
      this.showMatch = true;
      this.showUser = false;
    }
  }

  showUserEvent(userId: number) {
    if (userId !== null) {
      this.showUser = true;
      this.showMatch = false;
      this.getUserDetails(userId);
      this.match = new Match();
    }
  }

  showMatchEvent(matchId: number) {
    if (matchId !== null) {
      this.showMatch = true;
      this.showUser = false;
      this.user = new User();
      this.getMatchDetails(matchId);
    }
  }

}
