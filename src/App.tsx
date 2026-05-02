/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Home,
  Info,
  RefreshCw,
  Trophy,
  XCircle,
  Clock,
  Layout,
  Menu,
  GraduationCap,
  Download,
  FileText,
  LogOut,
  User
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import { questions, Question } from './data/questions';
import { useAuth } from './context/AuthContext';
import Login from './components/Login';

type GameState = 'START' | 'QUIZ' | 'RESULT';

function QuizApp() {
  const { user, logout } = useAuth();
  const [gameState, setGameState] = useState<GameState>('START');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeAtCurrent] = useState(30);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [quizLength, setQuizLength] = useState(10);

  // Shuffle and pick questions for a session
  useEffect(() => {
    if (gameState === 'START') {
      const shuffled = [...questions].sort(() => 0.5 - Math.random());
      setQuizQuestions(shuffled.slice(0, quizLength));
    }
  }, [gameState, quizLength]);

  useEffect(() => {
    let timer: number;
    if (gameState === 'QUIZ' && !isAnswered && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeAtCurrent(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isAnswered) {
      handleAnswerSelection(-1); // Automatically marked wrong if time runs out
    }
    return () => clearInterval(timer);
  }, [gameState, isAnswered, timeLeft]);

  const startQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setGameState('QUIZ');
    setIsAnswered(false);
    setSelectedOption(null);
    setTimeAtCurrent(30);
  };

  const handleAnswerSelection = (optionIndex: number) => {
    if (isAnswered) return;
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    
    if (optionIndex === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setIsAnswered(false);
      setSelectedOption(null);
      setTimeAtCurrent(30);
    } else {
      setGameState('RESULT');
    }
  };

  const resetQuiz = () => {
    setGameState('START');
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    let y = 20;
    
    doc.setFontSize(22);
    doc.text('Guía de Práctica MAPRIOT', 20, y);
    y += 15;
    
    doc.setFontSize(12);
    doc.text('Manual de Planes Reguladores como Instrumento de Ordenamiento Territorial', 20, y);
    y += 10;
    doc.text('Banco de Preguntas para Estudio', 20, y);
    y += 20;

    questions.forEach((q, index) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      doc.setFont("helvetica", "bold");
      doc.text(`${index + 1}. ${q.question}`, 20, y, { maxWidth: 170 });
      y += 10;
      
      doc.setFont("helvetica", "normal");
      q.options.forEach((opt, oIndex) => {
         doc.text(`${String.fromCharCode(97 + oIndex)}) ${opt}`, 25, y);
         y += 7;
      });
      y += 5;
    });

    doc.addPage();
    y = 20;
    doc.setFontSize(18);
    doc.text('Clave de Respuestas', 20, y);
    y += 15;
    doc.setFontSize(10);

    questions.forEach((q, index) => {
      doc.text(`${index + 1}: ${String.fromCharCode(97 + q.correctAnswer)} - ${q.explanation}`, 20, y, { maxWidth: 170 });
      y += 10;
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save('MAPRIOT_Guia_Practica.pdf');
  };

  const renderStart = () => (
    <motion.div 
      id="start-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
    >
      <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
        <GraduationCap id="logo-icon" className="w-12 h-12 text-purple-700" />
      </div>
      <h1 id="main-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
        MAPRIOT Quiz
      </h1>
      <p id="main-desc" className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed font-sans">
        Pon a prueba tus conocimientos sobre el <b>Manual de Planes Reguladores como Instrumento de Ordenamiento Territorial</b> del INVU.
      </p>
      
      {/* Quiz Length Selection */}
      <div className="mb-8 w-full max-w-sm">
        <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Preguntas por sesión</label>
        <div className="flex gap-2 justify-center flex-wrap">
          {[10, 25, 50, 100].map(len => (
            <button
              key={len}
              onClick={() => setQuizLength(len)}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${quizLength === len ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' : 'bg-white text-slate-500 border border-slate-200 hover:border-purple-300'}`}
            >
              {len}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-12">
        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
          <BookOpen className="w-6 h-6 text-amber-600 mb-2" />
          <span className="text-sm font-medium text-slate-500">Banco: 100 Preguntas</span>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
          <Clock className="w-6 h-6 text-blue-400 mb-2" />
          <span className="text-sm font-medium text-slate-500">30 seg/resp</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button 
          id="start-btn"
          onClick={startQuiz}
          className="group px-12 py-4 bg-blue-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          Empezar Quiz
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button 
          onClick={exportPDF}
          className="group px-12 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-semibold text-lg hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5 text-purple-600" />
          Descargar Guía PDF
        </button>
      </div>
    </motion.div>
  );

  const renderQuiz = () => {
    if (quizQuestions.length === 0) return null;
    const currentQ = quizQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    return (
      <div id="quiz-screen" className="max-w-3xl mx-auto pt-8 px-4 font-sans">
        {/* Header */}
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest block mb-1">Capítulo: {currentQ.chapter}</span>
            <h2 className="text-sm font-medium text-slate-400">Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}</h2>
          </div>
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${timeLeft < 10 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-600'}`}>
            <Clock className="w-4 h-4" />
            <span className="text-sm font-bold tabular-nums tracking-wider">{timeLeft}s</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-100 rounded-full mb-8 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="mb-10"
          >
            <h3 id="question-text" className="text-2xl md:text-3xl font-semibold text-slate-800 leading-tight mb-8">
              {currentQ.question}
            </h3>

            <div id="options-grid" className="space-y-4">
              {currentQ.options.map((option, idx) => {
                let statusClass = "bg-white border-slate-200 hover:border-purple-300 hover:bg-purple-50/30";
                let Icon = null;

                if (isAnswered) {
                  if (idx === currentQ.correctAnswer) {
                    statusClass = "bg-green-50 border-green-500 ring-1 ring-green-500 text-green-800";
                    Icon = <CheckCircle2 className="w-6 h-6 text-green-500" />;
                  } else if (idx === selectedOption) {
                    statusClass = "bg-rose-50 border-rose-500 ring-1 ring-rose-500 text-rose-800 opacity-80";
                    Icon = <XCircle className="w-6 h-6 text-rose-500" />;
                  } else {
                    statusClass = "bg-white border-slate-100 text-slate-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    id={`option-${idx}`}
                    onClick={() => handleAnswerSelection(idx)}
                    disabled={isAnswered}
                    className={`w-full p-5 text-left rounded-2xl border-2 transition-all flex items-center justify-between group ${statusClass}`}
                  >
                    <span className="text-lg font-medium pr-4">{option}</span>
                    {Icon}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 mb-12"
          >
            <div className={`p-6 rounded-2xl mb-8 flex gap-4 ${selectedOption === currentQ.correctAnswer ? 'bg-green-50/50 border border-green-100' : 'bg-purple-50/50 border border-purple-100'}`}>
              <div className="shrink-0">
                <Info className={`w-6 h-6 ${selectedOption === currentQ.correctAnswer ? 'text-green-500' : 'text-purple-600'}`} />
              </div>
              <p className="text-slate-700 leading-relaxed font-sans italic sm:text-lg">
                {currentQ.explanation}
              </p>
            </div>
            
            <button
              id="next-btn"
              onClick={nextQuestion}
              className="w-full py-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-2xl font-bold text-lg hover:from-purple-800 hover:to-purple-950 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {currentQuestionIndex === quizQuestions.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'}
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </div>
    );
  };

  const renderResult = () => {
    const percentage = (score / quizQuestions.length) * 100;
    
    return (
      <motion.div 
        id="result-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 py-8"
      >
        <div className="relative mb-8">
          <Trophy id="trophy-icon" className={`w-24 h-24 ${percentage >= 70 ? 'text-amber-500' : 'text-slate-300'}`} />
          {percentage >= 70 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-2 -right-2 bg-purple-600 text-white p-2 rounded-full"
            >
              <CheckCircle2 className="w-6 h-6" />
            </motion.div>
          )}
        </div>

        <h2 className="text-3xl font-bold text-slate-800 mb-2">¡Quiz Completado!</h2>
        <p className="text-slate-500 font-sans mb-8">Has finalizado la evaluación del MAPRIOT</p>

        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 w-full max-w-sm mb-10 flex flex-col items-center">
          <div className="text-6xl font-black text-slate-900 mb-2 tracking-tighter">
            {score} <span className="text-2xl text-slate-300 font-normal">/ {quizQuestions.length}</span>
          </div>
          <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 font-sans">Puntaje Final</div>
          
          <div className="w-full h-3 bg-slate-100 rounded-full mb-2 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              className={`h-full rounded-full ${percentage >= 70 ? 'bg-green-500' : 'bg-amber-500'}`}
            />
          </div>
          <span className="text-sm font-bold text-slate-600">{Math.round(percentage)}% de precisión</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <button 
            id="retry-btn"
            onClick={startQuiz}
            className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-bold hover:from-purple-700 hover:to-purple-800 transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Reintentar
          </button>
          <button 
            id="home-btn"
            onClick={resetQuiz}
            className="flex-1 px-8 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Inicio
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div 
      id="app-root"
      className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-200"
    >
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50 px-4">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xs">INVU</span>
            </div>
            <span className="font-bold text-lg font-sans tracking-tight hidden sm:inline-block">MAPRIOT</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100">
              <User className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">{user?.name}</span>
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button
              onClick={logout}
              className="p-2 text-slate-500 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors"
              title="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-12">
        {gameState === 'START' && renderStart()}
        {gameState === 'QUIZ' && renderQuiz()}
        {gameState === 'RESULT' && renderResult()}
      </main>

      <footer className="py-8 text-center text-slate-400 text-sm font-sans border-t border-slate-100 mt-auto">
        <p>© 2026 INVU - Instituto Nacional de Vivienda y Urbanismo</p>
        <p className="mt-1">Manual de Planes Reguladores</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <AppContent />
    </div>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return <QuizApp />;
}
