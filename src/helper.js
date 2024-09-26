export const rundomNum = (max, min) => Math.round(Math.random() * (max - min) + min);

export const correctAnswer = (num) => ((num % 2 === 0) ? 'yes' : 'no');
