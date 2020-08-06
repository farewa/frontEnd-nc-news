import React, {useContext} from "react";
import { UserContext } from "../../App";
import { MessageTag, StyledButton } from "../styled/lib"

export const LogOut = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <MessageTag>logged in as {user}</MessageTag>
      <StyledButton
        onClick={() => setUser("")}
        type={"submit"}
      >
        logout
    </StyledButton>
    </div>
  )
 
};
