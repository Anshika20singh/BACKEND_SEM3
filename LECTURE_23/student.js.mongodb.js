use("UniversityDB")

db.students.find()

db.students.aggregate(
    [
        {
            $match:{
                course:"BCA"
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
                minMarks:{$min:"$marks"},
                totalStudents:{$sum:1}
            }
        },{
            $sort:{
                maxMarks:-1 //1 for acsending order and -1 for descending order
            }
        }
        ,{
            $limit:3
        }
        ,{
            $count:"totalMarks"
        }
    ]
)




db.students.getIndexes()
db.students.createIndex(
    {
        contact:1
    }
)