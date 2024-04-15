const dal = require("./pg.Users");

async function getPeople() {
  const sql = `SELECT "User_ID" AS _id, "FirstName", "LastName", "Email" FROM public."Users" ORDER BY "User_ID" DESC;`;
  try {
    let results = await dal.query(sql);
    return results.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function addPeople(FirstName, LastName, Email) {
  const sql = `INSERT INTO public."Users"("FirstName", "LastName", "Email") VALUES ($1, $2, $3) RETURNING "User_ID";`;
  try {
    let result = await dal.query(sql, [FirstName, LastName, Email]);
    return result.rows[0].id;
  } catch (error) {
    if (error.code === "23505") return error.code;
    console.log(error);
    throw error;
  }
}

async function patchPeople(User_ID, FirstName, LastName, Email) {
  const sql = `UPDATE public."Users" SET "FirstName"=$2, "LastName"=$3, "Email"=$4 WHERE "User_ID"=$1;`;
  try {
    let result = await dal.query(sql, [User_ID, FirstName, LastName, Email]);
    return result.rowCount;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deletePeople(User_ID) {
  const sql = `DELETE FROM public."Users" WHERE "User_ID" = $1;`;
  try {
    let result = await dal.query(sql, [User_ID]);
    return result.rowCount;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  getPeople,
  addPeople,
  patchPeople,
  deletePeople,
};
