import * as React from "react";
import "./style.css";
import { Grid, TextField } from "@mui/material";
import { InputLabel } from "@mui/material";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { StepLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import { TransitionGroup } from "react-transition-group";
import { Fade } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormGroup } from "@mui/material";
import { Radio, RadioGroup } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";

// This is my step name details and name of the steps

function getSteps() {
  return ["Intent Output", "Intent Reward", "Intent Summary"];
}

const BasicForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <FormControl component="fieldset">
        <Card
          sx={{
            maxHeight: 300,
            maxWidth: 345,
            mt: "20px",
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(20px)",
            border: "2px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <CardHeader
            title="How would you like to store your output"
            titleTypographyProps={{
              style: { color: "white" },
            }}
          />
          <CardContent>
            <Controller
              control={control}
              name="basicFormRadio"
              defaultValue=""
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  aria-label="basic-form"
                  name="basic-form"
                >
                  <FormControlLabel
                    sx={{ color: "white" }}
                    value="download"
                    control={<Radio />}
                    label="Download"
                  />
                  <FormControlLabel
                    sx={{ color: "white" }}
                    value="attact to contract"
                    control={<Radio />}
                    label="Attact to contract"
                  />
                </RadioGroup>
              )}
            />
          </CardContent>
        </Card>
      </FormControl>
    </>
  );
};

const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Card
        sx={{
          maxHeight: 500,
          maxWidth: 345,
          mt: "20px",
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(20px)",
          border: "2px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <CardHeader
          title="Intent Rewards"
          titleTypographyProps={{ style: { color: "white" } }}
        />
        <CardContent>
          <Controller
            control={control}
            name="rewardPerExecution"
            render={({ field }) => (
              <TextField
                id="rewardPerExecution"
                label="Reward Per Execution USDT"
                variant="outlined"
                placeholder="Reward Per Execution USDT"
                fullWidth
                margin="normal"
                InputProps={{
                  sx: { color: "white", borderColor: "white" },
                }}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="totalReward"
            render={({ field }) => (
              <TextField
                id="totalReward"
                label="Total Reward USDT"
                variant="outlined"
                placeholder="totalReward"
                fullWidth
                margin="normal"
                {...field}
                InputProps={{
                  sx: {
                    "& fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            )}
          />
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small">Max</Button>
        </CardActions>
      </Card>
    </>
  );
};

const PersonalForm = () => {
  // const { control } = useFormContext();
  return (
    <>
      <TableContainer
        sx={{
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(20px)",
          border: "2px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Table>
          <TableBody sx={{ width: "1000px" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }} component="th" scope="row">
                Wallet Address
              </TableCell>
              <TableCell sx={{ alignItems: "center", color: "white" }}>
                1FfmbHfnpaZjKFvyi1okTjJJusN455paPH
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }} component="th" scope="row">
                Balance
              </TableCell>
              <TableCell sx={{ color: "white" }}>0.04xDAI</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }} component="th" scope="row">
                Approved Reward
              </TableCell>
              <TableCell sx={{ color: "white" }}>1234..6xDPT</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }} component="th" scope="row">
                Current Reward balance
              </TableCell>
              <TableCell sx={{ color: "white" }}>34..6xDPT</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }} component="th" scope="row">
                Price per execution
              </TableCell>
              <TableCell sx={{ color: "white" }}>10xDPT</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Card sx={{ maxHeight: 500, maxWidth: 500, mt: '20px' }}>
        <CardContent>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row"><Typography>Wallet Address</Typography></TableCell>
                  <TableCell sx={{ alignItems: 'center' }}>1FfmbHfnpaZjKFvyi1okTjJJusN455paPH</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Balance</TableCell>
                  <TableCell>0.04xDAI</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Approved Reward</TableCell>
                  <TableCell>1234..6xDPT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Current Reward balance</TableCell>
                  <TableCell>34..6xDPT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Price per execution</TableCell>
                  <TableCell>10xDPT</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        </CardContent>

      </Card> */}
      {/* <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}
    </>
  );
};

// const PaymentForm = () => {
//   const { control } = useFormContext();
//   return (
//     <>
//       <Controller
//         control={control}
//         name="cardNumber"
//         render={({ field }) => (
//           <TextField
//             id="cardNumber"
//             label="Card Number"
//             variant="outlined"
//             placeholder="Enter Your Card Number"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="cardMonth"
//         render={({ field }) => (
//           <TextField
//             id="cardMonth"
//             label="Card Month"
//             variant="outlined"
//             placeholder="Enter Your Card Month"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="cardYear"
//         render={({ field }) => (
//           <TextField
//             id="cardYear"
//             label="Card Year"
//             variant="outlined"
//             placeholder="Enter Your Card Year"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//     </>
//   );
// };

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    // case 3:
    //   return <PaymentForm />;
    default:
      return "You Almost done for now!";
  }
}

export default function StepForm() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = (data) => {
    if (activeStep == steps.length - 1) {
      console.log("data", data);
    }
    console.log(data);
    setActiveStep(activeStep + 1);
    // if (activeStep == steps.length - 1) {
    //   fetch("https://jsonplaceholder.typicode.com/comments")
    //     .then((data) => data.json())
    //     .then((res) => {
    //       console.log(res);
    //       setActiveStep(activeStep + 1);
    //     });
    // } else {
    //   setActiveStep(activeStep + 1);
    //   setSkippedSteps(
    //     skippedSteps.filter((skipItem) => skipItem !== activeStep)
    //   );
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      basicFormRadio: "",
      // emailAddress: "",
      // phoneNumber: "",
      // alternatePhone: "",
      rewardPerExecution: "",
      totalReward: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className="IntentPageclass">
      <Grid
        container
        display={"flex"}
        justifyContent={""}
        spacing={10}
      // gap={2}
      >
        <Grid
          item
          md={3}
          sm={12}
          display={"flex"}
          alignItems={"self-start"}
          justifyContent={"center"}
          sx={{ pt: "1000px", backgroundColor: "grey" }}
        >
          <Stepper
            he
            nonLinear
            activeStep={activeStep}
            orientation={isSmallScreen ? "vertical" : "horizontal"}
          >
            {steps.map((step, index) => {
              const labelProps = {};
              const stepProps = {};
              return (
                <Step {...stepProps} key={index}>
                  <StepButton
                    color="inherit"
                    onClick={() => setActiveStep(index)}
                  >
                    <StepLabel {...labelProps}>{step}</StepLabel>
                  </StepButton>
                </Step>
              );
            })}
          </Stepper>
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          display={"flex"}
          position={"relative"}
          bottom={"150px"}
          left={"170px"}
          alignItems={"center"}
        >
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
            </form>
          </FormProvider>
          <Grid
            container
            display={"flex"}
            justifyContent={""}
            paddingTop={"100px"}
          >
            {activeStep !== steps.length - 1 && (
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
            )}

            {activeStep !== steps.length - 1 && 
             <Button
             variant="contained"
             color="primary"
             onClick={handleNext}
           // type="submit"
           >
             {activeStep === steps.length - 1 ? "Finish" : "Next"}
           </Button>
             }
             {}

           
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

// import React from 'react'
// import './style.css';
// export default function IntentPage() {
//   return (
//     <div style={{height:'100%', backgroundColor:'#25304c', display:'flex', justifyContent:'center', flex:'1'}}>intentSpecificpage
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     </div>
//   )
// }
