package com.websystique.springboot.service.userCredentials;

import com.websystique.springboot.model.UserCredentials;

/**
 * Created by humin on 2/7/2017.
 */
public interface UserCredentialsService {

    UserCredentials findById(Long id);

    UserCredentials findByUserName(String name);

    void saveUserCredentials(UserCredentials userCredentials);
    
    void updateUserCredentials(UserCredentials userCredentials);

    void deleteUserCredentialsById(Long id);

    boolean isUserCredentialsExist(UserCredentials userCredentials);
}
