app.getStudents=(req,res)=>{
    res.json(students)
}

app.getStudentById=(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    res.json(student);
}

