import React, { FC } from "react";

import S from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input: FC<InputProps> = (props) => {
  return <S.Root type="text" {...props} />;
};
