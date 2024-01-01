package edu.personal.quizxquiz.dao;

import edu.personal.quizxquiz.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizDao extends JpaRepository<Quiz, Integer> {
}
