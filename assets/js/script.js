function caesarCipher(text, shift) {
  let result = "";
  for (let char of text) {
    if (char >= 'a' && char <= 'z') {
      result += String.fromCharCode(
        ((char.charCodeAt(0) - 97 + shift + 26) % 26) + 97
      );
    } else if (char >= 'A' && char <= 'Z') {
      result += String.fromCharCode(
        ((char.charCodeAt(0) - 65 + shift + 26) % 26) + 65
      );
    } else {
      result += char;
    }
  }
  return result;
}

function encryptMessage() {
  const text = document.getElementById("plaintext").value;
  let shift = parseInt(document.getElementById("shift").value);
  if (isNaN(shift)) {
    shift = 3;
  }
  if (!text) {
    alert("Masukkan pesan yang valid!");
    return;
  }
  document.getElementById("encryptedMessage").textContent =
    caesarCipher(text, shift);
}


function bruteForce() {
  const text = document.getElementById("ciphertext").value;
  if (!text) {
    alert("Masukkan ciphertext dulu!");
    return;
  }
  let output = "";
  for (let i = 1; i <= 25; i++) {
    output += `Shift ${i}: ${caesarCipher(text, -i)}\n`;
  }
  document.getElementById("bruteForceResult").textContent = output;
}

function copyText() {
  const text = document.getElementById("encryptedMessage").textContent;

  if (!text) {
    alert("Tidak ada teks untuk disalin!");
    return;
  }
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  alert("Teks berhasil disalin!");
}


function toggleMode() {
  const encryption = document.getElementById("encryptionSection");
  const decryption = document.getElementById("decryptionSection");
  if (encryption.classList.contains("hidden")) {
    encryption.classList.remove("hidden");
    decryption.classList.add("hidden");
  } else {
    encryption.classList.add("hidden");
    decryption.classList.remove("hidden");
  }
}
