package edu.personal.quizxquiz.controller;

import edu.personal.quizxquiz.model.QuestionWrapper;
import edu.personal.quizxquiz.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("quiz")
public class QuizController {
    @Autowired
    private QuizService quizService;

    @PostMapping("create")
    public ResponseEntity<Boolean> createQuiz(@RequestParam String category, @RequestParam int noOfQuestions, @RequestParam String title) {
        return quizService.createQuiz(category, noOfQuestions, title);
    }

    @GetMapping("get/{id}")
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable int id) {
        return quizService.getQuizQuestions(id);
    }
}
