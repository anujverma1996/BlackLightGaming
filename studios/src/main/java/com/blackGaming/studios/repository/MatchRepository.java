package com.blackGaming.studios.repository;

import com.blackGaming.studios.dao.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchRepository extends JpaRepository<Match,Integer> {
    //@Query("select m.matchId,m.USER1,m.USER2,DATE_FORMAT(m.MATCHSTARTTIME,  '%d-%m-%y %h:%i %p')  from Match m where m.matchId= ?1" )
    @Query("select m from Match m where m.matchId= ?1" )
    Match getMatchDetails(int matchId);
}
