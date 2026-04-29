import type { ObjectiveQuestion } from "../types/flow";

export const objectiveQuestions: ObjectiveQuestion[] = [
  {
    id: "q1",
    category: "portugues",
    prompt: "Qual frase esta escrita de forma correta?",
    options: [
      { id: "a", label: "A", text: "Os aluno chegou cedo." },
      { id: "b", label: "B", text: "Os alunos chegaram cedo." },
      { id: "c", label: "C", text: "Os alunos chego cedo." },
      { id: "d", label: "D", text: "Os aluno chegaram cedo." },
    ],
    correctOptionId: "b",
  },
  {
    id: "q2",
    category: "matematica",
    prompt: "Quanto e 15 + 27?",
    options: [
      { id: "a", label: "A", text: "32" },
      { id: "b", label: "B", text: "42" },
      { id: "c", label: "C", text: "41" },
      { id: "d", label: "D", text: "52" },
    ],
    correctOptionId: "b",
  },
  {
    id: "q3",
    category: "conhecimentos_gerais",
    prompt: "Qual e a capital do Brasil?",
    options: [
      { id: "a", label: "A", text: "Sao Paulo" },
      { id: "b", label: "B", text: "Rio de Janeiro" },
      { id: "c", label: "C", text: "Brasilia" },
      { id: "d", label: "D", text: "Belo Horizonte" },
    ],
    correctOptionId: "c",
  },
  {
    id: "q4",
    category: "portugues",
    prompt: "Em qual alternativa a palavra esta acentuada corretamente?",
    options: [
      { id: "a", label: "A", text: "Ideia" },
      { id: "b", label: "B", text: "Heroi" },
      { id: "c", label: "C", text: "Fácil" },
      { id: "d", label: "D", text: "Voo" },
    ],
    correctOptionId: "c",
  },
  {
    id: "q5",
    category: "matematica",
    prompt: "Quanto e 9 x 6?",
    options: [
      { id: "a", label: "A", text: "54" },
      { id: "b", label: "B", text: "45" },
      { id: "c", label: "C", text: "56" },
      { id: "d", label: "D", text: "64" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q6",
    category: "conhecimentos_gerais",
    prompt: "Qual planeta e conhecido como planeta vermelho?",
    options: [
      { id: "a", label: "A", text: "Venus" },
      { id: "b", label: "B", text: "Marte" },
      { id: "c", label: "C", text: "Jupiter" },
      { id: "d", label: "D", text: "Saturno" },
    ],
    correctOptionId: "b",
  },
  {
    id: "q7",
    category: "portugues",
    prompt: "Qual palavra e um verbo?",
    options: [
      { id: "a", label: "A", text: "Caderno" },
      { id: "b", label: "B", text: "Rapido" },
      { id: "c", label: "C", text: "Estudar" },
      { id: "d", label: "D", text: "Bonito" },
    ],
    correctOptionId: "c",
  },
  {
    id: "q8",
    category: "matematica",
    prompt: "Qual e a metade de 84?",
    options: [
      { id: "a", label: "A", text: "24" },
      { id: "b", label: "B", text: "42" },
      { id: "c", label: "C", text: "44" },
      { id: "d", label: "D", text: "48" },
    ],
    correctOptionId: "b",
  },
  {
    id: "q9",
    category: "conhecimentos_gerais",
    prompt: "Qual destes eventos acontece a cada quatro anos?",
    options: [
      { id: "a", label: "A", text: "Copa do Mundo masculina" },
      { id: "b", label: "B", text: "Carnaval" },
      { id: "c", label: "C", text: "Natal" },
      { id: "d", label: "D", text: "Vestibular" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q10",
    category: "portugues",
    prompt: "Qual frase faz mais sentido em um contexto formal?",
    options: [
      { id: "a", label: "A", text: "A gente vai te avisar depois." },
      { id: "b", label: "B", text: "Nos vamos informar voce posteriormente." },
      { id: "c", label: "C", text: "Avisa voce mais tarde." },
      { id: "d", label: "D", text: "Depois nois fala disso." },
    ],
    correctOptionId: "b",
  },
];
