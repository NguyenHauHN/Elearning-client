/**
 * Created by haunguyen on 11/03/2018.
 */
app.controller('LearnLessonController', function ($scope, $state, QuestionsService, $timeout) {
  $scope.indexActiveQuestion = 0;
  $scope.idLesson = $state.params.id_lesson;
  $scope.idCourse = $state.params.id_course;
  var markEachQuestion = 0;
  $scope.totalMark = 0;
  $scope.rightAnswer = {};
  $scope.disableAllAnswer = false;
  $scope.numRightAnswer = 0;

  $scope.getQuestions = function () {
    QuestionsService.query({id_lesson: $scope.idLesson}, function (data) {
      $scope.learnLessonData = data;
      if ($scope.learnLessonData.total_question && $scope.learnLessonData.total_question > 0) {
        markEachQuestion = Math.round(100 / $scope.learnLessonData.total_question);
      }
    }, function (err) {
      console.log(err);
    });
  }

  $scope.getQuestions();

  $scope.nextQuestion = function () {
    $scope.disableAllAnswer = false;
    if ($scope.learnLessonData && $scope.learnLessonData.total_question && $scope.learnLessonData.total_question > 1) {
      $scope.indexActiveQuestion = $scope.indexActiveQuestion + 1;
    }
  }

  $scope.checkAnswerType4 = function (index, userAnswer) {
    if ($scope.learnLessonData && $scope.learnLessonData.questions && $scope.learnLessonData.questions.length > 0) {
      var question = $scope.learnLessonData.questions[index];
      var rightAnswer = question.answer;
      if (userAnswer) {
        $scope.emptyAnswerType = false;
        if (userAnswer == rightAnswer) {
          $scope.countMark();
          $scope.rightAnswer[index] = true;
        }
        else {
          $scope.rightAnswer[index] = false;
        }

        if (index == $scope.learnLessonData.total_question - 1) {
          $timeout(function () {
            alert("Bạn đã hoàn thành bài hoc với " + $scope.totalMark + " điểm:" +
              "\n" + $scope.numRightAnswer +
              " câu đúng và " + ($scope.learnLessonData.total_question - $scope.numRightAnswer) + " câu sai." +
              "\n Hãy cố gắng hơn nữa nhé!");
          }, 2000);
          $scope.savePathway();
        }

      }
      else {
        $scope.emptyAnswerType = true;

      }
    }


  };

  $scope.countMark = function () {
    $scope.numRightAnswer += 1;
    if ($scope.numRightAnswer < $scope.learnLessonData.total_question) {
      $scope.totalMark = $scope.totalMark + markEachQuestion;
    }
    else {
      $scope.totalMark = 100;
    }
  };


  $scope.chooseAnswer = function (idx, index, question, userAnswer) {
    $scope.disableAllAnswer = true;
    if (userAnswer === question.answer) {
      $scope.countMark();
      $scope.rightAnswer[index] = true;
    }
    else {
      // find right answer
      var listAnswer = [
        {
          "name": "answerA",
          "value": question.answerA
        },
        {
          "name": "answerB",
          "value": question.answerB
        },
        {
          "name": "answerC",
          "value": question.answerC
        },
        {
          "name": "answerD",
          "value": question.answerD
        }
      ];
      listAnswer.forEach(function (item) {
        if (item.value && item.value == question.answer) {
          $scope.rightAnswer[idx + item.name] = true;
        }
      });
      $scope.rightAnswer[index] = false;
    }

    if ( idx == $scope.learnLessonData.total_question - 1) {
      $timeout(function () {
        alert("Bạn đã hoàn thành bài hoc với " + $scope.totalMark + " điểm:" +
          "\n" + $scope.numRightAnswer +
          " câu đúng và " + ($scope.learnLessonData.total_question - $scope.numRightAnswer) + " câu sai." +
          "\n Hãy cố gắng hơn nữa nhé!");
      }, 2000);

      $scope.savePathway();
    }
  }

  $scope.savePathway = function () {
    var idUser = localStorage.getItem('iduser');

    QuestionsService.post({}, {
      "iduser": idUser,
      "idcourse": $scope.idCourse,
      "idlesson": $scope.idLesson,
      "score": $scope.totalMark
    }, function (data) {
    }, function (err) {
      console.log(err);
    })
  }
});
