package edu.personal.quizxquiz.dao;

import edu.personal.quizxquiz.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionDao extends JpaRepository<Question, Integer> {
}
