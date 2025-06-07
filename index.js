const formList = document.querySelector(".formInfo");

formList.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: formList.name.value,
    email: formList.email.value,
    subject: formList.subject.value,
    message: formList.message.value,
  };

  try {
    const response = await fetch('https://portfoliobackend-ezq1.onrender.com/api/v1/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);   // show success message

    // ✅ Wait a moment then reload
    setTimeout(() => {
      location.reload();     // refreshes the whole page
    }, 1500);  // slight delay after alert

  } catch (error) {
    alert('Error sending message');
    console.error(error);
  }
});
