package com.websystique.springboot.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;

/**
 * Created by mihai.huminiuc on 1/18/2017.
 */
@Entity
@Table(name="APP_USER_CREDENTIAL")
public class UserCredentials {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    @Column(name="USERNAME", nullable=false)
    private String username;

    @NotEmpty
    @Column(name="PASSWORD", nullable=false)
    private String pwassword;

}
