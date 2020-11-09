import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatchdetailsService } from './matchdetails.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { UserdetailsService } from '../userdetails/userdetails.service';
import { Match } from "./../match";

@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.css']
})
export class MatchdetailsComponent implements OnInit {

  @Input() matchDetails: Match;
  @Output() userShowDetailEvent: EventEmitter<Number> = new EventEmitter();
  @Output() searchEvent: EventEmitter<Number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchMatch() {
    this.searchEvent.emit(this.matchDetails.matchId);
  }

  getUserDetails(userId: number) {
    this.userShowDetailEvent.emit(userId);
  }
}