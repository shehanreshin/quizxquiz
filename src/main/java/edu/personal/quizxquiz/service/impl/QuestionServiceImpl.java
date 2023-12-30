package edu.personal.quizxquiz.service.impl;

import edu.personal.quizxquiz.service.QuestionService;
import org.springframework.stereotype.Service;

@Service
public class QuestionServiceImpl implements QuestionService {
    @Override
    public String getAllQuestions() {
        return "questions";
    }
}
