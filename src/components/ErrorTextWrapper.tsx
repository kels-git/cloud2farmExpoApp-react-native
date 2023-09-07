import React from "react";
import { useTailwind } from "tailwind-rn";

import { ResponsiveUi } from "./responsive-ui";
import { COLORS } from "../constants/colors";

interface ErrorProps {
  hasError: boolean;
  isvalid: boolean;
  errorMessage: string;
}

const ErrorTextWrapper: React.FC<ErrorProps> = ({
  hasError,
  isvalid,
  errorMessage,
}) => {
  const tailwind = useTailwind();
  return (
    <>
      {hasError && isvalid ? (
        <ResponsiveUi.Text
          regular
          h7
          color={COLORS.ERROR}
          style={[tailwind("mb-7 -mt-3")]}
        >
          {errorMessage}
        </ResponsiveUi.Text>
      ) : null}
    </>
  );
};
export default ErrorTextWrapper;
