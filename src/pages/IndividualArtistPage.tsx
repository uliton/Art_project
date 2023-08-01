import IndividualArtist from "../components/IndividualArtist";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const IndividualArtistPage = () => {
    const { artistId } = useParams();

    return (
        artistId ? <IndividualArtist id={artistId} />
            : <PageNotFound />
    );
};

export default IndividualArtistPage;