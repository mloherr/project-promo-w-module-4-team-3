import React from "react";
import PropTypes from "prop-types";
import "../scss/components/LabelButton.scss";

function GetAvatar({ updateAvatar, text, id }) {
  const fr = new FileReader();
  const myFileField = React.createRef();
  const uploadImage = (ev) => {
    console.log("La usuaria ha abierto la ventana para elegir ficheros");
    console.log("La usuaria ha elegido los ficheros", ev.currentTarget.files);
    console.log(
      "El primero de los ficheros elegidos es",
      ev.currentTarget.files[0]
    );

    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener("load", getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    updateAvatar(image, id);
  };

  return (
    <div className="get-avatar">
      <label className="button">
        {text}
        <input
          type="file"
          ref={myFileField}
          style={{ display: "none" }}
          id={id}
          onChange={uploadImage}
        />
      </label>
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string,
  updateAvatar: PropTypes.func.isRequired,
  text: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default GetAvatar;
