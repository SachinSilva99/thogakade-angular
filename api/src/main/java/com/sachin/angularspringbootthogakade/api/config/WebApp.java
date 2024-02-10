package com.sachin.angularspringbootthogakade.api.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebApp {
    @Bean
    public ModelMapper getModelMapper(){
        return new ModelMapper();
    }
}
