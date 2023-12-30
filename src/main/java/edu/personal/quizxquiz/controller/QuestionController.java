package edu.personal.quizxquiz.controller;

import edu.personal.quizxquiz.dao.QuestionDao;
import edu.personal.quizxquiz.entity.Question;
import edu.personal.quizxquiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @RequestMapping("all-questions")
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @RequestMapping("category/{category}")
    public List<Question> getQuestionsByCategory(@PathVariable String category) {
        return questionService.getAllQuestionsByCategory(category);
    }
}
