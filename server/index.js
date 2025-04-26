require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/api/prompt", async (req, res) => {
  const { number, level, testTopic } = req.body;
  console.log(`Otrzymano dane ${number}, ${level}, ${testTopic}`);

  const apiKey = process.env.API_KEY;
  const grokApiUrl = "https://api.x.ai/v1/chat/completions";

  if (!apiKey) {
    return res.status(500).send("Error with api key");
  }

  const prompt = `Wygeneruj ${number} pytan z ${testTopic} z 4 opcjami a, b, c, d i wskaż poprawną odpowiedź. Poziom trudności testu - ${level}. Napisz tylko pytania i nic więcej. Cały test prześlij w formacie JSON gdzie klucz to questions i tablica obiektow jako warosc a w pojedynych obiektach question options i correct_answer jako klucze. Test w jezyku polskim`;

  const requestBody = {
    model: "grok-2",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 2000,
    temperature: 0.7,
  };

  try {
    const response = await axios.post(grokApiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const testData = response.data.choices[0].message.content;

    // // console.log(testData);
    // parseTest(testData);
    res.json(parseTest(testData));
  } catch (error) {
    console.error("Błąd:", error.response?.data || error.message);
    res
      .status(500)
      .send(`Wystąpił błąd: ${error.response?.data?.message || error.message}`);
  }
});

const parseTest = (data) => {
  console.log(data);
  const questionArray = [];
  const answersArray = [];
  const optionsArray = [];
  const lines = data.split("\n");
  const slicedLines = lines.slice(1, -1);
  const readyToJSON = slicedLines.join("\n");
  const jsonData = JSON.parse(readyToJSON);

  let N = jsonData.questions.length;
  for (let i = 0; i < N; i++) {
    const questionObj = jsonData.questions[i];
    if (
      questionObj &&
      questionObj.question &&
      questionObj.options &&
      questionObj.correct_answer
    ) {
      questionArray.push(questionObj.question);
      optionsArray.push(questionObj.options);
      answersArray.push(questionObj.correct_answer);
    }
  }
  console.log(questionArray);
  console.log(answersArray);
  console.log(optionsArray);

  return {
    questions: questionArray,
    options: optionsArray,
    answers: answersArray,
  };
};

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
