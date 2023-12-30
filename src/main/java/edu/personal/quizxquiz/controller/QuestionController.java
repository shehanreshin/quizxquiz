package edu.personal.quizxquiz.controller;

import edu.personal.quizxquiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @RequestMapping("all-questions")
    public String getAllQuestions() {
        return questionService.getAllQuestions();
    }
}
