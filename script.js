function toCase(text) {
    
    let lowercaseText = text.toLowerCase();
    
   
    let uppercaseText = text.toUpperCase();
    
    
    let result = lowercaseText + '-' + uppercaseText;
    
    
    return result;
}

// Example usage:
const text = prompt("Enter text:");
alert(toCase(text));


