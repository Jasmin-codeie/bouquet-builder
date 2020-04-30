import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    function hideModal() {
      setError(false);
    }

    useEffect(() => {
      axios.interceptors.response.use(
        (response) => response,
        (error) => setError(error)
      );
    }, []);

    return (
      <>
        <Modal show={error} hideCallBack={hideModal}>
          Ajax didnt work
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};
export default withErrorHandler;
