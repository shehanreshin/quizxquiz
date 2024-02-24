package edu.personal.quizxquiz.service;

import edu.personal.quizxquiz.model.Question;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface QuestionService {
    ResponseEntity<List<Question>> getAllQuestions();
    ResponseEntity<List<Question>> getAllQuestionsByCategory(String category);

    ResponseEntity<Boolean> addQuestion(Question question);
}
