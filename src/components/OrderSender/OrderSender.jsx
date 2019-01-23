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
      SMA: "",
      ARI: ""
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
      '{"orders": [{"type": "BUY","amount": 1000.2,"timestamp": "2019-01-25T23:20:44"}]}';
    // TODO : Add the same custom input and button for the SMA coin
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            id="ARI"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              multiline: true,
              rows: 5,
              value: this.state.orderFields["ARI"],
              onChange: event => this.handleChange(event, "ARI"),
              placeholder: fieldPlaceholder
            }}
          />
          <Button
            color="primary"
            onClick={event => this.handleSubmit(event, "ARI")}
          >
            Envoyer ordres Aricoin
          </Button>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(dashboardStyle)(OrderSender);
