import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorProps from "../data/Texterror";
import emailjs from "emailjs-com";
import {
  Grid,
  Button,
  Box,
  Container,
  TextField,
} from "@mui/material";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const onSubmit = (data, { setSubmitting, resetForm }) => {
  emailjs
  .sendForm(
    "service_9681v2f",
    "template_whjdrba",
    "form",
    "F0Hs8n751RZsysHKR"
  )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
  setSubmitting(true);
  console.log("submit:", data);
  setSubmitting(false);
  resetForm();
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email.").required("Required"),  
  phone: Yup.string().matches(
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
       "Phone number is not valid",{message:"not valid phone no",excludeEmptyString:true}
  ).required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

export default function Contactform() {
  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ mt: 8, display: "flex" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, isSubmitting, resetForm }) => (
            <Form>
              <Grid container spacing={2} sx={{ marginTop: "-50px" }}>
                <Grid container spacing={3} sx={{ marginBottom: "15px" }}>
                  <Grid item xs={12} md={6} xl={6}>
                    <Field
                      as={TextField}
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      helperText={
                        <ErrorMessage name="name" component={ErrorProps} />
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6} xl={6}>
                    <Field
                      as={TextField}
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      fullWidth
                      helperText={
                        <ErrorMessage name="email" component={ErrorProps} />
                      }
                    />
                  </Grid>
                 
                  <Grid item xs={12} md={6} xl={6}>
                    <Field
                      as={TextField}
                      type="text"
                      placeholder="Your Phone"
                      name="phone"
                      helperText={
                        <ErrorMessage name="phone" component={ErrorProps} />
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    xl={6}
                    sx={{ marginBottom: "15px" }}
                  >
                    <Field
                      as={TextField}
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      fullWidth
                      helperText={
                        <ErrorMessage name="subject" component={ErrorProps} />
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      className="textarea"
                      sx={{marginTop:"-15px"}}
                      as={TextField}
                      multiline
                      rows={4}
                      type="text"
                      placeholder="Your message here"
                      name="message"
                      fullWidth
                    />

                    <ErrorMessage name="message" component={ErrorProps} />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      variant="contained"
                      disabled={isSubmitting}
                      type="submit"
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        textTransform: "uppercase",
                        fontWeight: 600,

                        backgroundColor: "#ff451b",
                        ":hover": {
                          backgroundColor: "orange",
                          color: "white",
                        },
                        padding: { xs: "10px 25px", md: "14px 50px" },
                        borderRadius: "10px",
                        whiteSpace: "nowrap",
                        transition: "all .3s ease",
                      }}
                    >
                      Submit Now
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
