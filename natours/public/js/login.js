<<<<<<< HEAD
/*eslint-disable */
=======
/* eslint-disable */
>>>>>>> a96d638e3abbd94ab8432e1932ce3cdde6e10259

const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/api/v1/users/login",
      data: {
        email,
        password,
      },
    });
<<<<<<< HEAD

=======
>>>>>>> a96d638e3abbd94ab8432e1932ce3cdde6e10259
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  login(email, password);
});
