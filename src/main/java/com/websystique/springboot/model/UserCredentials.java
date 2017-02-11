package com.websystique.springboot.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by mihai.huminiuc on 1/18/2017.
 */
@Entity
@Table(name="APP_USER_CREDENTIAL")
public class UserCredentials  implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    @Column(name="USERNAME", nullable=false)
    private String username;

    @NotEmpty
    @Column(name="PASSWORD", nullable=false)
    private String password;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPwassword(String passsword){this.password=passsword;}


}
