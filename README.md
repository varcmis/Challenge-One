<h1>Text-Encryptor</h1>


README
Text Encryptor Application
This project is a simple web-based text encryption and decryption tool. The application allows users to input text, encrypt it using a custom substitution cipher, and decrypt previously encrypted text. Additionally, users can copy the resulting encrypted or decrypted text to the clipboard.

Project Structure
HTML: The structure of the application.
CSS: The styling rules applied to the HTML structure.
JavaScript (app.js): The logic responsible for encrypting, decrypting, displaying results, and handling clipboard interactions.
JavaScript Functions Overview
1. encriptarTexto()
Purpose:
Encrypts the text input by the user using a custom substitution cipher.

Process:

Fetches the original text from the input field with ID inputword.
Replaces vowels in the original text with corresponding encrypted values:
e -> enter
i -> imes
a -> ai
o -> ober
u -> ufat
Calls the mostrarResultado function to display the encrypted text.
Usage:
This function is triggered when the "Encriptar" button is clicked.

2. desencriptarTexto()
Purpose:
Decrypts the previously encrypted text, reversing the custom substitution cipher back to the original text.

Process:

Fetches the encrypted text from the input field with ID inputword.
Replaces encrypted values with their corresponding vowels:
enter -> e
imes -> i
ai -> a
ober -> o
ufat -> u
Calls the mostrarResultado function to display the decrypted text.
Usage:
This function is triggered when the "Desencriptar" button is clicked.

3. copyToClipboard(text)
Purpose:
Copies the provided text to the user's clipboard.

Process:

Utilizes the navigator.clipboard.writeText method to copy the text.
Displays an alert indicating success or failure.
Usage:
This function is called internally by copyResultToClipboard() when the user clicks the "Copiar" button.

4. asignarTextoElemento(elemento, texto)
Purpose:
Assigns the provided text to a specific HTML element.

Process:

Selects the HTML element using the provided selector (elemento).
Sets the innerHTML of the selected element to the provided text (texto).
Usage:
This function is used by mostrarResultado to update the content of the result display area.

5. mostrarResultado(resultado)
Purpose:
Displays the encrypted or decrypted result in the designated result area on the web page.

Process:

Calls asignarTextoElemento to update the text in the result display area (identified by #reportResult).
Makes the "Copiar" button visible by setting its display style to block.
Usage:
This function is called by both encriptarTexto() and desencriptarTexto() to show the result after processing.

6. copyResultToClipboard()
Purpose:
Copies the text currently displayed in the result area to the clipboard.

Process:

Retrieves the text content from the result display area (#reportResult).
Calls copyToClipboard to handle the copying process.
Usage:
This function is triggered when the user clicks the "Copiar" button after an encryption or decryption operation.

How to Use
Input Text: Enter the text you want to encrypt or decrypt in the input textarea.
Encrypt or Decrypt: Click the "Encriptar" button to encrypt the text or the "Desencriptar" button to decrypt it.
Copy the Result: After processing, click the "Copiar" button to copy the resulting text to your clipboard.
Technical Notes
The application is designed to only process lowercase letters without accents.
The encryption and decryption processes are based on simple string replacement patterns.
The application is responsive, adapting to various screen sizes, including mobile devices.
Conclusion
This simple text encryption tool is an example of how basic string manipulation and DOM interactions can be used to create a functional web application. It serves as a useful reference for beginners learning JavaScript and web development.
