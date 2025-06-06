package com.example.myoumyouback.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class HowtoController {

    @GetMapping("/api/howto")
    public Map<String, Object> getHowtoInfo() {
        return Map.of(
                "steps", new String[]{
                        "1. 시작 버튼을 누릅니다.",
                        "2. 웹캠을 켜고 손 모양을 따라 합니다.",
                        "3. 인식된 결과를 확인합니다."
                }
        );
    }
}
