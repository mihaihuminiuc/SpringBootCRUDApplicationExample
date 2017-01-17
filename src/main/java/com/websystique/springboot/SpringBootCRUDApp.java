package com.websystique.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.websystique.springboot.configuration.JpaConfiguration;

/**
 * Created by mihai.huminiuc on 1/16/2017.
 */
@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages={"com.websystique.springboot"})
public class SpringBootCRUDApp {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootCRUDApp.class, args);
    }
}