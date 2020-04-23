export function handlerModifyAnswerVotes(answers, answerId, increase) {
    console.log(answers, answerId, increase)
  return answers.map(answer => {
    if(answer.id !== answerId) {
      return answer;
    } else {
      return {
        ...answer, upvotes: answer.upvotes + increase
      };
    }
  });
};
