// Function to perform create course operation
// 1.write a function which accepts a parameter  for 
// 2.Export the function for reusing it in other file
export function createCourse(course){
    return{type:'CREATE_COURSE',course:course};
}