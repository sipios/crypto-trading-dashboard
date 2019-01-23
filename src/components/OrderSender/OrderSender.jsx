import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { areValidOrders, sendOrders } from "helpers/helpers";

class OrderSender extends React.Component {
  state = {
    orderFields: {
      smartcoin: "",
      aricoin: ""
    }
  };
  handleChange = (event, coin) => {
    this.setState({
      orderFields: { ...this.state.orderFields, [coin]: event.target.value }
    });
  };
  handleSubmit = async (event, coin) => {
    if (!areValidOrders(this.state.orderFields[coin])) {
      alert("Les ordres ne sont pas correctement formattés");
      return;
    }
    sendOrders(coin, this.state.orderFields[coin]);
  };
  render() {
    const fieldPlaceholder =
      '{"orders": [{"type": "BUY","amount": 1000.2,"timestamp": "2019-01-21T23:20:44+00:00"}]}';
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            id="aricoin"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              multiline: true,
              rows: 5,
              value: this.state.orderFields["aricoin"],
              onChange: event => this.handleChange(event, "aricoin"),
              placeholder: fieldPlaceholder
            }}
          />
          <Button
            color="primary"
            onClick={event => this.handleSubmit(event, "aricoin")}
          >
            Envoyer ordres Aricoin
          </Button>
          <CustomInput
            id="smartcoin"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              multiline: true,
              rows: 5,
              value: this.state.orderFields["smartcoin"],
              onChange: event => this.handleChange(event, "smartcoin"),
              placeholder: fieldPlaceholder
            }}
          />
          <Button
            color="primary"
            onClick={event => this.handleSubmit(event, "smartcoin")}
          >
            Envoyer ordres Smartcoin
          </Button>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(dashboardStyle)(OrderSender);
