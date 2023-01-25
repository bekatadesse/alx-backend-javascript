export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    /* eslint-disable no-var */
    let task = true;
    let task2 = false;
    
  }

  return [task, task2];
}
