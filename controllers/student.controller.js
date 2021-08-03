var marksdb = {
    student1: {
        name: "Jack",
        maths: 67,
        science: 75,
        tamil: 70,
        id: 1
    },
     student2: {
        name: "Mary",
        maths: 45,
        science: 37,
        tamil: 75,
        id: 2
         
    },
     student3: {
        name: "Peter",
        maths: 80,
        science: 85,
        tamil: 95 ,
        id: 3
         
    },
     student4: {
        name: "kumar",
        maths: 28,
        science: 35,
        tamil: 64 ,
        id: 4
         
    }
}

exports.create = function(req, res) {
var newmarks = req.body;
marksdb["student" + newmarks.id] = newmarks;
console.log("--->After Post, marksdb:\n" + JSON.stringify(marksdb, null, 6));
res.end("Post Successfully: \n" + JSON.stringify(newmarks, null,6));
};

exports.findAll = function(req, res) {
console.log("--->Find All: \n" + JSON.stringify(marksdb, null,6));
res.end("All marksdb: \n" + JSON.stringify(marksdb, null,6));  
};

exports.findOne = function(req, res) {
var customer = marksdb["student" + req.params.id];
console.log("--->Find  student: \n" + JSON.stringify(student, null, 6));
res.end( "Find a  student:\n" + JSON.stringify(student, null, 6));
};

exports.update = function(req, res) {
var id = parseInt(req.params.id);
var updatedmarks = req.body; 
if(marksdb["student" + id] != null){
// update data
marksdb["student" + id] = updatedmarks;

console.log("--->Update Successfully, marksdb: \n" + JSON.stringify(marksdb, null, 6))

// return
res.end("Update Successfully! \n" + JSON.stringify(updatedmarks, null, 6));
}else{
res.end("Don't Exist student:\n:" + JSON.stringify(updatedmarks, null, 6));
}
};
exports.delete = function(req, res) {
var deletestudent = marksdb["student" + req.params.id];
delete marksdb["customer" + req.params.id];
console.log("--->After deletion, student list:\n" + JSON.stringify(marksdb, null, 6) );
res.end( "Deleted student: \n" + JSON.stringify(deletestudent, null, 6));
};