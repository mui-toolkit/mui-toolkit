import React, { useState, useEffect } from "react";

import { db } from "../config/firebase";

export const UsersThemes = () => {
  const [themes, setThemes] = useState([]);
  const [foundUser, setUser] = useState("");

  useEffect(() => {
    const userThemes = [];
    const response = async () => {
      await db
        .collection("Users")
        .doc("eqrjmljO97c2ccaabw9K")
        .get()
        .then(doc => {
          console.log(doc.data().theme);

          let foundUser = doc.data();
          Promise.all(
            foundUser.themes.map(theme => {
              db.collection("CustomizedThemes")
                .doc(`${theme.id}`)
                .get()
                .then(theme => {
                  console.log("themes", theme.data());
                  userThemes.push(theme.data());
                  console.log("response -> userThemes", userThemes);
                  setThemes([...userThemes]);
                });
            })
          );
          setUser(doc.data());
        })
        .catch(err => {
          console.log("Error getting document", err);
        });
    };
    response();
  }, []);

  console.log("UsersThemes -> foundUser", foundUser, foundUser.themes);
  console.log("THEMES", themes);
  return themes.length === 0 ? (
    <div>Time to customize some themes!</div>
  ) : (
    <div>
      <h3>
        {foundUser.firstName} {foundUser.lastName}
      </h3>
      {themes.map(theme => {
        return (
          <div key={theme.id}>
            <li>{JSON.stringify(theme)}</li>
          </div>
        );
      })}
    </div>
  );
};
export default UsersThemes;
