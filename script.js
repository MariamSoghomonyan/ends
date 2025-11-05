// emailjs.init("mwmRwDBtspRCwK_Gz"); // твой Public Key

// === Отправка формы через EmailJS ===
const form = document.getElementById("rsvp-form");
const responseMessage = document.getElementById("response-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Получаем значения полей
  const attendanceValue = form.querySelector(
    'input[name="attendance"]:checked'
  );
  const nameValue = form.querySelector('input[name="name"]');
  const numberValue = form.querySelector('input[name="number"]');

  if (!attendanceValue || !nameValue || !numberValue) {
    responseMessage.textContent = "Լրացրեք բոլոր դաշտերը!";
    return;
  }

  const formData = {
    attendance: attendanceValue.value === "yes" ? "Կգանք" : "Չենք գալու",
    name: nameValue.value,
    number: numberValue.value,
  };

  console.log(formData);

  // emailjs.send("service_gqleuaw", "template_7v58dmw", formData).then(
  //   function () {
  //     responseMessage.textContent =
  //       "Շնորհակալություն, ձեր պատասխանն ուղարկվեց!";
  //     form.reset();
  //   },
  //   function (error) {
  //     responseMessage.textContent = "Սխալ՝ " + JSON.stringify(error);
  //   }
  // );
});
