import React, { Component } from 'react';
import * as CourseAction from "./Action/CourseAction";
import{connect} from "react-redux";
class Courses extends Component{
    constructor(){
        super();
        this.state={
            course:{
                titel:''
            }
        }
        this.CourseChange=this.CourseChange.bind(this);
        this.CourseSave=this.CourseSave.bind(this);
    }
    CourseChange(event){
        const coursestate=this.state.course;
        coursestate.titel=event.target.value;
        this.setState({
            course:coursestate
        });
    }
    CourseSave(event){
        this.props.createCourse(this.state.course);
    }
    render(){
        return(
            <div>
                <h1>THIS IS REDUX COMPONENT</h1>
                {this.props.courses.map((value,index)=>{
                    return <div key={index}>{value.titel}</div>
                    }
                )}
                <h4>ADD USERS</h4>
                Enter Users Name:<input type="text" onChange={this.CourseChange}/>
                {/* <input type="submit" value="Add Users" onClick={this.CourseSave}/> */}
                <input type="sumbit" value="ADD USERS" onClick={this.CourseSave}/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        courses:state.courses
    };
}
function mapDispatchToProps(dispatch){
    return{
        createCourse:course=>dispatch(CourseAction.createCourse(course))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Courses);
