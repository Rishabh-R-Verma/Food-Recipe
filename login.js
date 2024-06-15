signupbtn.onclick = function() {
    namefield.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
    validateForm(); 
  }
  
  function validateForm() {
    const nameInput = document.getElementsByName("Name")[0];
    const emailInput = document.getElementsByName("Email")[0];
    const passwordInput = document.getElementsByName("Pass")[0];
  
   
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      return false;
    }
  
    
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    
    if (passwordInput.value.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
  
    
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
  
  
    const jsonData = JSON.stringify(formData, null, 2);
  
    
    const blob = new Blob([jsonData], { type: "application/json" });
  
    
    const url = URL.createObjectURL(blob);
  

    const a = document.createElement("a");
    a.href = url;
    a.download = "form-data.json";
    a.click();
    URL.revokeObjectURL(url);
  
    
    return false;
  }