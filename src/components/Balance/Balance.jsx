import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Store from "@material-ui/icons/Store";
import { getMyData } from "helpers/helpers";

class Balance extends React.Component {
  state = {
    balance: null
  };
  componentDidMount = async () => {
    const me = await getMyData();
    this.setState({
      balance: me.capital
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="success" stats icon>
          <CardIcon color="success">
            <Store />
          </CardIcon>
          <p className={classes.cardCategory}>Cash</p>
          <h3 className={classes.cardTitle}>
            {this.state.balance ? `${this.state.balance}€` : "?"}
          </h3>
        </CardHeader>
        <CardFooter stats />
      </Card>
    );
  }
}

export default withStyles(dashboardStyle)(Balance);
