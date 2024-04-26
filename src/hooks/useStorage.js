import { useState,useEffect } from 'react';
import { firestoreApp, storageApp, timestamp } from '../config/firebase';

const useStorage = (data) => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(null);

  useEffect(() => {
    const storageRef = storageApp.ref(data.itemImage.name);
    const auctionsRef = firestoreApp.collection('auctions');
    const endAuctionsRef = firestoreApp.collection('endauction');

    const uploadTask = storageRef.put(data.itemImage);

    uploadTask.on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        const imgUrl = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        delete data.itemImage;

        const auctionDoc = await auctionsRef.add({ ...data, createdAt, imgUrl });
        const auctionData = { id: auctionDoc.id, ...data, createdAt, imgUrl };

        const dueDate = new Date(data.duration).getTime();

        setTimeout(async () => {
          await endAuctionsRef.add(auctionData);
          // await auctionDoc.delete();
          setIsCompleted(true);
        }, dueDate - Date.now());
      }
    );

    return () => uploadTask.cancel();
  }, [data]);

  return { progress, isCompleted };
};


export default useStorage;