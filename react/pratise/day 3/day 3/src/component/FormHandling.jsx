import { useState } from "react";

const FormHandling = () => {
  let [login, SetLogin] = useState({ name: "", password: "" });

  let loginButton = (e) => {
    e.preventDefault();
    alert(`welcome, ${login.name} and your password is: ${login.password}`);
  };
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-6">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Login</h4>

                <form onSubmit={loginButton}>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder=""
                      onChange={(e) =>
                        SetLogin({ ...login, name: e.target.value })
                      }
                    />
                    <label for="formId1">Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder=""
                      onChange={(e) =>
                        SetLogin({ ...login, password: e.target.value })
                      }
                    />
                    <label for="formId1">Password</label>
                  </div>
                  <button type="submit">login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHandling;
