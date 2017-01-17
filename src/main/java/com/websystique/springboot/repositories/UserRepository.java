package com.websystique.springboot.repositories;

import com.websystique.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by mihai.huminiuc on 1/16/2017.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByName(String name);

}