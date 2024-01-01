package edu.personal.quizxquiz.service;

import org.springframework.http.ResponseEntity;

public interface QuizService {
    public ResponseEntity<Boolean> createQuiz(String category, int noOfQuestions, String title);
}
