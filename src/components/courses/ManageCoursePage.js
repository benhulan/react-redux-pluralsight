import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

function ManageCoursePage({ courses, authors, loadCourses, loadAuthors }) {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed", error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed", error);
      });
    }
  }, []);

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
}

ManageCoursePage.propTypes = {
  authors: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
