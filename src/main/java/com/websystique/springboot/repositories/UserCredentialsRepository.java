package com.websystique.springboot.repositories;

import com.websystique.springboot.model.User;
import com.websystique.springboot.model.UserCredentials;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by humin on 2/7/2017.
 */
public interface UserCredentialsRepository extends JpaRepository<UserCredentials, Long> {

    UserCredentials findByUsername(String username);

}