// import React from "react";
// import { useField } from "formik";
// import { TextField } from "@mui/material";

// export default function Textinput({ type, placeholder, ...props }) {
//   const [field, meta] = useField(props);
//   const errorMessage = meta.error && meta.touched ? meta.error : null;

//   return (
//     <div>
//       <TextField
//         {...field}
//         type={type}
//         placeholder={placeholder}
//         variant="outlined"
//         helperText={errorMessage}
//         error={errorMessage}
//         fullWidth
//       />
//     </div>
//   );
// }

export default function ErrorProps(props) {
  return (
    <div
      style={{
        textAlign: "left",
        color: "red",
        fontSize: "0.9rem",
        marginTop: "0.5rem"
      }}
    >
      {props.children}
    </div>
  );
}
