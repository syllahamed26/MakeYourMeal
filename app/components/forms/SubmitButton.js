import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, style}) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} style={style} />;
}

export default SubmitButton;
