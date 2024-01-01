package edu.personal.quizxquiz.service;

import edu.personal.quizxquiz.model.QuestionWrapper;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface QuizService {
    public ResponseEntity<Boolean> createQuiz(String category, int noOfQuestions, String title);

    ResponseEntity<List<QuestionWrapper>> getQuizQuestions(int id);
}
