
import { useEffect, useState } from 'react';
import { firestoreApp } from '../config/firebase';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = firestoreApp.collection(collection).onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });

      setDocs(documents);
    });

    return unsubscribe;
  }, [collection]);

  return { docs };
};

export default useFirestore;
