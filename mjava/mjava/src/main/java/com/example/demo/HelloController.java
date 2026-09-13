package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {

        return """
            <html>
            <body>

            <h1>Java Spring Boot Application</h1>

            <h2>Running inside Docker</h2>

            <p>Deployed on AWS EC2</p>

            <p>Application Port: 8080</p>

            </body>
            </html>
            """;
    }

    @GetMapping("/health")
    public String health() {

        return "Java application is UP";
    }
}
