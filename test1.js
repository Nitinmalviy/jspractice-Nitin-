function logKey(event) {
  console.log(`${event.key}`);
}

textBox.addEventListener("keydown", logKey)