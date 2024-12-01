function saveToFile() {
    const userInput = document.getElementById('userInput').value;
    
    const blob = new Blob([userInput], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'user.txt';
    a.click();
}