import { useEffect } from 'react';
import { useStorage } from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { progress, url } = useStorage(file);

    useEffect(() => {}, [url, setFile]);

    return <div className="progress-bar" style={{ width: progress + '%' }}></div>;
};

export default ProgressBar;
