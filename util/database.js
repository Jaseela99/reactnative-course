import * as SQLite from "expo-sqlite";
import Place from "../models/place";

const database = SQLite.openDatabase("places.db"); //creating database
export const init = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL
          )`,
          [],
          () => {
            resolve();
          },
          (_, error) => {
            reject(error);
          }
        ); //executes database transaction
    });
  });
  return promise;
};

export const insertPlace = (place) => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri) VALUES (?, ?)`,
        [place.title, place.imageUri],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const fetchPlaces=()=>{
    const promise = new Promise((resolve, reject) => {
      database.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM places',
          [],
          (_, result) => {
            const places = [];
  
            for (const dp of result.rows._array) {
              places.push(
                new Place(
                  dp.title,
                  dp.imageUri,
                  dp.id
                )
              );
            }
            resolve(places);
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  
    return promise;
  }

  export const fetchPlaceDetails=(id)=>{
    const promise = new Promise((resolve, reject) => {
      database.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM places WHERE id = ?',
          [id],
          (_, result) => {
            const dbPlace=result.rows._array[0]
            const place= new Place(
              dbPlace.title,dbPlace.imageUri,dbPlace.id
            )
            resolve(place);
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  
    return promise;
  }
