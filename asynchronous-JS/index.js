const fs = require("fs");
const superagent = require("superagent");

//Promise
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I could not find that file");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("Could not load the file");
      resolve("sucess");
    });
  });
};

//async/await
/*
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await writeFilePro("dog-img.txt", res.body.message);
    console.log("Random dog image saved to file");
  } catch (err) {
    console.log(err);
  }
};
getDogPic();*/

//asyn awat multiple promises

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1 = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2 = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3 = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const all = await Promise.all([res1, res2, res3]);
    const imgs = all.map((el) => el.body.message);
    console.log(imgs);

    await writeFilePro("dog-img.txt", imgs.join("\n"));
    console.log("Random dog image saved to file");
  } catch (err) {
    console.log(err);
  }
};
getDogPic();

//we can chain up 'then' because everytime it returns a promise

/*
readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);

    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);

    return writeFilePro("dog-img.txt", res.body.message);
  })
  .then(() => {
    console.log("Random dog image saved to file");
  })
  .catch((err) => {
    console.log(err);
  });

  */

//__dirname is used to get the absolute path to the directory containing the script.

//that is an example of callback hell:

/*
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);

      fs.writeFile("dog-img.txt", res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log("dog image saved to file");
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});

*/
