"use client";

import { useState } from "react";

import CgpaCalculator from "@/utility/cgpaCalculator";
import { Course } from "@/utility/cgpaCalculator";
import funcState from "@/utility/state";

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
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl  text-center text-gray-800 mb-8">
          Add Courses and Calculate CGPA
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="course_name"
                className="block text-sm font-medium text-gray-700"
              >
                Course Name
              </label>
              <input
                type="text"
                name="name"
                id="course_name"
                placeholder="Enter Course Name"
                value={newCourseInput.get.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="grade"
                className="block text-sm font-medium text-gray-700"
              >
                Grade
              </label>
              <select
                name="grade"
                id="grade"
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {Object.entries(gradingSystem).map(
                  ([grade, [gpa, min, max]]) => (
                    <option key={grade} value={grade}>
                      {grade} ({gpa} GPA, {min}-{max} Marks)
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="course_credit"
                className="block text-sm font-medium text-gray-700"
              >
                Credit Hours
              </label>
              <input
                type="number"
                name="course_credit"
                id="course_credit"
                placeholder="Enter Credit Hours"
                value={newCourseInput.get.course_credit}
                onChange={handleInputChange}
                step="0.5"
                min="0.5"
                max="5.0"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
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
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Add Course
          </button>

          {courses.get.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Added Courses
              </h3>
              <div className="space-y-3">
                {courses.get.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-md flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-500">#{index + 1}</span>
                      <div>
                        <p className="font-medium text-gray-900">
                          {course.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Grade: {course.grade} | Credits:{" "}
                          {course.course_credit}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        courses.set(courses.get.filter((_, i) => i !== index));
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() =>
                cgpaResult.set(CgpaCalculator.calculate(courses.get))
              }
              className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
            >
              Calculate CGPA
            </button>

            <div className="text-right">
              <p className="text-sm text-gray-500">Your CGPA</p>
              <p className="text-3xl font-bold text-gray-900">
                {cgpaResult.get}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
