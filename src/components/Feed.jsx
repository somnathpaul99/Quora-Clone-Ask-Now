import React from "react";
import QuestionsAnswers from "./QuestionsAnswers";
import QuestionList from "./QuestionList";
import "../style/Feed.css";
import { useState, useEffect } from "react";

function Feed() {
  const [defaultQuestionAns, setDefaultQuestionAns] = useState([]);

  useEffect(() => {
    // Check if the questionAndAnswers exists in localStorage
    const storedQuestionAns = localStorage.getItem("questionAndAnswers");
    if (storedQuestionAns) {
      setDefaultQuestionAns(JSON.parse(storedQuestionAns));
    } else {
      // If it doesn't exist, set it to the default array and store in localStorage
      const questionAndAnswers = [
        {
          id: 1,
          answeredBy: "Somnath Paul",
          questionedBy: "Akash Sharma",
          question: "What is the famous food of Kolkata?",
          answer: [
            { newAns: "Mishti Doi", newAnsBy: "Somnath Paul" },
            { newAns: "Rosogolla", newAnsBy: "Papai Paul" },
          ],
          reaction: "555",
          isReacted: false,
        },
        {
          id: 2,
          answeredBy: "Kamal Rastogi",
          questionedBy: "Arun Tiwari",
          question: "What is the famous food of Agra?",
          answer: [
            {
              newAns: "Petha is the famous sweet of Agra.",
              newAnsBy: "Kamal Rastogi",
            },
          ],
          reaction: "780",
          isReacted: false,
        },
        {
          id: 3,
          answeredBy: "",
          questionedBy: "Somnath Paul",
          question: " What is the purpose of version control systems like Git?",
          answer: [],
          reaction: "460",
          isReacted: false,
        },
        {
          id: 4,
          answeredBy: "Somnath Paul",
          questionedBy: "Alipriya Lodh",
          question: " What is the capital of Australia?",
          answer: [
            {
              newAns: "The capital of Australia is Canberra.",
              newAnsBy: "Somnath Paul",
            },
          ],
          reaction: "870",
          isReacted: false,
        },
        {
          id: 5,
          answeredBy: "Papai Paul",
          questionedBy: "Kajal Sikdar",
          question: "Who painted the Mona Lisa?",
          answer: [
            {
              newAns: "The Mona Lisa was painted by Leonardo da Vinci.",
              newAnsBy: "Papai Paul",
            },
          ],
          reaction: "899",
          isReacted: false,
        },
      ];
      setDefaultQuestionAns(questionAndAnswers);
      localStorage.setItem(
        "questionAndAnswers",
        JSON.stringify(questionAndAnswers)
      );
    }
  }, []);
  return (
    <>
      <div className="post-feed">
        <div className="left-container">
          <QuestionsAnswers />
        </div>
        <div className="right-container">
          <QuestionList />
        </div>
      </div>
    </>
  );
}

export default Feed;
