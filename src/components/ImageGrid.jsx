import { useFirestore } from '../hooks/useFirestore';

const ImageGrid = () => {
    const { docs } = useFirestore('images');
    console.log(docs);
    return (
        <div>
            {docs &&
                docs.map((doc) => (
                    <div key={doc.id} className="img-wrap">
                        <img width="200" src={doc.url} alt="" />
                    </div>
                ))}
        </div>
    );
};

export default ImageGrid;
