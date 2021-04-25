import axios from "axios";

export const instance = axios.create({
  baseURL: "https://google-map-img-be.herokuapp.com/",
  // timeout: 1000,
});

export const createUser = (body) => {
  return instance
    .post("/v1/createUser", body)
    .then((res) => res)
    .catch((err) => console.error("create product error", err));

  // dispatch({
  //   type: actionTypes.CREATE_PRODUCT,
  //   payload: {
  //     id: data.id,
  //     name: data.name,
  //     actual_price: data.actual_price,
  //     selling_price: data.selling_price,
  //     quantity_in_hand: data.quantity_in_hand,
  //     created_at: data.created_at,
  //   },
  // });
  // localStorage.setItem("cart",JSON.stringify(getState().cart))
};

export const getUser = (body) => {
  return instance
    .get(`/v1/getUser?username=${body.username}&&password=${body.password}`)
    .then((res) => {
      console.log("product list api", res);
      return res;
    })
    .catch((err) => console.error("create product error", err));
};
export const deleteUser = (body) => {
  return instance
    .post("/v1/deleteUser", body)
    .then((res) => {
      console.log("product delete api", res);
      return res;
    })
    .catch((err) => console.error("delete product error", err));
};
export const editPhotos = (name, body) => {
  return instance
    .post(`/v1/editPhotos?username=${name}`, body)
    .then((res) => {
      console.log("on edit click api", res);
      return res;
    })
    .catch((err) => {
      console.error("create product error", err);
      return err;
    });
};
