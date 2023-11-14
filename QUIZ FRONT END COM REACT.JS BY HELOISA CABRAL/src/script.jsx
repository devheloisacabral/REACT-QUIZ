import React, { useState } from 'react';

const questions = [
 
  {
    question: 'O que significa a sigla HTML?',
    answers: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makeup Language'],
    correctAnswer: 'Hyper Text Markup Language'
  },
  {
    question: 'Qual linguagem de estilo é utilizada para estilizar páginas web?',
    answers: ['JavaScript', 'HTML', 'CSS', 'XML'],
    correctAnswer: 'CSS'
  },
  {
    question: 'Quem é considerado o pai do JavaScript?',
    answers: ['Brendan Eich', 'Douglas Crockford', 'Ryan Dahl', 'Tim Berners-Lee'],
    correctAnswer: 'Brendan Eich'
  },
  {
    question: 'Qual framework JavaScript é utilizado para a construção de interfaces de usuário?',
    answers: ['Angular', 'React', 'Vue.js', 'Ember.js'],
    correctAnswer: 'React'
  },
  {
    question: 'Qual função do JavaScript é utilizada para imprimir algo no console?',
    answers: ['console.log()', 'print()', 'log()', 'print.console()'],
    correctAnswer: 'console.log()'
  },
  // Novas perguntas avançadas
  {
    question: 'Qual é a diferença entre "let" e "const" em JavaScript?',
    answers: ['"let" é imutável e "const" é mutável', '"let" é usado para loops e "const" para declaração de constantes', '"let" declara variáveis e "const" declara constantes', '"let" é uma variável de escopo global e "const" é de escopo local'],
    correctAnswer: '"let" declara variáveis e "const" declara constantes'
  },
  {
    question: 'O que é a técnica de "lazy loading" em aplicações web?',
    answers: ['É uma técnica de otimização para carregar elementos somente quando necessários', 'É uma técnica para diminuir o tempo de carregamento de scripts externos', 'É uma técnica para adiar a renderização de páginas', 'É uma técnica para reduzir a latência de rede'],
    correctAnswer: 'É uma técnica de otimização para carregar elementos somente quando necessários'
  },
  {
    question: 'O que são Promises em JavaScript?',
    answers: ['Padrões de design para criar funções assíncronas', 'Métodos utilizados para encadear múltiplas operações de forma síncrona', 'Objetos que representam valores que podem estar disponíveis agora, no futuro ou nunca', 'Métodos utilizados para manipular erros em funções assíncronas'],
    correctAnswer: 'Objetos que representam valores que podem estar disponíveis agora, no futuro ou nunca'
  },
  {
    question: 'Qual a diferença entre HTML5 e HTML?',
    answers: ['HTML5 é a quinta versão do HTML e introduziu novos recursos e APIs', 'HTML5 é um tipo diferente de HTML usado para websites responsivos', 'HTML5 é uma versão mais antiga e obsoleta do HTML', 'Não há diferença, são termos intercambiáveis'],
    correctAnswer: 'HTML5 é a quinta versão do HTML e introduziu novos recursos e APIs'
  },
  {
    question: 'O que é uma Closure (fechamento) em JavaScript?',
    answers: ['Uma função que não tem acesso às variáveis externas a ela', 'Um mecanismo para ocultar variáveis privadas', 'Uma função que tem acesso a variáveis de um escopo externo mesmo após a execução da função externa', 'Um erro comum de sintaxe em JavaScript'],
    correctAnswer: 'Uma função que tem acesso a variáveis de um escopo externo mesmo após a execução da função externa'
  }
  // Adicione mais perguntas conforme desejado
];


const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz"> 
      {showScore ? (
        <div className="score-section">
          <h2 className='h2'>Você acertou {score} de {questions.length} perguntas!</h2>
          <button className='button' onClick={restartQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2 className='h2'>Pergunta {currentIndex + 1}:</h2>
          <div className="question-text">{questions[currentIndex].question}</div>
          <div className="answer-options">
            {questions[currentIndex].answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswerClick(answer)}>
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;