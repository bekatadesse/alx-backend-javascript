export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-disable no-vars */
    const task = true;
    const task2 = false;
    /* eslint-enable no-vars */
  }

  return [task, task2];
}
