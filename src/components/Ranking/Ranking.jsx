import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { getRankingData } from "helpers/helpers";

class Ranking extends React.Component {
  state = {
    ranking: []
  };
  componentDidMount = async () => {
    const ranking = await getRankingData();
    this.setState({
      ranking
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="success">
          <h4 className={classes.cardTitleWhite}>Classement Traders</h4>
          <p className={classes.cardCategoryWhite}>
            Le Trading n’est pas un métier payé à l’heure. C’est un métier payé
            à la décision.
          </p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="success"
            tableHead={["Name", "Balance", "Difficulté"]}
            tableData={this.state.ranking}
          />
        </CardBody>
      </Card>
    );
  }
}

Ranking.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Ranking);
