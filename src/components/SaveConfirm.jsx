import supabase from "../services/supabase";
import { Button } from "./Common/Button";

const SaveConfirm = ({
  isEditing,
  showConfirmEdit,
  setShowConfirmEdit,
  password,
  email,
  user,
  setErrorMessage,
}) => {
  const handleUpdateEmail = async () => {
    if (email && email !== user) {
      const { data, error } = await supabase.auth.updateUser({ email });
      if (error) {
        setErrorMessage(error.message);
      } else {
        console.log("User updated: ", data);
        setErrorMessage("");
        window.location.reload();
      }
    }
  };

  const handleUpdatePassword = async () => {
    if (password) {
      const { data, error } = await supabase.auth.updateUser({ password });
      if (error) {
        setErrorMessage(error.message);
      } else {
        console.log("Password updated: ", data);
        setErrorMessage("");
        window.location.reload();
      }
    }
  };

  return (
    <div className="flex justify-start mb-4">
      {isEditing && !showConfirmEdit ? (
        <Button
          type="button"
          size="small"
          onClick={(event) => {
            event.preventDefault();
            setShowConfirmEdit(true);
          }}
        >
          SPARA
        </Button>
      ) : (
        <></>
      )}
      {isEditing && showConfirmEdit ? (
        <div className="flex gap-2">
          <Button
            type="button"
            size="small"
            onClick={async () => {
              console.log("email", email);
              await handleUpdateEmail();
              await handleUpdatePassword();
            }}
          >
            BEKRÄFTA
          </Button>
          <Button
            type="button"
            size="small"
            onClick={() => window.location.reload()}
          >
            AVBRYT
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SaveConfirm;
