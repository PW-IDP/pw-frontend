import React from 'react'
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { authSettings } from '../../common/AuthSettings';
import { useForm } from 'react-hook-form';

const Test = () => {
    const { isAuthenticated, loginWithRedirect, logout, user, isLoading, getAccessTokenSilently, getIdTokenClaims, getAccessTokenWithPopup } = useAuth0();
    const [accessToken, setAccessToken] = useState("ACCESS_TOKEN")
    const [dbResult, setDbResult] = useState("DATABASE_RESULT")
    const { register, handleSubmit } = useForm();
  
    const getAccessToken = async (scope, setter) => {
      getAccessTokenSilently({
          audience: authSettings.audience,
          scope: scope
      }).then((result) => {
        console.log("Silently accessToken:", result)
        setter(result)
      }).catch((err) => {
        console.log("Getting Access Token with popup...")
        getAccessTokenWithPopup({
          audience: authSettings.audience,
          scope: scope
        }).then((result) => {
          console.log("WithPopup accessToken:", result)
          setter(result)
        }).catch((err) => {
          console.error(err)
        })
      })
    }
  
  
    const getTokens = () => {
      getAccessToken("read:test1", setAccessToken)
    }
  
    const publicEndpointTest = () => {
      const config = {
          method: 'GET',
          headers: { },
      };
      fetch('http://localhost:8080/api/public', config)
      .then(function (response) {
        console.log(response.status);
        response.json().then(function (body) {
            console.log(JSON.stringify(body));
        })
      })
      .catch(function (error) {
          console.log("ERROR:", error);
      });
    }
  
    const privateEndpointTest = () => {
      const config = {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + accessToken,
          },
      };
      fetch('http://localhost:8080/api/private', config)
      .then(function (response) {
        console.log(response.status);
        response.json().then(function (body) {
            console.log(JSON.stringify(body));
        })
      })
      .catch(function (error) {
          console.log("ERROR:", error);
      });
    }
  
    const privateScopedEndpointTest = () => {
      const config = {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + accessToken,
          },
      };
      fetch('http://localhost:8080/api/private-scoped', config)
      .then(function (response) {
        console.log(response.status);
        response.json().then(function (body) {
            console.log(JSON.stringify(body));
        })
      })
      .catch(function (error) {
          console.log("ERROR:", error);
      });
    }

    const testDbGet = () => {
        const config = {
            method: 'GET',
            headers: { },
        };
        fetch('http://localhost:8080/api/test-db/get', config)
        .then(function (response) {
          console.log(response.status);
          response.json().then(body => {
            setDbResult(body.message)
          })
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
      }
    const testDbSet = (data) => {
        const config = {
            method: 'GET',
            headers: { },
        };
        fetch(`http://localhost:8080/api/test-db/set?value=${data.value}`, config)
        .then(function (response) {
        console.log(response.status);
        setDbResult("VALUE_ADDED")
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    }



    return (
        <div>
            Auth0 Test
            <div>
                {
                isAuthenticated ? 
                    <button onClick={() => {logout({ returnTo: window.location.origin })}}> Log Out</button>
                    :
                    <button onClick={loginWithRedirect}> Log In</button>
                }
            </div>
            <br />
            <br />
            <div>
                <button onClick={getTokens}>Get Access Token</button>
                <br />
                {accessToken}
            </div>
            <br />
            <br />
            <div>
                <button onClick={publicEndpointTest}>public</button>
                <button onClick={privateEndpointTest}>private</button>
                <button onClick={privateScopedEndpointTest}>private-scoped</button>
            </div>
            <br />
            <br />
            <br />
            <br />
            Database Test
            <div>
                <form onSubmit={handleSubmit(testDbSet)}>
                    <input
                        {...register("value", { required: "Enter a value" })}
                    />
                    <input type="submit" value="Add value to database" />
                </form>
            </div>
            <div>
                <button onClick={testDbGet}>Get From Database</button>
                 <br />
                {dbResult}
            </div>
        </div>
    )
}

export default Test