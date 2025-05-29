"use client";
import { useState } from "react";
import "./cgpaCalculator.css";
import CgpaCalculator from "@/utility/cgpaCalculator";
import { Course } from "@/utility/cgpaCalculator";
import funcState from "@/utility/state";
import Image from "next/image";

export default function EwuCgpaCalculator() {
  const gradingSystem = CgpaCalculator.gradingSystem();
  const resetCourseInput = {
    name: "Course 1",
    grade: "A+",
    course_credit: 3.0,
  };

  const cgpaResult = funcState(useState<string>("0.00"));

  const courses = funcState(useState<Course[]>([]));
  const newCourseInput = funcState(useState<Course>(resetCourseInput));

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    newCourseInput.set((prev) => ({
      ...prev,
      [name]: name === "course_credit" ? Number(value) : value,
    }));
  };

  return (
    <div className="cgpa-calculator-container">
      <div className="calculator-card">
        <h2 className="calculator-title">CGPA Calculator</h2>

        <div className="add-course-section">
          <h3 className="section-heading">Add New Course</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="course_name">Course Name</label>
              <input
                type="text"
                id="course_name"
                name="name"
                placeholder="e.g., Calculus I"
                value={newCourseInput.get.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="grade">Grade</label>
              <select id="grade" name="grade" onChange={handleInputChange}>
                {Object.entries(gradingSystem).map(
                  ([grade, [gpa, min, max]]) => (
                    <option key={grade} value={grade}>
                      {grade} ({gpa} GPA)
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="course_credit">Credit Hours</label>
              <input
                type="number"
                id="course_credit"
                name="course_credit"
                placeholder="e.g., 3.0"
                step="0.5"
                min="0.5"
                max="5.0"
                value={newCourseInput.get.course_credit}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            className="add-course-button"
            onClick={() => {
              courses.set([
                ...courses.get,
                {
                  name: newCourseInput.get.name,
                  grade: newCourseInput.get.grade,
                  course_credit: newCourseInput.get.course_credit,
                },
              ]);
              newCourseInput.set({
                ...resetCourseInput,
                name: `Course ${courses.get.length + 2}`,
              });
            }}
          >
            Add Course
          </button>
        </div>

        {courses.get.length > 0 && (
          <div className="added-courses-section">
            <h3 className="section-heading">Added Courses</h3>
            <ul className="courses-list">
              {courses.get.map((course, index) => (
                <li key={index} className="course-item">
                  <div className="course-info">
                    <span className="course-index">#{index + 1}</span>
                    <div>
                      <p className="course-name">{course.name}</p>
                      <p className="course-details">
                        Grade: {course.grade} | Credits: {course.course_credit}
                      </p>
                    </div>
                  </div>
                  <button
                    className="remove-course-button"
                    onClick={() => {
                      courses.set(courses.get.filter((_, i) => i !== index));
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="calculate-section">
          <button
            className="calculate-button"
            onClick={() =>
              cgpaResult.set(CgpaCalculator.calculate(courses.get))
            }
          >
            Calculate CGPA
          </button>
          <div className="cgpa-result">
            <p className="cgpa-label">Your CGPA</p>
            <p className="cgpa-value">{cgpaResult.get}</p>
          </div>
        </div>
      </div>

      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-list">
            <a
              className="box github-link"
              href="https://github.com/abrarShakhi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              AbrarShakhi
            </a>
            <a
              className="box portal-link"
              href="https://portal.ewubd.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Portal
            </a>
            <a
              className="box website-link"
              href="https://ewubd.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Go to ewubd.edu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
