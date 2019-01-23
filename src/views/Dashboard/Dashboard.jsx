import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Store from "@material-ui/icons/Store";

class Dashboard extends React.Component {
  state = {
    value: 0,
    ranking: [],
    series: [],
    orderFields: {
      smartCoin: "",
      ariCoin: ""
    },
    balance: null,
    token: ""
  };
  componentDidMount = async () => {
    const response = await fetch("http://localhost:8000/ranking");
    const ranking = await response.json();
    const seriesResponse = await fetch("http://localhost:8000/series");
    const rawSeries = await seriesResponse.json();
    const balanceResponse = await fetch("http://localhost:8000/mo");
    const me = await balanceResponse.json();
    const series = rawSeries.map(s => ({
      name: s.name,
      data: _.unzip([s.timestamps, s.values])
    }));
    this.setState({
      ranking,
      series,
      balance: me.capital
    });
  };
  handleChange = (event, coin) => {
    this.setState({
      orderFields: { ...this.state.orderFields, [coin]: event.target.value }
    });
  };
  areValidOrders = input => {
    try {
      const parsed = JSON.parse(input);
      if (!parsed.orders || !Array.isArray(parsed.orders)) {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  };
  handleSubmit = async (event, coin) => {
    if (!this.areValidOrders(this.state.orderFields[coin])) {
      alert("Les ordres ne sont pas correctement formattés");
      return;
    }
    const response = await fetch(`http://localhost:8000/${coin}/orders`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: this.state.token
      },
      body: this.state.orderFields[coin]
    });
    if (response.status === 200) {
      alert("Les ordres ont bien été envoyés");
    } else {
      alert("Les ordres n'ont pas pu être envoyés");
    }
  };
  render() {
    const { classes } = this.props;
    const fieldPlaceholder =
      '{"orders": [{"type": "BUY","amount": 1000.2,"timestamp": "2019-01-21T23:20:44+00:00"}]}';
    const options = {
      credits: {
        enabled: false
      },
      navigator: {
        enabled: false
      },
      scrollbar: {
        enabled: false
      },
      rangeSelector: {
        enabled: false
      },
      legend: {
        enabled: true
      },
      series: this.state.series
    };
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
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
          </GridItem>
          <GridItem xs={12} sm={12} md={9}>
            <Card>
              <CardHeader color="success">
                <h4 className={classes.cardTitleWhite}>Classement Traders</h4>
                <p className={classes.cardCategoryWhite}>
                  Le Trading n’est pas un métier payé à l’heure. C’est un métier
                  payé à la décision.
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={["ID", "Name", "Balance", "Difficulté"]}
                  tableData={this.state.ranking}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <HighchartsReact
                highcharts={Highcharts}
                constructorType={"stockChart"}
                options={options}
              />
              <CardBody>
                <h4 className={classes.cardTitle}>Crypto Perf</h4>
                <p className={classes.cardCategory}>
                  Derniers chiffres du marché
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Marchés ouverts de 21h30 à 22h30
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Carnet d'ordres</h4>
                <p className={classes.cardCategoryWhite}>
                  Tout ordre doit être programmé entre 21h30 (inclus) et 22h30
                  (exclus). Tout nouveau carnet d'ordre envoyé annule le
                  précédent.
                </p>
              </CardHeader>
              <CardBody>
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
                        onChange: () => this.handleChange("aricoin"),
                        placeholder: fieldPlaceholder
                      }}
                    />
                    <Button
                      color="primary"
                      onClick={() => this.handleSubmit("aricoin")}
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
                        onChange: () => this.handleChange("smartcoin"),
                        placeholder: fieldPlaceholder
                      }}
                    />
                    <Button
                      color="primary"
                      onClick={() => this.handleSubmit("smartcoin")}
                    >
                      Envoyer ordres Smartcoin
                    </Button>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
