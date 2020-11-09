package com.blackGaming.studios.repository;

import com.blackGaming.studios.dao.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    @Query("select u from User u where u.userId= ?1" )
    User getUserDetails(int userId);
}
