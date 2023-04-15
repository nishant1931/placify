import React, { useContext, useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import useForm from "../../shared/hooks/form-hook";
import "./Auth.css";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const { isLoading, isError, sendRequest, clearErrorHandler } =
    useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const auth = useContext(AuthContext);

  const switchLoginHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          image: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevState) => !prevState);
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          `https://placify-pi.vercel.app/api/users/login`,
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );

        auth.login(responseData.userId, responseData.token);
      } catch (error) {}
    } else {
      try {
        const formData = new FormData();
        formData.append("email", formState.inputs.email.value);
        formData.append("name", formState.inputs.name.value);
        formData.append("password", formState.inputs.password.value);
        formData.append("image", formState.inputs.image.value);
        const responseData = await sendRequest(
          `https://placify-pi.vercel.app/api/users/signup`,
          "POST",
          formData
        );
        console.log(responseData);

        auth.login(responseData.userId, responseData.token);
      } catch (error) {}
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={isError} onClear={clearErrorHandler} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>{isLoginMode ? "Login" : "Sign Up"}</h2>
        <hr />
        <form onSubmit={loginHandler}>
          {!isLoginMode && (
            <Input
              id="name"
              label="Name"
              type="text"
              element="input"
              placeholder="Your Name"
              errorText="Please enter a name!"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
            />
          )}
          <Input
            id="email"
            label="E-mail"
            type="email"
            element="input"
            placeholder="E-mail"
            errorText="Please enter a valid email address!"
            onInput={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            element="input"
            placeholder="Password"
            errorText="Please enter a valid password, atleast 6 characters!"
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(6)]}
          />
          {!isLoginMode && (
            <ImageUpload
              onInput={inputHandler}
              center
              id="image"
              errorText="Please provide an image"
            />
          )}
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
        <Button inverse onClick={switchLoginHandler}>
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Auth;
