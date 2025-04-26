export const sendParams = (numberOfQuestions, diffcultyLevel, topic) => {
  console.log(numberOfQuestions, diffcultyLevel, topic);
  return fetch("http://localhost:3001/api/prompt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      number: numberOfQuestions,
      level: diffcultyLevel,
      testTopic: topic,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        console.error("Error during fetching data");
        return Promise.reject(`HTTP error ${response}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Server response", data);
      return data;
    })
    .catch((error) => {
      console.error("Error", error);
    });
};
