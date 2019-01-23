import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import AccessTime from "@material-ui/icons/AccessTime";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import Balance from "components/Balance/Balance.jsx";
import Chart from "components/Chart/Chart.jsx";
import OrderSender from "components/OrderSender/OrderSender.jsx";
import Ranking from "components/Ranking/Ranking.jsx";

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Balance />
          </GridItem>
          <GridItem xs={12} sm={12} md={9}>
            <Ranking />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <Chart />
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
                <OrderSender />
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
