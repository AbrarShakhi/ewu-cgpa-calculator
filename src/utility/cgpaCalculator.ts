
interface Course {
  name: string;
  grade: string;
  course_credit: number;
}


class CgpaCalculator {
  static calculate(courses: Course[]): string {
    let totalGpaCredit = 0;
    let totalCredit = 0;
    const gradingSystem = CgpaCalculator.gradingSystem();

    for (const row of courses) {
      const gpa = gradingSystem[row.grade][0];
      const credit = row.course_credit;
      if (gpa === 0.0) {
        return "0.00";
      }
      totalGpaCredit += gpa * credit;
      totalCredit += credit;
    }

    return totalCredit > 0 ? (totalGpaCredit / totalCredit).toFixed(2) : "0.00";
  }

  static gradingSystem(): Record<string, [number, number, number]> {
    return {
      "A+": [4.0, 100, 80],
      A: [3.75, 79, 75],
      "A-": [3.5, 74, 70],
      "B+": [3.25, 69, 65],
      B: [3.0, 64, 60],
      "B-": [2.75, 59, 55],
      "C+": [2.5, 54, 50],
      C: [2.25, 49, 45],
      D: [2.0, 44, 40],
      F: [0.0, 39, 0],
    };
  }
}

export default CgpaCalculator;
export type { Course };
