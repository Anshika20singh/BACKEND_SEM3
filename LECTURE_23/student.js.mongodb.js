use("UniversityDB")

// db.students.find()

db.students.aggregate(
    [
        {
            $match: {
                course: "BCA"
            }

        }
        ,{
            $project:{
                name:1,
                section:1,
                marks:1,
                semester:1,
                _id:0
            }

        }
        ,{
            $group:{
                _id:"$semester",
                totalMarks:{$sum:"$marks"},
                averageMarks:{$avg:"$marks"},
                maxMarks:{$max:"$marks"},
                minMarks:{$min:"$marks"}
            }

        },{
            $sort:{
                // _id:-1 
                maxMarks:-1
            }  
        }


    ]
)

// db.students.aggregate(
//     [
//         {
//             $match: {
//                 course: "Btech"
//             }

//         }
//         ,{
//             $project:{
//                 name:1,
//                 section:1,
//                 marks:1,
//                 semester:1,
//                 _id:0
//             }

//         }
//         ,{
//             $group:{
//                 _id:"$marks",
//                 totalMarks:{$sum:"$marks"},
//                 averageMarks:{$avg:"$marks"},
//                 maxMarks:{$max:"$marks"},
//                 minMarks:{$min:"$marks"},
//                 totalStudents:{$sum:1}
//             }

//         }

//     ]
// )