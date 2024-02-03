package com.sahil.courseapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sahil.courseapp.entities.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
