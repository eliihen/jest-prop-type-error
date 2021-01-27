import { format } from 'util';

const error = console.error;

console.error = (...args) => {
  error(...args);
  const message = format(...args);
  if (/(Invalid prop|Failed prop type)/gi.test(message)) {
    throw new Error(message);
  }
};
