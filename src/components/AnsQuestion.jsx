import React from "react";
import QuestionList from "./QuestionList";
import Ans from "./Ans";
import "../style/AnsQuestion.css";
import QuoraNav from "./QuoraNav";
import { useState, useEffect } from "react";
import Errror from "./Error";

const SelectedQuestion = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  // console.log("Checking question", selectedQuestion);

  useEffect(() => {
    const questionsId = JSON.parse(localStorage.getItem("questionId"));
    if (questionsId) {
      setSelectedQuestion(questionsId.question);
    }
  }, [selectedQuestion]);
  return (
    <>
      <div className="selectedQuestion-container">
        <h2>Selected Question : </h2>
        <div className="selectedQuestion">{selectedQuestion}</div>
      </div>
    </>
  );
};

const PrevAllAnswer = ({ allAnswer }) => {
  const [prevAnswer, setPrevAnswer] = useState([]);
  // console.log("Checking question for all prev", prevAnswer);

  useEffect(() => {
    const questionsId = JSON.parse(localStorage.getItem("questionId"));
    // console.log("checking prev", questionsId);
    if (questionsId) {
      const newAnss = questionsId.answer.map((ans) => {
        return {
          newAns: ans.newAns,
          newAnsBy: ans.newAnsBy,
        };
      });
      setPrevAnswer(newAnss);
    }
  }, []);
  const answerToDisplay =
    allAnswer && allAnswer.length ? allAnswer : prevAnswer;

  return (
    <>
      <div className="prev-ans-container">
        <h2>Previous all Answer : </h2>
        {answerToDisplay
          .filter((ele) => ele.newAns.trim() !== "")
          .reverse()
          .map((ele, idx) => (
            <div key={idx}>
              <div className="prev-ans-ansBy">
                <div className="prev-ans">Answer : {ele.newAns}</div>
                <div className="prev-ansBy">Answered by : {ele.newAnsBy}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

function AnsQuestion() {
  const [loginUser, setLoginUser] = useState([]);
  const [allAnswer, setAllAnswer] = useState([]);
  // console.log("Quara Page", loginUser);

  useEffect(() => {
    const storedLogin = JSON.parse(localStorage.getItem("user_login"));
    // console.log("Stored login data:", storedLogin);

    if (storedLogin) {
      setLoginUser(storedLogin[0].name);
    }
  }, []);

  return (
    <>
      {loginUser.length === 0 ? (
        <Errror />
      ) : (
        <>
          <QuoraNav />
          <SelectedQuestion />
          <div className="prvQs-ans">
            <div className="prv-ans-conatiner">
              <PrevAllAnswer allAnswer={allAnswer} />
            </div>
            <div className="ans-conatiner">
              {" "}
              <Ans setAllAnswer={setAllAnswer} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AnsQuestion;