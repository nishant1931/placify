import React, { useEffect, useState } from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const UserPlace = () => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const userId = useParams().userId;

  const { isLoading, isError, clearErrorHandler, sendRequest } =
    useHttpClient();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_URL}/places/user/${userId}`
        );
        setLoadedPlaces(responseData.places.places);
      } catch (error) {}
    };

    fetchPlaces();
  }, [sendRequest, userId]);

  const deletePlaceHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevPlace) =>
      prevPlace.filter((place) => place._id !== deletedPlaceId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={isError} onClear={clearErrorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <PlaceList onDeletePlace={deletePlaceHandler} items={loadedPlaces} />
      )}
    </React.Fragment>
  );
};

export default UserPlace;
