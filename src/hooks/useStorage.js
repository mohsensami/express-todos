import { useEffect, useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase/config';

export const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_change',
            (snapshot) => {
                const precentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(precentage);
            },
            (err) => {
                setError(err);
            },
            async () => {
                const downloadURL = await getDownloadURL(storageRef);
                setUrl(downloadURL);
            }
        );
    }, [file]);

    return { progress, url, error };
};
