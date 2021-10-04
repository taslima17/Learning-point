
import { useParams } from 'react-router';


const Enrolled = () => {
    const { id } = useParams();



    return (
        <div className="p-5 m-5">
            <h1>Successfully Enrolled in course : {id}</h1>

        </div>
    );
};

export default Enrolled;