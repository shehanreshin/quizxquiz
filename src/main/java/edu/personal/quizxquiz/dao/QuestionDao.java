package edu.personal.quizxquiz.dao;

import edu.personal.quizxquiz.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionDao extends JpaRepository<Question, Integer> {
    List<Question> findByCategory(String category);

    @Query(value = "SELECT * FROM question WHERE category=:category ORDER BY RAND() LIMIT :noOfQuestions", nativeQuery = true)
    List<Question> findRandomQuestionsByCategory(String category, int noOfQuestions);
}
