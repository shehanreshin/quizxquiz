package edu.personal.quizxquiz.controller;

import edu.personal.quizxquiz.model.Question;
import edu.personal.quizxquiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @RequestMapping("all")
    public ResponseEntity<List<Question>> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @RequestMapping("category/{category}")
    public ResponseEntity<List<Question>> getQuestionsByCategory(@PathVariable String category) {
        return questionService.getAllQuestionsByCategory(category);
    }

    @PostMapping("add")
    public ResponseEntity<Boolean> addQuestion(@RequestBody Question question) {
        return questionService.addQuestion(question);
    }
}
