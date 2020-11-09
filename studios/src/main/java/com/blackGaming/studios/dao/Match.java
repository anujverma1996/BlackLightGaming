package com.blackGaming.studios.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


@Entity
@Table(name = "matchdetails")
public class Match {
    @Id
    @Column(name = "MATCHID")
    private int matchId;
    @Column(name = "USER1")
    private int USER1;
    @Column(name = "USER2")
    private int USER2 ;
    @Column(name = "MATCHSTARTTIME")
    private Date MATCHSTARTTIME;

    public int getMatchId() {
        return matchId;
    }

    public void setMatchId(int matchId) {
        this.matchId = matchId;
    }

    public int getUSER1() {
        return USER1;
    }

    public void setUSER1(int USER1) {
        this.USER1 = USER1;
    }

    public int getUSER2() {
        return USER2;
    }

    public void setUSER2(int USER2) {
        this.USER2 = USER2;
    }

    public String getMATCHSTARTTIME() throws ParseException {
        DateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        DateFormat outputFormat = new SimpleDateFormat("dd-MM-yyyy KK:mm a");
        return outputFormat.format(inputFormat.parse(String.valueOf(MATCHSTARTTIME)));


    }

    public void setMATCHSTARTTIME(Date MATCHSTARTTIME) {
        SimpleDateFormat formatDate = new SimpleDateFormat("hh:mm a");
        this.MATCHSTARTTIME = MATCHSTARTTIME;
    }

    @Override
    public String toString() {
        return "Match{" +
                "matchId=" + matchId +
                ", USER1=" + USER1 +
                ", USER2=" + USER2 +
                ", MATCHSTARTTIME=" + MATCHSTARTTIME +
                '}';
    }
}
