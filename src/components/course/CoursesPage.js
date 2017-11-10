import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    //these bind calls could be put right on the input element onChange, but that causes a performance hit since each time bind is called it creates a copy of the function. Minor, but worth noting. If these lines were not here, the 'this' context would refer to the input element that's making the calls to onTitleChange/onClickSave
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(){
    this.props.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired, //when you have mapDispatchToProps, you do not need this line
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

/* This function takes the state that's in redux and maps it to this classes props so it can be accessed anywhere.
Might be more accurate to name this mapReduxStateToComponentProps but that's a mouthful

The state.courses comes from the rootReducer combineReducers function */
function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

/* Determines what actions are available in this component. Puts this createCourse function in props
 * This function is optional. When you DON'T define it, the connect function below injects a dispatch() function onto the props.
 *
 * When you DO define it, then there is NOT a dispatch() function added to the props
 *
 * Dispatchers dispatch actions.
  * */
function mapDispatchToProps(dispatch){
  return {
    createCourse: (course) => dispatch(courseActions.createCourse(course))
  };
}

//two parentheses one after another means two function calls
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
//equivalent to this
//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectedStateAndProps(CoursesPage);
