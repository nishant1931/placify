import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import "./PlaceForm.css";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";
import useForm from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import Card from "../../shared/components/UIElements/Card";
import { useHttpClient } from "../../shared/hooks/http-hook";

const UpdatePlace = () => {
  const { isLoading, isError, clearErrorHandler, sendRequest } =
    useHttpClient();
  const [loadedPlace, setLoadedPlace] = useState();

  const placeId = useParams().placeId;
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_URL}/places/${placeId}`
        );

        setLoadedPlace(responseData);
        setFormData(
          {
            title: {
              value: responseData.title,
              isValid: true,
            },
            description: {
              value: responseData.description,
              isValid: true,
            },
          },
          true
        );
      } catch (error) {}
    };

    fetchPlace();
  }, [sendRequest, placeId, setFormData]);

  const placeUpdateHandler = async (e) => {
    e.preventDefault();

    try {
      await sendRequest(
        `${process.env.REACT_APP_URL}/places/${placeId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        }
      );
      navigate(`/${auth.userId}/places`);
    } catch (error) {}
    // console.log(formState.inputs);
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedPlace && isError) {
    return (
      <div className="center" style={{ marginTop: "1rem" }}>
        <Card>
          <h2>Could not find this place!</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={isError} onClear={clearErrorHandler} />
      {!isLoading && loadedPlace && (
        <form className="place-form" onSubmit={placeUpdateHandler}>
          <Input
            id="title"
            type="text"
            label="Title"
            element="input"
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={loadedPlace.title}
            initialValid={true}
            errorText="Please enter a valid title!"
            onInput={inputHandler}
          />
          <Input
            id="description"
            label="Description"
            element="textarea"
            validators={[VALIDATOR_MINLENGTH(5)]}
            initialValue={loadedPlace.description}
            initialValid={true}
            errorText="Please enter a valid description! (atleast 5 characters)"
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE PLACE
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdatePlace;
