import React from 'react';

export function App({ questions, answers, handlerModifyAnswerVotes }) {
  return (
    <>
      <h1>Q&A</h1>
      {
        questions.map(question => (
          <div key={question.id}>
            <h3>{question.content}</h3>

            <div>
              {
                answers
                  .filter(answer => answer.questionId === question.id)
                  .map(({ id, content, upvotes }) => (
                     <div key={id}>
                       <span>{content} - {upvotes}</span>
                       <button onClick={() => handlerModifyAnswerVotes(id, 1)}>+</button>
                       <button onClick={() => handlerModifyAnswerVotes(id, -1)}>-</button>
                     </div>
                   )
                  )
              }
            </div>
          </div>
        ))
      }
    </>
  )
}

