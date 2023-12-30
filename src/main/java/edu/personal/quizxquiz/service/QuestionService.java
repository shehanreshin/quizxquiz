package edu.personal.quizxquiz.service;

import edu.personal.quizxquiz.entity.Question;

import java.util.List;

public interface QuestionService {
    List<Question> getAllQuestions();
    List<Question> getAllQuestionsByCategory(String category);
}
