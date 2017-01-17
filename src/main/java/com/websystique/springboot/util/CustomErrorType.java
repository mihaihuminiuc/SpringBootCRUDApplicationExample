package com.websystique.springboot.util;

/**
 * Created by mihai.huminiuc on 1/16/2017.
 */
public class CustomErrorType {

    private String errorMessage;

    public CustomErrorType(String errorMessage){
        this.errorMessage = errorMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

}
