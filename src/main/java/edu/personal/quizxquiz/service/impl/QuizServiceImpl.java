package edu.personal.quizxquiz.service.impl;

import edu.personal.quizxquiz.dao.QuestionDao;
import edu.personal.quizxquiz.dao.QuizDao;
import edu.personal.quizxquiz.model.Question;
import edu.personal.quizxquiz.model.Quiz;
import edu.personal.quizxquiz.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizServiceImpl implements QuizService {
    @Autowired
    private QuizDao quizDao;
    @Autowired
    private QuestionDao questionDao;

    @Override
    public ResponseEntity<Boolean> createQuiz(String category, int noOfQuestions, String title) {
        Quiz quiz = new Quiz();
        quiz.setTitle(title);

        List<Question> questions = questionDao.findRandomQuestionsByCategory(category, noOfQuestions);
        quiz.setQuestions(questions);
        quizDao.save(quiz);

        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
