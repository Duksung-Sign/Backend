package com.example.myoumyouback.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class SupportController {

    @GetMapping("/api/support")
    public Map<String, String> getSupportInfo() {
        return Map.of(
                "email", "help@myoumyou.com",
                "message", "문의는 위 이메일로 보내주세요."
        );
    }
}
