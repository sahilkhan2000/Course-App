package com.sahil.courseapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sahil.courseapp.entities.Course;
import com.sahil.courseapp.repo.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	CourseRepository courseRepository;

	@Override
	public List<Course> getCourses() {
		
		return courseRepository.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
		
		return courseRepository.getReferenceById(courseId);
	}

	@Override
	public Course addCourse(Course course) {
		
		return courseRepository.save(course);
	}

	@Override
	public Course updateCourse(Course course) {
		
		return courseRepository.save(course);
	}

	@Override
	public Void deleteCourse(long courseId) {
		Course entity = courseRepository.getReferenceById(courseId);
		courseRepository.delete(entity);
		return null;
	}

}
