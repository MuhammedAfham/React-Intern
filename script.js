document.getElementById('numberInput').addEventListener('input', function() {
    const value = Number(this.value);
    const messageElement = document.getElementById('message');
  
    if (value < 0) {
      messageElement.textContent = "Enter a positive value.";
      messageElement.style.color = "red";
    } else if (value % 2 === 0) {
      const nextEvens = [value + 2, value + 4, value + 6];
      messageElement.textContent = `Next 3 even numbers: ${nextEvens.join(', ')}`;
      messageElement.style.color = "green";
    } else {
      const nextOdds = [value + 2, value + 4, value + 6];
      messageElement.textContent = `Next 3 odd numbers: ${nextOdds.join(', ')}`;
      messageElement.style.color = "blue";
    }
  });  