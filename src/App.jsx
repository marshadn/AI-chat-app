import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
 
  const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;


  async function generateAnswer() {
    setAnswer("loading....");
    const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${googleApiKey}`,
      method: "POST",
      data: {
        contents: [
          { parts: [{ text: question }] },
        ],
      },
    });
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  function clearAnswer() {
    setAnswer("");
  }

  return (
    <div className='container'>
      <h1>Chat AI</h1>
      <textarea
        className='textarea'
        placeholder='Ask me anything?'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        cols="30"
        rows="10"
      ></textarea>
      <div className="button-container">
        <button onClick={generateAnswer} className="button">
          Generate Answer
        </button>
        <button onClick={clearAnswer} className="button">
          Clear Answer
        </button>
      </div>
      {answer && (
        <div className="answer-box">
          <pre>{answer}</pre>
        </div>
      )}
    </div>
  );
}

export default App;


// import { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");

//   async function generateAnswer() {
//     setAnswer("loading....");
//     const response = await axios({
//       url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBy6hXNPq_vzJcPD2l0_gUnHK64D-VwEY0",
//       method: "POST",
//       data: {
//         contents: [
//           { parts: [{ text: question }] },
//         ],
//       },
//     });
//     setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
//   }

//   function clearAnswer() {
//     setAnswer("");
//   }

//   return (
//     <div className='border rounded mt-4 p-4 max-w-3xl mx-auto'>
//       <h1 className='bg-blue-600 text-white text-center py-2 rounded'>Chat AI</h1>
//       <textarea
//         className='border rounded w-full p-2 my-2'
//         placeholder='Ask me anything?'
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         cols="30"
//         rows="10"
//       ></textarea>
//       <div className="flex space-x-2">
//         <button onClick={generateAnswer} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
//           Generate Answer
//         </button>
//         <button onClick={clearAnswer} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors">
//           Clear Answer
//         </button>
//       </div>
//       {answer && (
//         <pre className="bg-gray-100 p-4 mt-4 rounded border border-gray-300 max-w-full w-auto break-words">
//           {answer}
//         </pre>
//       )}
//     </div>
//   );
// }

// export default App;







