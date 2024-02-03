package com.sahil.courseapp.service;

import java.util.List;
import java.util.Optional;

import com.sahil.courseapp.entities.Course;

public interface CourseService {
	
	public List<Course> getCourses();

	public Course getCourse(long courseId);

	public Course addCourse(Course course);

	public Course updateCourse(Course course);

	public Void deleteCourse(long courseId);	
}
