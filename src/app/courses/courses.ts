export interface ICourses{
    course: String,
    student?: number,
    isDisable?: boolean,
    details?: String 
}

export interface ICourse{
    data:[],
    prev?: string,
    next?: string 
}