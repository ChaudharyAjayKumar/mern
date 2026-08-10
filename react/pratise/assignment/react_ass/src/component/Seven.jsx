import { useState } from "react";

const Seven = () => {
  let [profile, setProfile] = useState({ name: "", email: "", message: "" });

  return (
    <div>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-6">
            <form>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
                <label for="formId1">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
                <label for="formId1">email</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                  onChange={(e) =>
                    setProfile({ ...profile, password: e.target.value })
                  }
                />
                <label for="formId1">password</label>
              </div>
              <button>login</button>
            </form>
            <h2>
              name:{profile.name} password:{profile.password} email:
              {profile.email}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seven;
