package com.websystique.springboot.service.userCredentials;

import com.websystique.springboot.model.UserCredentials;
import com.websystique.springboot.repositories.UserCredentialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * Created by humin on 2/7/2017.
 */

@Service("userCredentialsService")
@Transactional
public class userCredentialsServiceImpl extends UserCredentials {

    @Autowired
    private UserCredentialsRepository userCredentialsRepository;

    public UserCredentials findById(Long id){return userCredentialsRepository.findOne(id);}

    public UserCredentials findByUserName(String userName){return userCredentialsRepository.findByUserName(userName);}

    void saveUserCredentials(UserCredentials userCredentials){userCredentialsRepository.save(userCredentials);}

    void updateUserCredentials(UserCredentials userCredentials){saveUserCredentials(userCredentials);}

    void deleteUserCredentialsById(Long id){userCredentialsRepository.delete(id);}

    boolean isUserCredentialsExist(UserCredentials userCredentials){return findByUserName(userCredentials.getUsername())!=null;}

}
