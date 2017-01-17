package com.websystique.springboot.service;

import com.websystique.springboot.model.User;

import java.util.List;

/**
 * Created by mihai.huminiuc on 1/16/2017.
 */
public interface UserService {

    User findById(Long id);

    User findByName(String name);

    void saveUser(User user);

    void updateUser(User user);

    void deleteUserById(Long id);

    void deleteAllUsers();

    List<User> findAllUsers();

    boolean isUserExist(User user);

}
