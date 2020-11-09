package com.blackGaming.studios.dao;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "USERDETAILS")
public class User {
    @Id
    @Column(name = "USERID")
    private int userId;
    @Column(name = "NAME")
    private String name;
    @Column(name = "GAMESPLAYED")
    private int gamesPlayed ;
    @Column(name = "GAMESWON")
    private int gamesWon ;
    @Column(name = "LASTGAMEID")
    private int lastGameId;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGamesPlayed() {
        return gamesPlayed;
    }

    public void setGamesPlayed(int gamesPlayed) {
        this.gamesPlayed = gamesPlayed;
    }

    public int getGamesWon() {
        return gamesWon;
    }

    public void setGamesWon(int gamesWon) {
        this.gamesWon = gamesWon;
    }

    public int getLastGameId() {
        return lastGameId;
    }

    public void setLastGameId(int lastGameId) {
        this.lastGameId = lastGameId;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", name='" + name + '\'' +
                ", gamesPlayed=" + gamesPlayed +
                ", gamesWon=" + gamesWon +
                ", lastGameId=" + lastGameId +
                '}';
    }
}
