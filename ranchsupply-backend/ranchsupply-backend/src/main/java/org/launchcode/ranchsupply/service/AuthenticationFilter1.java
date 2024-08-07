package org.launchcode.ranchsupply.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface AuthenticationFilter1 {
    boolean preHandle(HttpServletRequest request,
                      HttpServletResponse response,
                      Object handler) throws IOException;
}
