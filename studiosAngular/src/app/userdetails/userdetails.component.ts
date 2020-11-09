import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  @Input() user: User;
  @Output() matchShowDetailEvent: EventEmitter<Number> = new EventEmitter();
  @Output() searchEvent: EventEmitter<Number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchUser() {
    this.searchEvent.emit(this.user.userId);
  }

  getMatchDetails(matchId: number) {
    this.matchShowDetailEvent.emit(matchId);
  }
}

