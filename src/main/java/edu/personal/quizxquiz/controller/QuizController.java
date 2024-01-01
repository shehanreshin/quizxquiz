package edu.personal.quizxquiz.controller;

import edu.personal.quizxquiz.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("quiz")
public class QuizController {
    @Autowired
    private QuizService quizService;

    @PostMapping("create")
    public ResponseEntity<Boolean> createQuiz(@RequestParam String category, @RequestParam int noOfQuestions, @RequestParam String title) {
        return quizService.createQuiz(category, noOfQuestions, title);
    }
}
