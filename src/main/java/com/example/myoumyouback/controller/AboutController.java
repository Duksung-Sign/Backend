package com.example.myoumyouback.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class AboutController {

    @GetMapping("/api/about")
    public Map<String, Object> getAboutInfo() {
        return Map.of(
                "title", "MyouMyou 수어 게임",
                "description", "이 프로젝트는 수어 학습을 위한 게임 콘텐츠입니다.",
                "team", new String[]{"전하경", "팀원2", "팀원3"}
        );
    }
}
