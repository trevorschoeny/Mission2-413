$("#btnSubmit").click(function () {

    var a = Number($("#assignments").val())
    var g = Number($("#groupProjects").val())
    var q = Number($("#quizzes").val())
    var e = Number($("#exams").val())
    var i = Number($("#intex").val())

    var output = (a * .55) + (g * .05) + (q * .1) + (e * .2) + (i * .1)

    alert("Final Grade: " + output + "%");
})