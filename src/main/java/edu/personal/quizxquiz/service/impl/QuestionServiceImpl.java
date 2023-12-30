package edu.personal.quizxquiz.service.impl;

import edu.personal.quizxquiz.dao.QuestionDao;
import edu.personal.quizxquiz.entity.Question;
import edu.personal.quizxquiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionDao questionDao;

    @Override
    public List<Question> getAllQuestions() {
        return questionDao.findAll();
    }

    @Override
    public List<Question> getAllQuestionsByCategory(String category) {
        return questionDao.findByCategory(category);
    }
}
